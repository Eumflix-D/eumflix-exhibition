/**
 * 음플릭스 〈전람회의 그림〉 전시관 — 감상평 방명록 저장소
 * 구글 시트 '감상평' 탭에 한 줄씩 쌓여요.
 *  - '상태' 칸이 '보임'인 글만 전시관에 나와요.
 *  - 비속어·개인정보가 있는 글은 '숨김(자동)'으로 저장되고 전시관에는 안 나와요.
 *  - 선생님이 '상태' 칸을 '숨김'으로 바꾸면 그 글은 1분 안에 전시관에서 사라져요.
 */
var SHEET_NAME = '감상평';

var BAD = [
  '시발','씨발','씨바','씨빨','시빨','씌발','쒸발','쉬발','슈발','십발','씹','ㅅㅂ','ㅆㅂ','ㅅㅃ','ㅆㅃ','sibal','ssibal',
  '병신','븅신','빙신','ㅂㅅ','ㅄ','병쉰',
  '좆','ㅈ같','존나','졸라','존내','ㅈㄴ','줫','조까','좃',
  '개새','개색','개섀','개쉑','개세끼','새끼','섀끼','쉐끼','색히','ㅅㄲ',
  '미친놈','미친년','미친새','미친것','미쳤냐','ㅁㅊ','미띤',
  '닥쳐','닥치','꺼져','ㄲㅈ','지랄','ㅈㄹ','염병','옘병','썅','쌍놈','쌍년',
  '엿먹','느금','니애미','니엄마','니미','니앰','애미','애비','에미','엠창','앰창','니기미',
  '걸레','창녀','창년','보지','자지','섹스','야동','후장','딸딸',
  '등신','찐따','또라이','돌아이','꼴통','호로','븅','ㅗㅗ',
  '한남','김치녀','틀딱','급식충','맘충','한녀',
  'fuck','fuk','shit','bitch','dick','pussy','porn','sex','nigg','fck','wtf'
];

function norm_(s) {
  return String(s || '').toLowerCase().replace(/[\s\d_.,!?~^*@#$%&()\[\]{}<>'"`\-+=:;\/\\|ㆍ·…♡♥☆★♪♬]/g, '');
}
function isBad_(s) { var t = norm_(s); for (var i = 0; i < BAD.length; i++) if (t.indexOf(BAD[i]) >= 0) return true; return false; }
function hasPersonal_(s) {
  s = String(s || '');
  return /(01[016789]|0\d{1,2})[\s.\-]?\d{3,4}[\s.\-]?\d{4}/.test(s) ||
    /https?:\/\/|www\.|\.(com|net|kr|io|me|ly)\b/i.test(s) ||
    /[\w.+-]+@[\w-]+\.[\w.]+/.test(s) ||
    /(인스타|insta|카톡|카카오톡|디엠|dm\b|오픈채팅|페메|틱톡\s*아이디)/i.test(s);
}
function safeCell_(s) { s = String(s); return /^[=+\-@]/.test(s) ? "'" + s : s; } // 시트 수식 실행 막기

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['시간', '그림 번호', '별명', '감상평', '상태', '기기']);
    sh.setFrozenRows(1);
    sh.setColumnWidth(4, 420);
    var rule = SpreadsheetApp.newDataValidation().requireValueInList(['보임', '숨김', '숨김(자동)'], true).build();
    sh.getRange('E2:E').setDataValidation(rule);
  }
  return sh;
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/** 전시관이 감상평 목록을 가져갈 때 */
function doGet(e) {
  var cache = CacheService.getScriptCache();
  var out = cache.get('list');
  if (!out) {
    var values = sheet_().getDataRange().getValues().slice(1);
    var items = [];
    for (var i = 0; i < values.length; i++) {
      var r = values[i];
      if (r[4] !== '보임') continue;
      items.push({ t: new Date(r[0]).getTime(), p: Number(r[1]), n: String(r[2]), m: String(r[3]).replace(/^'/, '') });
    }
    out = JSON.stringify({ ok: true, items: items.slice(-600) });
    cache.put('list', out, 60);
  }
  return ContentService.createTextOutput(out).setMimeType(ContentService.MimeType.JSON);
}

/** 학생이 감상평을 붙일 때 */
function doPost(e) {
  var d;
  try { d = JSON.parse(e.postData.contents); } catch (x) { return json_({ ok: false, msg: '잘못된 요청이에요.' }); }
  var p = parseInt(d.p, 10);
  if (!(p >= 1 && p <= 10)) return json_({ ok: false, msg: '그림을 먼저 골라 주세요.' });
  var n = String(d.n || '').replace(/\s+/g, ' ').trim().slice(0, 12) || '익명 관람객';
  var m = String(d.m || '').replace(/\r/g, '').trim();
  if (m.length < 5) return json_({ ok: false, msg: '조금만 더 써 줄래요? 다섯 글자 이상이면 돼요.' });
  if (m.length > 200) m = m.slice(0, 200);
  var dev = String(d.dev || 'none').slice(0, 40);

  var cache = CacheService.getScriptCache();
  if (cache.get('dev:' + dev)) return json_({ ok: false, msg: '30초 뒤에 다시 남길 수 있어요.' });
  var minuteKey = 'g:' + Math.floor(Date.now() / 60000);
  var cnt = Number(cache.get(minuteKey) || 0);
  if (cnt >= 60) return json_({ ok: false, msg: '지금 감상평이 너무 많이 들어오고 있어요. 잠시 뒤에 다시 해 주세요.' });

  var bad = isBad_(n + ' ' + m), personal = hasPersonal_(n + ' ' + m);
  var status = (bad || personal) ? '숨김(자동)' : '보임';
  var devHash = Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, dev)).slice(0, 10);

  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(5000);
    sheet_().appendRow([new Date(), p, safeCell_(n), safeCell_(m), status, devHash]);
  } catch (x) {
    return json_({ ok: false, msg: '저장하지 못했어요. 잠시 뒤에 다시 해 주세요.' });
  } finally { lock.releaseLock(); }

  cache.put('dev:' + dev, '1', 30);
  cache.put(minuteKey, String(cnt + 1), 120);
  cache.remove('list');
  if (bad) return json_({ ok: false, msg: '바르고 고운 말로 다시 써 줄래요? 🙂' });
  if (personal) return json_({ ok: false, msg: '전화번호·주소·SNS 아이디 같은 개인정보는 쓸 수 없어요.' });
  return json_({ ok: true });
}

/** 처음 한 번 실행: 시트 탭 만들기 */
function setup() { sheet_(); }
