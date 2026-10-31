/* 음플릭스 〈전람회의 그림〉 전시관 */
const CFG = window.EXHIBIT_CONFIG || {};
const ROOMS=[null,
 {t:'난쟁이',o:'Gnomus',p:['안짱다리로 뒤뚱거리는 난쟁이 모양의 호두까기 장난감 그림이에요.','달리다 갑자기 멈추고 또 불쑥 튀어나가요. 쉼표의 정적까지 음악이에요.'],
  i:'라벨 편곡: <b>저음 현악기</b>가 기어가고 목관·금관이 날카롭게 끼어들어요.',m:'낮은 리드 소리가 뒤뚱거리다 뚝 멈추는 프롬나드 변주',q:'전람회의 그림 난쟁이 Gnomus'},
 {t:'옛 성',o:'Il vecchio castello',p:['중세의 성 앞에서 음유시인이 노래하는 장면이에요.','같은 음이 끝없이 깔리는 저음 위로 쓸쓸한 선율이 흘러요.'],
  i:'라벨 편곡: 선율을 <b>알토 색소폰</b>에 맡겼어요. 오케스트라 곡에서 보기 드문 선택이에요.',m:'낮은 지속음 위의 느린 단조 프롬나드',q:'전람회의 그림 옛 성 색소폰'},
 {t:'튀일리 궁전',o:'Tuileries',p:['파리 튀일리 공원에서 아이들이 놀다 티격태격하는 모습이에요.','짧게 조르는 음형이 반복돼요. "놀아줘, 놀아줘" 하는 목소리 같죠.'],
  i:'라벨 편곡: <b>오보에와 플루트</b>가 아이들처럼 재잘거려요.',m:'높고 빠르게 통통 튀는 프롬나드',q:'전람회의 그림 튀일리'},
 {t:'소달구지',o:'Bydło',p:['커다란 바퀴의 폴란드 소달구지가 진흙길을 지나가요.','무거운 걸음이 한결같이 이어지고, 다가왔다 멀어지는 거리감을 소리 크기로 그렸어요.'],
  i:'라벨 편곡: <b>튜바</b>가 아주 높은 음역으로 독주해요. 작게 시작해 커졌다가 사라져요.',m:'무겁게 끄는 저음 프롬나드, 커졌다 작아져요',q:'전람회의 그림 비들로 튜바'},
 {t:'껍질을 덜 벗은 병아리들의 발레',o:'Ballet of the Unhatched Chicks',p:['발레 공연을 위해 하르트만이 그린 의상 스케치예요. 달걀 껍데기를 입은 아이 무용수들이죠.','트릴과 꾸밈음이 가득해서 병아리가 종종거리는 소리처럼 들려요.'],
  i:'라벨 편곡: <b>플루트·오보에·클라리넷</b>이 높은 음으로 삐약거려요.',m:'꾸밈음을 단 아주 높은 프롬나드',q:'전람회의 그림 병아리들의 발레'},
 {t:'사무엘 골든베르크와 슈뮐레',o:'Samuel Goldenberg und Schmuÿle',p:['부유한 사람과 가난한 사람, 두 인물 그림을 바탕으로 했어요.','한 사람은 묵직하게, 다른 사람은 떨리는 목소리로 하소연해요.'],
  i:'라벨 편곡: 부자는 <b>현악기 저음 유니즌</b>, 가난한 사람은 <b>약음기 트럼펫</b>의 빠른 반복음이에요.',m:'묵직한 저음과 떨리는 반복음이 번갈아 나오는 프롬나드',q:'전람회의 그림 골든베르크 슈뮐레'},
 {t:'리모주의 시장',o:'Limoges. Le marché',p:['프랑스 리모주 시장에서 아낙네들이 수다를 떨어요.','쉴 틈 없이 쏟아지는 빠른 음표가 시장의 소란을 옮겨요.'],
  i:'라벨 편곡: <b>현악기와 목관</b>이 정신없이 말을 주고받아요.',m:'잘게 쪼갠 음표로 수다스러운 프롬나드',q:'전람회의 그림 리모주 시장'},
 {t:'카타콤',o:'Catacombae',p:['하르트만이 등불을 들고 파리 지하 묘지를 둘러보는 자기 모습을 그렸어요.','길게 울리는 화음이 어둠 속에서 크게, 작게 번갈아 울려요.'],
  i:'라벨 편곡: <b>금관 합주</b>가 동굴처럼 울려요. 이어서 산책 주제가 단조로 나오는 〈죽은 자와 함께 죽은 언어로〉가 이어져요.',m:'단조 금관 화음으로 바뀐 프롬나드',q:'전람회의 그림 카타콤'},
 {t:'닭다리 위의 오두막',o:'Baba Yaga',p:['하르트만이 디자인한 시계예요. 마녀 바바야가가 사는, 닭다리로 걷는 오두막 모양이에요.','쿵쾅거리는 리듬으로 마녀가 날아다니다 마지막 곡으로 곧장 이어져요.'],
  i:'라벨 편곡: <b>팀파니·큰북·금관</b>이 거칠게 몰아쳐요.',m:'북소리 위로 거칠게 몰아치는 프롬나드',q:'전람회의 그림 바바야가'},
 {t:'키이우(키예프)의 대문',o:'The Great Gate of Kiev',p:['하르트만이 설계 공모에 낸 키이우 성문 그림이에요. 실제로 지어지지는 않았어요.','장엄한 찬가 사이로 프롬나드 주제가 다시 나타나요. 산책하던 관람객이 마침내 대문을 지나는 거예요.'],
  i:'라벨 편곡: <b>오케스트라 전체와 종소리</b>가 울려요.',m:'종소리와 장엄한 화음으로 쌓은 프롬나드',q:'전람회의 그림 키예프의 대문'}
];
const LOST=new Set([1,2,3,4,7]); /* 원화가 남아 있지 않은 곡 */
const KEYS=[null,'gnomus','castle','tuileries','bydlo','chicks','goldenberg','limoges','catacombs','babayaga','gate'];
const COLORS=['#2f4b6e','#b5543c','#5b7d5a','#d6a23a','#6e5f8f','#3a3a3a'];
const yt=q=>'https://www.youtube.com/results?search_query='+encodeURIComponent(q);

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } } };
const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
function listenLink(i) {
  const v = CFG.video || {};
  if (v.url) { try { const u = new URL(v.url); const s = (v.starts || {})[i] || 0; if (s) u.searchParams.set('t', s + 's'); return { href: u.toString(), label: '음플릭스 영상으로 듣기 ↗' } } catch (e) { } }
  return { href: yt(i ? ROOMS[i].q : '전람회의 그림 라벨'), label: '실제 연주 찾아 듣기 ↗' };
}

/* ---------- 별명 (채팅·자유 이름 없이 자동 별명만) ---------- */
const ADJ = ['씩씩한', '졸린', '반짝이는', '수줍은', '용감한', '느긋한', '신나는', '다정한', '엉뚱한', '차분한', '당당한', '명랑한', '조용한', '부지런한', '상냥한', '궁금한'];
const NOUN = ['튜바', '바순', '플루트', '오보에', '호른', '첼로', '하프', '팀파니', '트럼펫', '클라리넷', '비올라', '피콜로', '트롬본', '색소폰', '대금', '가야금'];
const nickOf = (a, b) => ADJ[a % 16] + ' ' + NOUN[b % 16];

/* ================= 그림 ================= */
let cx;
function cut(on){cx.shadowColor='rgba(0,0,0,.35)';cx.shadowOffsetX=on?5:0;cx.shadowOffsetY=on?5:0;cx.shadowBlur=0}
function R(c,x,y,w,h){cx.fillStyle=c;cx.fillRect(x,y,w,h)}
function C(c,x,y,r){cx.fillStyle=c;cx.beginPath();cx.arc(x,y,Math.max(0,r),0,7);cx.fill()}
function P(c,pts){cx.fillStyle=c;cx.beginPath();cx.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)cx.lineTo(pts[i],pts[i+1]);cx.closePath();cx.fill()}
function L(c,w,pts){cx.strokeStyle=c;cx.lineWidth=w;cx.lineCap='round';cx.beginPath();cx.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)cx.lineTo(pts[i],pts[i+1]);cx.stroke()}
function E(c,x,y,rx,ry,rot){cx.fillStyle=c;cx.beginPath();cx.ellipse(x,y,rx,ry,rot||0,0,7);cx.fill()}
const DRAW={
 gnomus(t){cut(0);R('#24382a',0,0,800,600);R('#3d5a34',0,430,800,170);
  for(let i=0;i<7;i++)P('#1a2a1f',[i*130-20,430,i*130+50,140+(i%3)*40,i*130+120,430]);
  const x=400+Math.round(Math.sin(t*1.1)*2)*60,y=360-Math.abs(Math.sin(t*4))*8;
  cut(1);L('#6b3b1f',16,[x-30,y+40,x-60,y+90,x-30,y+130]);L('#6b3b1f',16,[x+30,y+40,x+70,y+80,x+40,y+130]);
  E('#8a4a2a',x,y,62,70);C('#e3b48a',x,y-80,50);P('#b3322b',[x-55,y-100,x+55,y-100,x+10,y-230]);
  cut(0);C('#fff',x-18,y-85,10);C('#fff',x+18,y-85,10);C('#111',x-16,y-83,5);C('#111',x+20,y-83,5);L('#5a2a14',5,[x-22,y-55,x+22,y-55]);
  cut(1);L('#e3b48a',12,[x-55,y-10,x-110,y-40]);L('#e3b48a',12,[x+55,y-10,x+110,y+20]);},
 castle(t){cut(0);R('#2a2550',0,0,800,600);R('#463a6e',0,200,800,250);R('#1d2a3a',0,450,800,150);
  for(let i=0;i<40;i++){const a=.4+.6*Math.abs(Math.sin(t*1.5+i));C(`rgba(255,240,200,${a})`,(i*97)%800,(i*53)%200,2)}
  C('#efe3b0',640,90,40);cut(1);R('#15122b',230,180,340,280);for(let i=0;i<9;i++)R('#15122b',230+i*40,160,24,24);
  R('#15122b',190,120,70,340);R('#15122b',540,90,80,370);P('#15122b',[190,120,225,50,260,120]);P('#15122b',[540,90,580,10,620,90]);
  R('#f2c45a',300,260,22,34);R('#f2c45a',470,300,22,34);
  const s=Math.sin(t*2)*3;C('#5a3a62',120,430+s,18);P('#7d4a8c',[95,440+s,145,440+s,155,520,85,520]);E('#c9a24a',150,480,22,14,-.5);L('#c9a24a',4,[160,472,200,440]);},
 tuileries(t){cut(0);R('#bfe0ea',0,0,800,600);R('#8cbf6a',0,380,800,220);
  cut(1);[[100,330,70],[250,300,90],[620,310,95],[740,340,60]].forEach(([x,y,r])=>{R('#6b4a2a',x-8,y,16,90);C('#4f8a3a',x,y-20,r)});
  const b1=Math.abs(Math.sin(t*5))*30,b2=Math.abs(Math.sin(t*5+1.5))*30;
  [[330,b1,'#e05a4a'],[470,b2,'#3f6f9a']].forEach(([x,b,c])=>{C('#f0c9a0',x,400-b,22);P(c,[x-30,480-b,x+30,480-b,x,415-b]);L('#f0c9a0',6,[x-10,480-b,x-12,505-b]);L('#f0c9a0',6,[x+10,480-b,x+12,505-b])});
  C('#f2c45a',400+Math.sin(t*2.5)*40,500,16);C('#e8d7c0',600,380,24);P('#5a4a6a',[565,520,635,520,600,400]);},
 bydlo(t){cut(0);R('#8c8a86',0,0,800,600);R('#6e5a3e',0,380,800,220);R('#5a4a33',0,470,800,130);
  const ph=(t%14)/14,s=.55+Math.sin(ph*Math.PI)*.55,x=120+ph*560;cx.save();cx.translate(x,430);cx.scale(s,s);
  cut(1);E('#4a3324',-60,-60,90,52);C('#4a3324',-150,-80,32);P('#e8dcc0',[-170,-110,-200,-135,-160,-100]);P('#e8dcc0',[-135,-110,-110,-140,-140,-100]);
  [-110,-80,-30,-5].forEach(lx=>R('#3a2618',lx,-20,12,50));R('#7d5a36',20,-120,190,80);
  C('#3a2618',130,-10,58);cut(0);C('#7d5a36',130,-10,44);for(let k=0;k<8;k++){const an=t*2+k*Math.PI/4;L('#3a2618',6,[130,-10,130+Math.cos(an)*44,-10+Math.sin(an)*44])}
  cx.restore();},
 chicks(t){cut(0);R('#f2d3d0',0,0,800,600);R('#b3322b',0,0,120,600);R('#b3322b',680,0,120,600);R('#d9a85a',0,470,800,130);
  for(let i=0;i<4;i++){const x=200+i*130,h=Math.max(0,Math.sin(t*6+i*1.3))*45;cut(1);
   C('#f7d64a',x,380-h,40);C('#f7d64a',x,330-h,28);P('#e88a2a',[x+24,325-h,x+44,332-h,x+24,338-h]);cut(0);C('#111',x+10,322-h,4);
   cut(1);P('#f6f1e4',[x-48,390-h,x+48,390-h,x+40,450-h,x-40,450-h]);P('#f6f1e4',[x-48,392-h,x-30,372-h,x-14,392-h,x+2,372-h,x+18,392-h,x+34,372-h,x+48,392-h]);
   L('#e88a2a',5,[x-12,450-h,x-14,470]);L('#e88a2a',5,[x+12,450-h,x+14,470])}},
 goldenberg(t){cut(0);R('#7a1f24',0,0,400,600);R('#4a5560',400,0,400,600);R('#3a1a14',0,470,800,130);
  cut(1);E('#1c1612',220,360,120,140);C('#e6c09a',220,190,58);R('#1c1612',150,110,140,30);R('#1c1612',175,40,90,80);E('#2b1a12',220,250,40,24);
  cut(0);C('#111',200,185,5);C('#111',240,185,5);cut(1);C('#c9a24a',220,330,10);
  const j=Math.sin(t*28)*3;R('#8a8378',560+j,230,70,250);C('#e0c4a2',595+j,190,40);L('#8a8378',12,[565+j,260,520+j,330]);L('#8a8378',12,[625+j,260,670+j,320]);
  P('#5a4f45',[555+j,175,635+j,175,620+j,140,570+j,140]);cut(0);C('#111',583+j,192,4);C('#111',607+j,192,4);L('#5a3a2a',3,[585+j,212,605+j,214]);},
 limoges(t){cut(0);R('#f0d9a8',0,0,800,600);R('#c9b48a',0,420,800,180);
  for(let i=0;i<4;i++){const x=i*210;cut(1);R('#7d5a36',x+20,200,8,230);R('#7d5a36',x+170,200,8,230);
   for(let k=0;k<6;k++)P(k%2?'#f6f1e4':(i%2?'#3f6f9a':'#b3322b'),[x+10+k*28,140,x+38+k*28,140,x+38+k*28,210,x+24+k*28,225,x+10+k*28,210]);
   R('#a86a3a',x+30,330,140,40);C('#e05a4a',x+60,325,12);C('#8cbf6a',x+90,325,12);C('#f2c45a',x+120,325,12)}
  [[150,'#5a4a6a'],[330,'#b3322b'],[520,'#3f6f9a'],[690,'#6a8f4e']].forEach(([x,c],i)=>{cut(1);C('#f0c9a0',x,420,22);P(c,[x-34,540,x+34,540,x,435]);
   if(Math.sin(t*3+i*1.7)>.2){cut(0);E('#fff',x+40,370,30,20);P('#fff',[x+18,380,x+10,398,x+30,385]);for(let d=0;d<3;d++)C('#2b1a12',x+28+d*12,370,3)}})},
 catacombs(t){cut(0);R('#120c08',0,0,800,600);
  for(let i=0;i<3;i++){cut(1);const w=520-i*150,h=520-i*130;cx.fillStyle=['#2b2018','#211810','#18120c'][i];cx.beginPath();cx.moveTo(400-w/2,600);cx.lineTo(400-w/2,600-h+w/2);cx.arc(400,600-h+w/2,w/2,Math.PI,0);cx.lineTo(400+w/2,600);cx.fill()}
  cut(0);for(let r=0;r<4;r++)for(let k=0;k<3;k++){[40,660].forEach(bx=>{const x=bx+k*40+(r%2)*20,y=220+r*60;C('#d8ccb0',x,y,14);R('#d8ccb0',x-7,y+8,14,10);C('#120c08',x-5,y-1,4);C('#120c08',x+5,y-1,4)})}
  const fl=.85+((Math.sin(t*13)+Math.sin(t*7.3))*.06);cx.fillStyle=`rgba(242,196,90,${.18*fl})`;cx.beginPath();cx.arc(470,330,150*fl,0,7);cx.fill();
  cut(1);C('#3a2e26',430,300,24);P('#3a2e26',[400,320,460,320,475,500,385,500]);L('#3a2e26',8,[455,350,480,320]);
  R('#5a4a3a',470,300,20,28);cut(0);C('#f7d64a',480,314,7*fl);},
 babayaga(t){cut(0);R('#3a3550',0,0,800,600);R('#232030',0,480,800,120);
  for(let i=0;i<5;i++)E('#4a4566',i*190,80+(i%2)*40,130,40);
  const st=Math.abs(Math.sin(t*3))*-20,lg=Math.sin(t*6)*20;
  cut(1);L('#e88a2a',12,[350,380+st,340+lg,480]);L('#e88a2a',12,[450,380+st,460-lg,480]);
  [[330+lg,485],[470-lg,485]].forEach(([x,y])=>{L('#e88a2a',6,[x,y,x-24,y+8]);L('#e88a2a',6,[x,y,x+24,y+8]);L('#e88a2a',6,[x,y,x,y+14])});
  R('#6b4a2a',280,220+st,240,170);P('#3a2618',[260,230+st,540,230+st,400,110+st]);for(let k=0;k<5;k++)R('#5a3a22',280,240+st+k*30,240,6);
  cut(0);C('#f6f1e4',400,300+st,40);const a=t*1.2;L('#2b1a12',5,[400,300+st,400+Math.cos(a)*30,300+st+Math.sin(a)*30]);L('#2b1a12',6,[400,300+st,400+Math.cos(a/12)*20,300+st+Math.sin(a/12)*20]);
  cut(1);const bx=640+Math.sin(t*1.7)*60,by=150+Math.cos(t*2.3)*30;E('#7a6a5a',bx,by,40,14,-.3);C('#2b1a12',bx-10,by-30,14);P('#2b1a12',[bx-24,by-38,bx+4,by-38,bx-14,by-70]);},
 gate(t){cut(0);R('#f2c45a',0,0,800,600);
  cx.save();cx.translate(400,250);cx.rotate(t*.08);for(let k=0;k<16;k++){cx.rotate(Math.PI/8);P('#f7d77a',[0,0,30,-700,-30,-700])}cx.restore();
  R('#c9a24a',0,470,800,130);cut(1);R('#8a3a2a',170,250,460,230);R('#a84a32',150,230,500,30);
  cx.fillStyle='#3a1620';cx.beginPath();cx.moveTo(320,480);cx.lineTo(320,380);cx.arc(400,380,80,Math.PI,0);cx.lineTo(480,480);cx.fill();
  R('#f6f1e4',360,120,80,110);cx.fillStyle='#3f6f9a';cx.beginPath();cx.moveTo(360,120);cx.quadraticCurveTo(360,40,400,20);cx.quadraticCurveTo(440,40,440,120);cx.fill();
  C('#c9a24a',400,15,10);cx.save();cx.translate(400,140);cx.rotate(Math.sin(t*2.4)*.35);P('#c9a24a',[-18,10,18,10,26,60,-26,60]);cx.restore();
  for(let k=0;k<5;k++)R('#f6f1e4',190+k*100,290,30,60);}
};



/* ================= 소리 ================= */
const PROM=[[-3,1],[-5,1],[0,1],[2,1],[7,.5],[4,.5],[2,1],[7,.5],[4,.5],[0,1],[2,1],[-3,1],[-5,1]];
const minorOf=n=>n===4?3:n===-3?-4:n;
let ac=null,master=null,soundOn=true,playing=null,want='promenade',noiseBuf=null;
const hz=n=>466.16*Math.pow(2,n/12);
function env(g,t,a,peak,d){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(peak,t+a);g.gain.setTargetAtTime(peak*.7,t+a,.12);g.gain.setValueAtTime(peak*.7,t+Math.max(a,d));g.gain.linearRampToValueAtTime(0,t+d+.12)}
function play(dest,v,t,n,d,g){
  const f=hz(n),out=ac.createGain();out.connect(dest);
  if(v==='brass'||v==='reed'||v==='bass'){
    const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=v==='bass'?420:Math.min(3200,f*(v==='reed'?3:4));lp.Q.value=v==='reed'?2:.7;
    const types=v==='reed'?['square','square']:['sawtooth','sawtooth'];
    types.forEach((ty,k)=>{const o=ac.createOscillator();o.type=ty;o.frequency.value=f*(k?1.005:1);o.connect(lp);o.start(t);o.stop(t+d+.3)});
    lp.connect(out);env(out,t,v==='bass'?.02:.04,g,d);
  }else if(v==='flute'){
    const o=ac.createOscillator();o.type='sine';o.frequency.value=f;const o2=ac.createOscillator();o2.type='triangle';o2.frequency.value=f*2;
    const g2=ac.createGain();g2.gain.value=.15;o.connect(out);o2.connect(g2);g2.connect(out);[o,o2].forEach(x=>{x.start(t);x.stop(t+d+.3)});env(out,t,.05,g,d);
  }else if(v==='pluck'){
    const o=ac.createOscillator();o.type='triangle';o.frequency.value=f;o.connect(out);o.start(t);o.stop(t+d+.4);
    out.gain.setValueAtTime(g,t);out.gain.exponentialRampToValueAtTime(.0005,t+Math.max(.12,d)+.25);
  }else if(v==='bell'){
    [[1,1],[2,.5],[3.01,.3],[4.16,.2]].forEach(([m,a])=>{const o=ac.createOscillator();o.type='sine';o.frequency.value=f*m;const gg=ac.createGain();
      gg.gain.setValueAtTime(g*a,t);gg.gain.exponentialRampToValueAtTime(.0005,t+2.6/m+.4);o.connect(gg);gg.connect(out);o.start(t);o.stop(t+3)});
    out.gain.value=1;
  }else if(v==='drum'){
    const s=ac.createBufferSource();s.buffer=noiseBuf;const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=200;s.connect(lp);lp.connect(out);
    const o=ac.createOscillator();o.frequency.setValueAtTime(110,t);o.frequency.exponentialRampToValueAtTime(45,t+.2);o.connect(out);
    out.gain.setValueAtTime(g,t);out.gain.exponentialRampToValueAtTime(.0005,t+.35);s.start(t);s.stop(t+.4);o.start(t);o.stop(t+.4);
  }
}
const PIECES={
 promenade(){const B=.5,ev=[];let t=0;PROM.forEach(([n,b])=>{ev.push([t,'brass',n,b*B*.92,.13]);t+=b*B});
   ev.push([0,'bass',-24,5*B,.07],[5*B,'bass',-29,6*B,.07]);return{len:12*B,ev}},
 gnomus(){const B=.3,ev=[];let t=0;PROM.forEach(([n,b],i)=>{ev.push([t,'reed',minorOf(n)-12,b*B*.45,.12]);if(i===0||i===6)ev.push([t,'drum',0,.2,.5]);t+=b*B;if(i===3||i===5||i===9)t+=2*B});return{len:t+3*B,ev}},
 castle(){const B=.8,ev=[];let t=0;PROM.forEach(([n,b])=>{ev.push([t,'reed',minorOf(n)-12,b*B*.98,.08]);t+=b*B});
   for(let k=0;k<t/B;k++)ev.push([k*B,'pluck',-24-5,.6,.06]);ev.push([0,'bass',-24,t,.05]);return{len:t+B,ev}},
 tuileries(){const B=.24,ev=[];let t=0;PROM.forEach(([n,b],i)=>{ev.push([t,'flute',n+12,b*B*.55,.12]);if(i%2===0)ev.push([t,'pluck',n-12,.15,.07]);t+=b*B});return{len:t+2*B,ev}},
 bydlo(){const B=.8,ev=[];let t=0,tot=11*B;PROM.forEach(([n,b])=>{const g=.05+.12*Math.sin(Math.PI*(t+.4)/tot);ev.push([t,'brass',minorOf(n)-12,b*B*.95,g]);t+=b*B});
   for(let k=0;k<12;k++)ev.push([k*B,'bass',k%2?-29:-24,B*.6,.05+.05*Math.sin(Math.PI*k/12)]);return{len:12*B,ev}},
 chicks(){const B=.2,ev=[];let t=0;PROM.forEach(([n,b])=>{ev.push([t,'pluck',n+25,.05,.06],[t+.06,'pluck',n+24,b*B*.4,.1]);t+=b*B});return{len:t+3*B,ev}},
 goldenberg(){const ev=[];let t=0,B=.6;PROM.slice(0,6).forEach(([n,b])=>{const m=minorOf(n);ev.push([t,'brass',m-12,b*B*.95,.11],[t,'bass',m-24,b*B*.95,.08]);t+=b*B});
   t+=B;const Q=.42;PROM.slice(6).forEach(([n,b])=>{for(let r=0;r<3;r++)ev.push([t+r*Q*b/3,'reed',minorOf(n)+12,Q*b/3*.5,.05]);t+=b*Q});return{len:t+B,ev}},
 limoges(){const B=.36,ev=[];let t=0;PROM.forEach(([n,b])=>{const s=b*B/4;[0,2,0,4].forEach((o,k)=>ev.push([t+k*s,'pluck',n+12+o,s*.8,.08]));t+=b*B});return{len:t+B,ev}},
 catacombs(){const B=1.6,ev=[];let t=0;PROM.slice(0,7).forEach(([n],i)=>{const m=minorOf(n),g=i%2?.05:.12;[m-12,m-9,m-5].forEach(x=>ev.push([t,'brass',x,B*1.05,g]));ev.push([t,'bass',m-24,B,g*.8]);t+=B});return{len:t+B,ev}},
 babayaga(){const B=.28,ev=[];let t=0;PROM.forEach(([n,b],i)=>{const m=minorOf(n);ev.push([t,'bass',m-24,b*B*.5,.11],[t,'brass',m-12,b*B*.45,.08]);t+=b*B});
   for(let k=0;k<Math.round(t/B);k++)ev.push([k*B,'drum',0,.2,k%4===0?.7:.35]);return{len:Math.ceil(t/B+2)*B,ev}},
 gate(){const B=.9,ev=[];let t=0;PROM.forEach(([n,b],i)=>{[n-12,n-8,n-5,n].forEach(x=>ev.push([t,'brass',x,b*B*.97,.055]));ev.push([t,'bass',n-24,b*B,.06]);if(i%2===0)ev.push([t,'bell',n+12,2,.06]);t+=b*B});
   ev.push([t,'bell',0,3,.08],[t,'bell',-12,3,.08]);return{len:t+2*B,ev}}
};

const BUILT = {};
const bufCache = new Map(), bufFail = new Set(), bufLoading = new Map();
function audioKey(name) { return name === 'promenade' ? 0 : KEYS.indexOf(name) }
function loadBuf(name) {
  const k = audioKey(name), src = (CFG.audio || {})[k];
  if (!src || bufFail.has(name)) return Promise.resolve(null);
  if (bufCache.has(name)) return Promise.resolve(bufCache.get(name));
  if (bufLoading.has(name)) return bufLoading.get(name);
  const p = fetch(src).then(r => { if (!r.ok) throw 0; return r.arrayBuffer() }).then(a => new Promise((res, rej) => ac.decodeAudioData(a, res, rej)))
    .then(b => { bufCache.set(name, b); while (bufCache.size > 3) { const first = [...bufCache.keys()].find(x => x !== name && x !== want); bufCache.delete(first) } return b })
    .catch(() => { bufFail.add(name); return null }).finally(() => bufLoading.delete(name));
  bufLoading.set(name, p); return p;
}
function initAudio() {
  if (VID.on) { VID.unlock(); return }
  if (ac) return; try { ac = new (window.AudioContext || window.webkitAudioContext)() } catch (e) { return }
  master = ac.createGain(); master.gain.value = soundOn ? .9 : 0; const comp = ac.createDynamicsCompressor(); master.connect(comp); comp.connect(ac.destination);
  noiseBuf = ac.createBuffer(1, ac.sampleRate * .4, ac.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++)d[i] = Math.random() * 2 - 1;
  for (const k in PIECES) BUILT[k] = PIECES[k]();
  loadBuf('promenade'); setInterval(tick, 100);
}
function startTrack(name) {
  if (playing) { const old = playing; old.g.gain.setTargetAtTime(0, ac.currentTime, .3); setTimeout(() => { try { old.src && old.src.stop() } catch (e) { } old.g.disconnect() }, 2500) }
  const g = ac.createGain(); g.gain.setValueAtTime(0, ac.currentTime); g.gain.linearRampToValueAtTime(1, ac.currentTime + .7); g.connect(master);
  const buf = bufCache.get(name);
  if (buf) { const s = ac.createBufferSource(); s.buffer = buf; s.loop = true; s.connect(g); s.start(); playing = { name, g, src: s, real: true } }
  else { playing = { name, g, next: ac.currentTime + .08, real: false }; loadBuf(name) }
}
function tick() {
  if (VID.on) return;
  if (!ac) return;
  if (!playing || playing.name !== want) startTrack(want);
  else if (!playing.real && bufCache.has(want)) startTrack(want);
  if (!playing.real && bufLoading.has(playing.name)) return; // 음원 불러오는 중에는 조용히 기다리기
  if (!playing.real) { const p = BUILT[playing.name]; while (playing.next < ac.currentTime + .6) { const t0 = playing.next; p.ev.forEach(([t, v, n, d, g]) => play(playing.g, v, t0 + t, n, d, g)); playing.next += p.len } }
}


/* ================= 음플릭스 영상으로 듣기 (유튜브 플레이어를 화면에 띄워 구간 재생) ================= */
const VID = (() => {
  const v = CFG.video || {}; let id = null;
  try { const u = new URL(v.url); id = u.hostname.includes('youtu.be') ? u.pathname.slice(1) : u.searchParams.get('v') } catch (e) { }
  const on = !!(v.embed && id && v.segments);
  const box = document.getElementById('vid'), cap = document.getElementById('vidCap');
  let player = null, ready = false, unlocked = false, cur = null, muted = false, timer = null;
  if (on) {
    box.hidden = false;
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('vidPlayer', { videoId: id, playerVars: { playsinline: 1, rel: 0, modestbranding: 1, controls: 1, start: v.segments[0][0] },
        events: { onReady: () => { ready = true; if (unlocked) apply(true) } } })
    };
    const s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s);
    document.getElementById('vidSize').onclick = () => { const big = box.classList.toggle('big'); document.getElementById('vidSize').textContent = big ? '작게' : '크게' };
  }
  function seg(k) { return v.segments[k] || v.segments[0] }
  function apply(force) {
    if (!ready || !unlocked) return;
    const k = want === 'promenade' ? 0 : KEYS.indexOf(want);
    if (k !== cur || force) {
      cur = k; const [a] = seg(k); player.seekTo(a, true); if (!muted) player.playVideo();
      cap.textContent = k ? `${String(k).padStart(2, '0')} ${ROOMS[k].t}` : '프롬나드 · 전시실을 걸어요';
    }
  }
  function loop() {
    if (!ready || !unlocked) return; apply(false);
    const st = player.getPlayerState && player.getPlayerState(); if (st !== 1) return;
    const t = player.getCurrentTime(), [a, b] = seg(cur);
    if (t >= b - .4 || t < a - 2) { if (cur === 0) player.seekTo(a, true); else { player.pauseVideo(); cap.textContent += ' · 다시 들으려면 ▶' } }
  }
  return {
    on,
    unlock() { if (!on) return; unlocked = true; if (ready) { apply(true) } if (!timer) timer = setInterval(loop, 300) },
    mute(m) { muted = m; if (!ready) return; if (m) player.pauseVideo(); else player.playVideo() }
  };
})();

/* ================= 3D 공간 ================= */
const W2 = 7, LEN = 48;
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.outputEncoding = THREE.sRGBEncoding; stage.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color('#0f0e0d'); scene.fog = new THREE.Fog('#0f0e0d', 6, 26);
const camera = new THREE.PerspectiveCamera(55, 1, .1, 120);
const hemi = new THREE.HemisphereLight('#ffffff', '#d8d2c8', .12); scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffffff', .05); sun.position.set(4, 12, 2); scene.add(sun);
const spot = new THREE.SpotLight('#ffe9c4', 2.6, 16, .42, .55, 1.2); spot.position.set(0, 5.6, -2.6); scene.add(spot); scene.add(spot.target);
const BRIGHT = new THREE.Color('#eceae6'), DARK = new THREE.Color('#0f0e0d'); let lit = 0;
function canvasTex(w, h, fn, rep) { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); fn(g, w, h); const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]) } t.anisotropy = 8; return t }
// 밝은 오크 마루 (길게 깐 널)
const floorTex = canvasTex(512, 512, (g) => { const tones = ['#cdb08a', '#c8aa83', '#d2b691', '#c4a57e']; for (let y = 0; y < 16; y++) { const off = (y * 197) % 512; for (let k = -1; k < 2; k++) { g.fillStyle = tones[(y + k + 4) % 4]; g.fillRect(off + k * 512, y * 32, 512, 32) } g.fillStyle = 'rgba(90,60,30,.10)'; g.fillRect(0, y * 32, 512, 1); g.fillRect(off % 512, y * 32, 1, 32) } for (let i = 0; i < 900; i++) { g.fillStyle = 'rgba(120,85,50,.05)'; g.fillRect(Math.random() * 512, Math.random() * 512, 30 + Math.random() * 60, 1) } }, [3, 12]);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(W2 * 2, LEN), new THREE.MeshLambertMaterial({ map: floorTex })); floor.rotation.x = -Math.PI / 2; floor.position.z = -LEN / 2; scene.add(floor);
const wallMat = new THREE.MeshLambertMaterial({ color: '#f7f6f3' });
const baseMat = new THREE.MeshLambertMaterial({ color: '#e2ded7' });
function wall(w, h, x, z, ry) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), wallMat); m.position.set(x, h / 2, z); m.rotation.y = ry; scene.add(m);
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, .12, .04), baseMat); b.position.set(x, .06, z); b.rotation.y = ry; scene.add(b)
}
const H = 6.2; wall(LEN, H, -W2, -LEN / 2, Math.PI / 2); wall(LEN, H, W2, -LEN / 2, -Math.PI / 2); wall(W2 * 2, H, 0, -LEN, 0); wall(W2 * 2, H, 0, 0, Math.PI);
const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W2 * 2, LEN), new THREE.MeshLambertMaterial({ color: '#f2f1ee' })); ceil.rotation.x = Math.PI / 2; ceil.position.set(0, H, -LEN / 2); scene.add(ceil);
// 천장 채광창
const skyMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
for (let z = -4; z > -LEN; z -= 8) { const s = new THREE.Mesh(new THREE.PlaneGeometry(6, 3.2), skyMat); s.rotation.x = Math.PI / 2; s.position.set(0, H - .01, z - 2); scene.add(s) }
// 그림 비추는 레일 조명
const rail = new THREE.MeshLambertMaterial({ color: '#2a2a2a' });
[-W2 + 1.6, W2 - 1.6].forEach(x => { const r = new THREE.Mesh(new THREE.BoxGeometry(.06, .06, LEN - 4), rail); r.position.set(x, H - .3, -LEN / 2); scene.add(r) });
// 벤치: 오크 상판 + 흰 받침
const BENCHES = [[0, -12], [0, -30]]; const benchTop = new THREE.MeshLambertMaterial({ color: '#b48a5a' }), benchLeg = new THREE.MeshLambertMaterial({ color: '#ffffff' });
BENCHES.forEach(([x, z]) => { const t = new THREE.Mesh(new THREE.BoxGeometry(3.4, .08, .8), benchTop); t.position.set(x, .46, z); scene.add(t);[-1.4, 1.4].forEach(dx => { const l = new THREE.Mesh(new THREE.BoxGeometry(.12, .42, .7), benchLeg); l.position.set(x + dx, .21, z); scene.add(l) }) });
// 입구 벽 글씨
function makeSign(logo, face) {
  return canvasTex(1600, 800, (g, w, h) => {
    g.fillStyle = '#f7f6f3'; g.fillRect(0, 0, w, h); g.fillStyle = '#161616'; g.textAlign = 'left';
    if (logo) { const lh = 64; g.drawImage(logo, 80, 70, lh * logo.naturalWidth / logo.naturalHeight, lh); g.font = '500 34px Pretendard, sans-serif'; g.fillText('온라인 전시', 100 + lh * logo.naturalWidth / logo.naturalHeight, 122) } else { g.font = '500 34px Pretendard, sans-serif'; g.fillText('음플릭스 온라인 전시', 80, 120) }
    g.font = '800 170px Pretendard, sans-serif'; g.fillText('전람회의 그림', 70, 320);
    g.font = '500 44px Pretendard, sans-serif'; g.fillStyle = '#55524c'; g.fillText('모데스트 무소륵스키, 1874', 80, 400);
    if (face) { const fh = 330, fw = fh * face.naturalWidth / face.naturalHeight, fx = 1520 - fw; g.fillStyle = '#e4e1da'; g.fillRect(fx - 10, 90, fw + 20, fh + 20); g.drawImage(face, fx, 100, fw, fh); g.font = '400 24px Pretendard, sans-serif'; g.fillStyle = '#6b6760'; g.textAlign = 'right'; g.fillText('모데스트 무소륵스키 (1839–1881)', 1520, 445 + 0); g.textAlign = 'left' }
    g.fillStyle = '#161616'; g.fillRect(80, face ? 465 : 450, 1440, 2);
    g.font = '400 36px Pretendard, sans-serif'; g.fillStyle = '#33312d';
    ['1873년, 화가 빅토르 하르트만이 서른아홉에 세상을 떠났습니다. 이듬해 열린 유작전에서', '무소륵스키는 그림 열 점을 골라 피아노 모음곡으로 옮겼습니다. 그림 사이를 걷는', '발걸음은 〈프롬나드〉가 되었습니다. 전시실 안쪽으로 걸어 들어가 보세요.'].forEach((s, i) => g.fillText(s, 80, 530 + i * 58))
  })
}
const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(7, 3.5), new THREE.MeshBasicMaterial({ map: makeSign() })); signMesh.position.set(0, 2.7, -.03); signMesh.rotation.y = Math.PI; scene.add(signMesh);
const LOGO_SRC = CFG.logo || 'assets/brand/eumflix-logo.png';
{ let L = null, F = null; const redraw = () => { signMesh.material.map = makeSign(L, F); signMesh.material.needsUpdate = true };
  const li = new Image(); li.onload = () => { L = li; redraw() }; li.src = LOGO_SRC;
  if (CFG.portrait) { const fi = new Image(); fi.onload = () => { F = fi; redraw() }; fi.src = CFG.portrait } }

/* 그림 걸기 */
const PICS = [null];
const frameMat = new THREE.MeshLambertMaterial({ color: '#1e1e1e' });
const matMat = new THREE.MeshLambertMaterial({ color: '#ffffff' });
function placeholder(g, i) { g.fillStyle = '#e9e6e0'; g.fillRect(0, 0, 800, 600); g.strokeStyle = '#cfcac1'; g.lineWidth = 2; for (let k = -600; k < 800; k += 28) { g.beginPath(); g.moveTo(k, 600); g.lineTo(k + 600, 0); g.stroke() } g.fillStyle = '#e9e6e0'; g.fillRect(200, 210, 400, 180); g.fillStyle = '#161616'; g.textAlign = 'center'; g.font = '800 64px Pretendard, sans-serif'; g.fillText(String(i).padStart(2, '0'), 400, 290); g.font = '500 26px Pretendard, sans-serif'; g.fillStyle = '#55524c'; g.fillText('작품 설치 중', 400, 345) }
function hang(i) {
  let x, z, ry, nx, nz, w = 3.2, h = 2.4, y = 2.45;
  if (i === 10) { x = 0; z = -LEN + .12; ry = 0; nx = 0; nz = 1; w = 4.8; h = 3.6; y = 2.9 }
  else if (i % 2) { x = -W2 + .12; z = -6 - (i - 1) * 4; ry = Math.PI / 2; nx = 1; nz = 0 }
  else { x = W2 - .12; z = -6 - (i - 1) * 4; ry = -Math.PI / 2; nx = -1; nz = 0 }
  const c = document.createElement('canvas'); c.width = 800; c.height = 600; const g = c.getContext('2d'); placeholder(g, i);
  const tex = new THREE.CanvasTexture(c); tex.encoding = THREE.sRGBEncoding; tex.anisotropy = 8;
  const grp = new THREE.Group(); grp.position.set(x, y, z); grp.rotation.y = ry; scene.add(grp);
  const fr = new THREE.Mesh(new THREE.BoxGeometry(1, 1, .06), frameMat); fr.scale.set(w + .1, h + .1, 1); grp.add(fr);
  const pic = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex })); pic.scale.set(w, h, 1); pic.position.z = .075; pic.userData.pic = i; grp.add(pic);
  const spot = new THREE.Mesh(new THREE.CylinderGeometry(.07, .09, .26, 12), rail); spot.position.set(0, (H - .45) - y, 1.25); spot.rotation.x = -.7; grp.add(spot);
  const lab = canvasTex(512, 300, (gg) => { gg.fillStyle = '#ffffff'; gg.fillRect(0, 0, 512, 300); gg.fillStyle = '#161616'; gg.textAlign = 'left'; gg.font = '700 30px Pretendard, sans-serif'; gg.fillText(String(i).padStart(2, '0'), 34, 62); gg.font = '700 36px Pretendard, sans-serif'; const t = ROOMS[i].t; if (t.length > 11) { gg.fillText(t.slice(0, t.lastIndexOf(' ', 11) > 0 ? t.lastIndexOf(' ', 11) : 11), 34, 130); gg.fillText(t.slice(t.lastIndexOf(' ', 11) > 0 ? t.lastIndexOf(' ', 11) + 1 : 11), 34, 176) } else gg.fillText(t, 34, 130); gg.font = 'italic 400 24px Pretendard, sans-serif'; gg.fillStyle = '#6b6760'; gg.fillText(ROOMS[i].o.slice(0, 30), 34, 232); gg.font = '400 22px Pretendard, sans-serif'; gg.fillText('무소륵스키, 1874', 34, 272) });
  const lb = new THREE.Mesh(new THREE.PlaneGeometry(.68, .4), new THREE.MeshBasicMaterial({ map: lab })); lb.position.set(w / 2 + .62, 1.5 - y + .0, .02); grp.add(lb);
  // 감상평 메모판 (그림 왼쪽 벽)
  const notes = new THREE.Group(); notes.position.set(-(w / 2 + 1.05), .1, .03); grp.add(notes);
  const P = { i, ctx: g, tex, pic, fr, grp, lb, notes, real: false, front: new THREE.Vector3(x + nx * 2.4, 0, z + nz * (i === 10 ? 3.4 : 2.4)), n: new THREE.Vector3(nx, 0, nz), center: new THREE.Vector3(x, y, z), w, h, maxW: w, maxH: h };
  PICS.push(P);
  // 선생님 그림 파일이 있으면 바꿔 끼우기
  const src = (CFG.images || {})[i];
  if (src) { const im = new Image(); im.onload = () => { const t2 = new THREE.Texture(im); t2.encoding = THREE.sRGBEncoding; t2.anisotropy = 8; t2.needsUpdate = true; pic.material.map = t2; pic.material.needsUpdate = true; P.real = true;
    const a = im.naturalWidth / im.naturalHeight; let ww = P.maxW * (i === 10 ? 1.15 : 1.25), hh = ww / a; if (hh > P.maxH * 1.1) { hh = P.maxH * 1.1; ww = hh * a } P.w = ww; P.h = hh; pic.scale.set(ww, hh, 1); fr.scale.set(ww + .36, hh + .36, 1); lb.position.set(ww / 2 + .62, 1.5 - y, .02); notes.position.set(-(ww / 2 + 1.05), .1, .03) }; im.src = src }
}
for (let i = 1; i <= 10; i++)hang(i);

/* 아바타 */
function nameTag(text, mine) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d'); g.font = '600 28px Pretendard, sans-serif';
  const w = Math.min(250, g.measureText(text).width + 28); g.fillStyle = mine ? '#161616' : 'rgba(255,255,255,.94)'; g.fillRect((256 - w) / 2, 10, w, 44); g.fillStyle = mine ? '#ffffff' : '#161616'; g.textAlign = 'center'; g.fillText(text, 128, 42);
  const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false })); s.scale.set(1.2, .3, 1); s.position.y = 2.15; s.renderOrder = 10; return s
}
/* 동물 아바타: 둥근 몸 + 만화 명암(툰) + 얇은 윤곽선 */
const KINDS = [
  { n: '곰', fur: '#b07a4f', belly: '#efd2ab', snout: '#efd2ab', nose: '#3a2418', ear: 'round', tail: 'ball' },
  { n: '토끼', fur: '#f6f2ec', belly: '#ffffff', snout: '#ffffff', nose: '#e88a9a', ear: 'long', inner: '#f6b9c4', tail: 'puff' },
  { n: '고양이', fur: '#f2a65f', belly: '#fff3e2', snout: '#fff3e2', nose: '#e88a9a', ear: 'tri', inner: '#f6b9c4', tail: 'long' },
  { n: '여우', fur: '#ea7a3b', belly: '#fff6ec', snout: '#fff6ec', nose: '#2a1a12', ear: 'fox', inner: '#3a2418', tail: 'fox' },
  { n: '펭귄', fur: '#2d3548', belly: '#ffffff', ear: 'none', beak: '#f4a23a', tail: 'none' },
  { n: '판다', fur: '#ffffff', belly: '#ffffff', snout: '#ffffff', nose: '#22252b', ear: 'round', earC: '#22252b', limb: '#22252b', patch: '#22252b', tail: 'ball', tailC: '#22252b' },
  { n: '강아지', fur: '#ead5b2', belly: '#fff7ea', snout: '#fff7ea', nose: '#2a1a12', ear: 'floppy', earC: '#a5754a', tail: 'up' },
  { n: '개구리', fur: '#7cc46c', belly: '#ecf6cc', ear: 'none', frog: true, tail: 'none' }
];
const KIND_ORDER = KINDS.map((_, i) => i);
const GRAD = (() => { const t = new THREE.DataTexture(new Uint8Array([90, 170, 255]), 3, 1, THREE.LuminanceFormat); t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true; return t })();
const TOON = {}; const T = c => TOON[c] || (TOON[c] = new THREE.MeshToonMaterial({ color: c, gradientMap: GRAD }));
const LINE = new THREE.MeshBasicMaterial({ color: '#2a2018', side: THREE.BackSide });
const SPH = new THREE.SphereGeometry(1, 32, 24);
function blob(parent, c, x, y, z, sx, sy, sz, outline) {
  const m = new THREE.Mesh(SPH, T(c)); m.position.set(x, y, z); m.scale.set(sx, sy, sz); parent.add(m);
  if (outline) { const o = new THREE.Mesh(SPH, LINE); o.position.copy(m.position); o.scale.set(sx + .025, sy + .025, sz + .025); parent.add(o) }
  return m
}
function makeAvatar(color, name, mine, kind, parent) {
  kind = Math.abs(kind | 0) % KINDS.length; const A = KINDS[kind], P = parent || scene;
  const g = new THREE.Group(), fur = A.fur, limb = A.limb || fur;
  // 다리
  const legs = [-.17, .17].map(x => { const p = new THREE.Group(); p.position.set(x, .26, 0); blob(p, A.frog || A.beak ? (A.beak || limb) : limb, 0, -.16, .05, .14, .1, .18, true); g.add(p); return p });
  // 몸
  const body = new THREE.Group(); body.position.y = .62; g.add(body);
  blob(body, fur, 0, 0, 0, .42, .44, .38, true);
  blob(body, A.belly, 0, -.04, .14, A.beak ? .32 : .27, A.beak ? .36 : .3, .26, false);
  // 스카프 (고른 색)
  const sc = new THREE.Mesh(new THREE.TorusGeometry(.3, .07, 12, 28), T(color)); sc.rotation.x = Math.PI / 2; sc.position.y = .35; body.add(sc);
  const knot = blob(body, color, .12, .26, .3, .08, .12, .05, false); knot.rotation.z = .4;
  // 팔
  const arms = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(s * .38, .82, 0); const a = blob(p, A.beak ? fur : limb, s * .03, -.16, 0, A.beak ? .08 : .1, A.beak ? .22 : .17, .1, true); a.rotation.z = s * (A.beak ? .35 : .2); g.add(p); return p });
  // 머리
  const head = new THREE.Group(); head.position.y = 1.36; g.add(head);
  const HR = A.frog ? .46 : .5;
  blob(head, fur, 0, 0, 0, HR, HR * .92, HR * .9, true);
  const surf = (x, y) => Math.sqrt(Math.max(0, 1 - (x / HR) ** 2 - (y / (HR * .92)) ** 2)) * HR * .9;
  // 귀
  const earC = A.earC || fur;
  if (A.ear === 'round') [-1, 1].forEach(s => { blob(head, earC, s * .36, .34, -.04, .15, .15, .08, true); if (!A.earC) blob(head, A.belly, s * .36, .34, .02, .08, .08, .04, false) });
  if (A.ear === 'long') [-1, 1].forEach(s => { const e = new THREE.Group(); e.position.set(s * .17, .4, -.04); e.rotation.z = -s * .12; head.add(e); blob(e, fur, 0, .3, 0, .11, .32, .07, true); blob(e, A.inner, 0, .3, .04, .06, .24, .03, false) });
  if (A.ear === 'tri' || A.ear === 'fox') [-1, 1].forEach(s => { const big = A.ear === 'fox'; const e = new THREE.Mesh(new THREE.ConeGeometry(big ? .17 : .14, big ? .34 : .26, 24), T(fur)); e.position.set(s * .29, .4, -.02); e.rotation.z = -s * .4; head.add(e); const o = new THREE.Mesh(e.geometry, LINE); o.position.copy(e.position); o.rotation.copy(e.rotation); o.scale.setScalar(1.08); head.add(o); const i = new THREE.Mesh(new THREE.ConeGeometry(big ? .09 : .075, big ? .2 : .15, 16), T(A.inner)); i.position.set(s * .29, big ? .39 : .38, .07); i.rotation.z = -s * .4; head.add(i) });
  if (A.ear === 'floppy') [-1, 1].forEach(s => { const e = blob(head, earC, s * .44, .02, -.02, .11, .25, .08, true); e.rotation.z = s * .25 });
  // 판다 눈 무늬
  if (A.patch) [-1, 1].forEach(s => { const p = blob(head, A.patch, s * .17, .04, surf(s * .17, .04) - .04, .1, .13, .06, false); p.rotation.z = s * .5 });
  // 눈
  const eyeY = A.frog ? .3 : .05, eyeX = A.frog ? .2 : .17;
  if (A.frog) [-1, 1].forEach(s => blob(head, fur, s * eyeX, eyeY, .14, .15, .15, .14, true));
  [-1, 1].forEach(s => { const z = A.frog ? .27 : surf(s * eyeX, eyeY) - .01; blob(head, A.frog ? '#ffffff' : '#1d1612', s * eyeX, eyeY, z, A.frog ? .1 : .065, A.frog ? .1 : .08, .04, false); if (A.frog) blob(head, '#1d1612', s * eyeX, eyeY, z + .04, .055, .06, .02, false); const hl = new THREE.Mesh(SPH, new THREE.MeshBasicMaterial({ color: '#ffffff' })); hl.scale.setScalar(.022); hl.position.set(s * eyeX + .025, eyeY + .03, z + (A.frog ? .07 : .04)); head.add(hl) });
  // 볼
  const blushM = new THREE.MeshBasicMaterial({ color: '#f39aa0', transparent: true, opacity: .6 });
  [-1, 1].forEach(s => { const b = new THREE.Mesh(new THREE.CircleGeometry(.065, 20), blushM); const x = s * .3, y = -.1; b.position.set(x, y, surf(x, y) + .004); b.rotation.y = Math.asin(x / HR) * .9; head.add(b) });
  // 주둥이 / 부리 / 입
  if (A.beak) { const bk = new THREE.Mesh(new THREE.ConeGeometry(.08, .18, 20), T(A.beak)); bk.rotation.x = Math.PI / 2; bk.position.set(0, -.07, surf(0, -.07) + .06); head.add(bk) }
  else if (A.frog) { const sm = new THREE.Mesh(new THREE.TorusGeometry(.13, .018, 8, 24, Math.PI), new THREE.MeshBasicMaterial({ color: '#2a2018' })); sm.rotation.z = Math.PI; sm.position.set(0, -.08, surf(0, -.08) + .01); head.add(sm) }
  else { blob(head, A.snout, 0, -.11, surf(0, -.11) - .05, .15, .11, .1, false); blob(head, A.nose, 0, -.07, surf(0, -.07) + .035, .045, .035, .03, false) }
  // 꼬리
  const tc = A.tailC || fur;
  if (A.tail === 'ball') blob(body, tc, 0, -.12, -.4, .09, .09, .09, true);
  if (A.tail === 'puff') blob(body, '#ffffff', 0, -.14, -.4, .12, .12, .12, true);
  if (A.tail === 'long') { const t = new THREE.Mesh(new THREE.TorusGeometry(.24, .055, 12, 24, Math.PI * 1.15), T(fur)); t.position.set(0, -.02, -.42); t.rotation.y = Math.PI / 2; body.add(t) }
  if (A.tail === 'fox') { const t = blob(body, fur, 0, -.05, -.5, .14, .14, .3, true); t.rotation.x = .6; blob(body, '#ffffff', 0, .1, -.72, .08, .08, .08, false) }
  if (A.tail === 'up') { const t = blob(body, fur, 0, .08, -.42, .06, .16, .06, true); t.rotation.x = -.5 }
  const sh = new THREE.Mesh(new THREE.CircleGeometry(.48, 24), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: .22 })); sh.rotation.x = -Math.PI / 2; sh.position.y = .01; g.add(sh);
  const tag = nameTag(name, mine); tag.position.y = 2.2; g.add(tag);
  g.userData = { body, head, tag, arms, legs, kind }; P.add(g); return g;
}
function animateAvatar(g, ph, mv, sit) {
  const u = g.userData, s = mv && !RM ? Math.sin(ph) : 0, now = performance.now() / 1000;
  if (sit) { u.legs[0].rotation.x = u.legs[1].rotation.x = -1.45; u.arms[0].rotation.x = u.arms[1].rotation.x = -.7; u.body.position.y = .62 + Math.sin(now * 1.6) * .01; u.head.position.y = 1.36 + Math.sin(now * 1.6 + .4) * .014; u.head.rotation.z = Math.sin(now * .7) * .06; return }
  u.legs[0].rotation.x = s * .6; u.legs[1].rotation.x = -s * .6;
  u.arms[0].rotation.x = -s * .7; u.arms[1].rotation.x = s * .7;
  u.body.position.y = .62 + (mv && !RM ? Math.abs(s) * .05 : Math.sin(now * 2) * .008);
  u.head.position.y = 1.36 + (mv && !RM ? Math.abs(s) * .06 : Math.sin(now * 2 + .5) * .012);
  u.head.rotation.z = mv ? s * .05 : Math.sin(now * .9) * .04;
}
/* 고르기 칸에 쓸 얼굴 사진 (한 번 그려서 이미지로) */
function avatarThumbs(color) {
  const R = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true }); R.setSize(160, 160); R.setPixelRatio(1); R.outputEncoding = THREE.sRGBEncoding;
  const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight('#ffffff', '#b8b0a4', .9)); const d = new THREE.DirectionalLight('#ffffff', .6); d.position.set(2, 4, 5); sc.add(d);
  const cam = new THREE.PerspectiveCamera(24, 1, .1, 20); cam.position.set(.3, 1.45, 2.6); cam.lookAt(0, 1.26, 0);
  const out = KINDS.map((_, k) => { const a = makeAvatar(color, '', false, k, sc); a.userData.tag.visible = false; a.rotation.y = .25; R.render(sc, cam); const url = R.domElement.toDataURL('image/png'); sc.remove(a); return url });
  R.dispose(); return out;
}

/* ================= 상태 ================= */
let me = null, myK = store.get('pae-k2', 0), preview = null, myColor = store.get('pae-color', 0), myA = store.get('pae-a', Math.floor(Math.random() * 16)), myB = store.get('pae-b', Math.floor(Math.random() * 16));
let heading = Math.PI, camYaw = 0, walkT = 0, moving = false;
const pos = new THREE.Vector3(0, 0, -3.5);
let target = null, nearI = 0, nearSince = 0;
const seen = new Set(store.get('pae-seen3', []));
const plaque = document.getElementById('plaque'), toastEl = document.getElementById('toast');
function toast(s) { toastEl.textContent = s; toastEl.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('on'), 2400) }
function updCount() { document.getElementById('count').textContent = `도장 ${seen.size}/10`; if (!document.getElementById('stamps').hidden) renderStamps() }
function renderStamps() {
  const box = document.getElementById('slots'); box.innerHTML = '';
  for (let i = 1; i <= 10; i++) { const on = seen.has(i), b = el('button', 'slot' + (on ? ' on' : '')); b.type = 'button'; const r = el('div', 'ring'); if (on) { r.appendChild(el('b', null, String(i).padStart(2, '0'))); r.appendChild(document.createTextNode('관람 완료!')) } else r.textContent = String(i).padStart(2, '0'); b.appendChild(r); b.appendChild(el('span', null, ROOMS[i].t)); b.onclick = () => { if (me) { target = PICS[i].front.clone(); document.getElementById('stamps').hidden = true } }; box.appendChild(b) }
  const d = document.getElementById('stDone'); d.innerHTML = '';
  if (seen.size >= 10) { const qb = el('button', 'qz-main', '🎵 그림 맞히기 퀴즈'); qb.type = 'button'; qb.onclick = () => { document.getElementById('stamps').hidden = true; quizInvite() }; d.appendChild(qb); if (store.get('pae-cert', null)) { const cb2 = el('button', 'qz-ghost', '📜 감상 확인증'); cb2.type = 'button'; cb2.onclick = () => { document.getElementById('stamps').hidden = true; showCert() }; d.appendChild(cb2) } d.appendChild(el('b', null, '완주! 전람회의 그림 산책을 마쳤어요')); d.appendChild(el('span', null, new Date(store.get('pae-done', Date.now())).toLocaleDateString('ko-KR') + ' · ' + (myName || nickOf(myA, myB)))); if (CFG.video && CFG.video.url) { const a = el('a', null, '음플릭스 영상에 감상평 남기러 가기 ↗'); a.href = CFG.video.url; a.target = '_blank'; a.rel = 'noopener'; a.style.cssText = 'font-weight:700;color:#e30613'; d.appendChild(a) } }
  else d.appendChild(el('span', null, `앞으로 ${10 - seen.size}점 남았어요`));
  // 처음부터 다시 하기 (화면 안에서 한 번 더 확인)
  const rs = el('button', 'qz-ghost small rs', '처음부터 다시 하기'); rs.type = 'button';
  rs.onclick = () => { const box = el('div', 'rs-confirm'); box.appendChild(el('span', null, '도장·퀴즈 기록·감상 확인증이 모두 지워져요. 정말 지울까요?')); const y = el('button', 'qz-main', '지우기'); y.type = 'button'; const n = el('button', 'qz-ghost', '취소'); n.type = 'button';
    y.onclick = () => { ['pae-seen3', 'pae-done', 'pae-cert', 'pae-quiz-best'].forEach(k => { try { localStorage.removeItem(k) } catch (e) { } }); seen.clear(); for (const k in listened) delete listened[k]; updCount(); renderStamps(); if (nearI) showPlaque(nearI, false); toast('기록을 지웠어요. 처음부터 다시 관람해요!') };
    n.onclick = () => renderStamps(); box.append(y, n); rs.replaceWith(box) };
  d.appendChild(rs);
}
function openStamps() { renderStamps(); document.getElementById('stamps').hidden = false; document.getElementById('stClose').focus() }
document.getElementById('count').onclick = openStamps;
document.getElementById('stClose').onclick = () => { document.getElementById('stamps').hidden = true };
document.getElementById('stamps').addEventListener('click', e => { if (e.target.id === 'stamps') e.target.hidden = true });
updCount();
function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e }
const listened = {};
// 도장 기준: 그 작품 음원을 처음부터 끝까지 한 번 (음원이 없으면 기본 음악 한 바퀴)
function needSec(i) { const k = KEYS[i], b = bufCache.get(k); if (b) return Math.max(5, b.duration - .6); if (BUILT[k]) return BUILT[k].len; return 30 }
const C36 = 2 * Math.PI * 36;
function sealHTML(i) {
  const nn = String(i).padStart(2, '0'), done = seen.has(i), p = Math.min(1, (listened[i] || 0) / needSec(i));
  return `<div class="seal ${done ? 'done' : 'wait'}" id="seal"><svg viewBox="0 0 80 80" aria-hidden="true"><circle class="trk" cx="40" cy="40" r="36"/><circle class="prg" cx="40" cy="40" r="36" style="stroke-dasharray:${C36};stroke-dashoffset:${C36 * (1 - p)}"/></svg>
    <span class="st">${done ? `관람<b>완료!</b>` : `관람<b>${nn}</b><i>끝까지 듣기</i>`}</span></div>`
}
function showPlaque(i, fresh) {
  if (!i) { plaque.classList.remove('on'); return }
  const r = ROOMS[i], link = listenLink(i), cnt = (GB.byPic[i] || []).length;
  plaque.innerHTML = `<div class="no">${String(i).padStart(2, '0')} <span>/ 10</span></div><h1></h1><p class="orig"></p><button class="lbl-toggle" type="button">설명 펼치기</button>
   <p>${r.p[0]}</p><p class="src">${LOST.has(i) ? '원래 그림은 사라졌어요. 대신 분위기가 비슷한 다른 그림을 걸었어요.' : '무소륵스키가 본 하르트만의 원래 그림이에요.'}</p><p class="more">${r.p[1]}</p><div class="now">♪ <span class="nowtxt"></span><br>${r.i}</div>
   <div class="row"><button class="btn ghost zoomit" type="button">그림 크게 보기 ⤢</button><a class="btn primary" target="_blank" rel="noopener"></a>
   <a class="btn ghost cmt" target="_blank" rel="noopener">영상 댓글로 감상평 남기기 ↗</a></div>
   ${sealHTML(i)}`;
  plaque.querySelector('h1').textContent = r.t; { const tg = plaque.querySelector('.lbl-toggle'); if (tg) tg.onclick = () => { const open = plaque.classList.toggle('open'); tg.textContent = open ? '설명 접기' : '설명 펼치기' } } plaque.querySelector('.orig').textContent = r.o;
  const a = plaque.querySelector('a'); a.href = link.href; a.textContent = link.label;
  plaque.querySelector('.nowtxt').textContent = VID.on ? '지금 소리: 음플릭스 영상 (윤진 선생님 해설 포함)' : (CFG.audio && CFG.audio[i] && !bufFail.has(KEYS[i])) ? '지금 소리: 음플릭스 음원' : '지금 소리: ' + r.m;
  plaque.querySelector('.zoomit').onclick = () => openViewer(i);
  { const c = plaque.querySelector('.cmt'); if (CFG.video && CFG.video.url) c.href = CFG.video.url; else c.remove() }
  plaque.classList.remove('open'); plaque.classList.add('on');
}

/* ================= 방명록 ================= */
const GB = { items: [], byPic: {}, ok: false, cur: 0 }; // 방명록은 쓰지 않아요 (감상평은 음플릭스 영상 댓글로)
const gbEl = document.getElementById('gb'), gbList = document.getElementById('gbList'), gbChips = document.getElementById('gbChips'), gbMsg = document.getElementById('gbMsg');
const gbText = document.getElementById('gbText'), gbNick = document.getElementById('gbNick'), gbSend = document.getElementById('gbSend'), gbLen = document.getElementById('gbLen');
let devId = store.get('pae-dev', null); if (!devId) { devId = Math.random().toString(36).slice(2) + Date.now().toString(36); store.set('pae-dev', devId) }
function fmtDate(t) { const d = new Date(t); return `${d.getMonth() + 1}월 ${d.getDate()}일` }
function wrapLines(g, text, maxW, maxLines) {
  const out = []; let line = '';
  for (const ch of text) { if (ch === '\n') { out.push(line); line = ''; continue } const test = line + ch; if (g.measureText(test).width > maxW && line) { out.push(line); line = ch } else line = test; if (out.length >= maxLines) break }
  if (out.length < maxLines && line) out.push(line);
  if (out.length > maxLines) out.length = maxLines;
  const joined = out.join(''); if (joined.length < text.replace(/\n/g, '').length && out.length) out[out.length - 1] = out[out.length - 1].slice(0, -1) + '…';
  return out
}
const NOTE_COLORS = ['#fff1a8', '#ffd8cc', '#d6ead0', '#d4e4f4'];
function noteTex(item, k) {
  return canvasTex(256, 256, (g) => {
    g.fillStyle = 'rgba(0,0,0,.08)'; g.fillRect(9, 10, 240, 240); g.fillStyle = NOTE_COLORS[k % 4]; g.fillRect(4, 4, 240, 240);
    g.fillStyle = 'rgba(255,255,255,.55)'; g.fillRect(84, 0, 80, 18);
    g.fillStyle = '#161616'; g.font = '400 25px Pretendard, sans-serif'; wrapLines(g, item.m, 210, 5).forEach((l, j) => g.fillText(l, 20, 66 + j * 34));
    g.font = '600 18px Pretendard, sans-serif'; g.fillStyle = '#6b6760'; g.fillText('— ' + item.n, 20, 232)
  })
}
function moreTex(n) { return canvasTex(256, 80, (g) => { g.fillStyle = '#161616'; g.fillRect(0, 0, 256, 80); g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.font = '600 25px Pretendard, sans-serif'; g.fillText(n ? `감상평 ${n}개 모두 보기` : '첫 감상평 남기기', 128, 50) }) }
function buildNotes() {
  for (let i = 1; i <= 10; i++) {
    const P = PICS[i], list = GB.byPic[i] || []; P.notes.children.slice().forEach(c => { P.notes.remove(c); c.material.map && c.material.map.dispose() });
    if (!GB.ok) continue;
    list.slice(-3).reverse().forEach((it, k) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(.78, .78), new THREE.MeshBasicMaterial({ map: noteTex(it, k + i) })); m.position.set((k % 2 ? .12 : -.1), .95 - k * .62, k * .004); m.rotation.z = (k % 2 ? -.06 : .05); m.userData.gb = i; P.notes.add(m) });
    const b = new THREE.Mesh(new THREE.PlaneGeometry(.9, .28), new THREE.MeshBasicMaterial({ map: moreTex(list.length) })); b.position.set(0, -1.05, .01); b.userData.gb = i; P.notes.add(b);
  }
}
function setItems(items) {
  GB.items = items.filter(x => x && x.p >= 1 && x.p <= 10 && typeof x.m === 'string' && !ExhibitFilter.isBad(x.m + ' ' + x.n)).map(x => ({ t: +x.t || 0, p: +x.p, n: String(x.n || '익명 관람객').slice(0, 12), m: String(x.m).slice(0, 200) }));
  GB.byPic = {}; GB.items.forEach(x => (GB.byPic[x.p] = GB.byPic[x.p] || []).push(x)); buildNotes(); if (!gbEl.hidden) renderGB(); if (nearI) showPlaque(nearI, false)
}
function loadGB() { if (!GB.ok) return; fetch(CFG.guestbookUrl).then(r => r.json()).then(d => { if (d && d.ok && Array.isArray(d.items)) setItems(d.items) }).catch(() => { }) }
function renderChips() {
  gbChips.innerHTML = ''; [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i => { const b = el('button', 'chip', i ? String(i).padStart(2, '0') + ' ' + ROOMS[i].t : '전체'); b.setAttribute('aria-pressed', GB.cur === i); b.onclick = () => { GB.cur = i; renderGB() }; gbChips.appendChild(b) })
}
function renderGB() {
  renderChips();
  document.getElementById('gbTitle').textContent = GB.cur ? `${String(GB.cur).padStart(2, '0')} ${ROOMS[GB.cur].t} · 감상평` : '모든 감상평';
  document.getElementById('gbForm').hidden = !GB.cur || !GB.ok;
  const list = (GB.cur ? (GB.byPic[GB.cur] || []) : GB.items).slice().reverse(); gbList.innerHTML = '';
  if (!GB.ok) { gbList.appendChild(el('p', 'empty', '방명록은 곧 열려요. 선생님이 준비 중이에요.')); return }
  if (!list.length) { gbList.appendChild(el('p', 'empty', GB.cur ? '아직 감상평이 없어요. 첫 번째로 남겨 볼까요?' : '아직 감상평이 없어요. 그림 앞에서 첫 감상평을 남겨 주세요.')); return }
  list.forEach((x, k) => { const li = el('li', 'memo'); li.style.setProperty('--note', NOTE_COLORS[k % 4]); li.appendChild(el('p', 'm', x.m)); const meta = el('div', 'meta'); meta.appendChild(el('b', null, x.n)); meta.appendChild(el('span', null, (GB.cur ? '' : String(x.p).padStart(2, '0') + ' ' + ROOMS[x.p].t + ' · ') + fmtDate(x.t))); li.appendChild(meta); gbList.appendChild(li) });
}
function openGB(i, write) { GB.cur = i; gbMsg.textContent = ''; gbEl.hidden = false; renderGB(); if (write && GB.ok && i) setTimeout(() => gbText.focus(), 50); else document.getElementById('gbClose').focus() }
document.getElementById('gbClose').onclick = () => { gbEl.hidden = true };
gbEl.addEventListener('click', e => { if (e.target === gbEl) gbEl.hidden = true });
addEventListener('keydown', e => { if (e.key === 'Escape') { gbEl.hidden = true; document.getElementById('stamps').hidden = true; closeViewer(); if (!qzEl.hidden) closeQuiz() } });
/* ================= 그림 크게 보기 ================= */
const viewer = document.getElementById('viewer'), vImg = viewer.querySelector('img'); let vz = { s: 1, x: 0, y: 0 }, vDrag = null, vI = 0;
function vApply() { vImg.style.transform = `translate(${vz.x}px, ${vz.y}px) scale(${vz.s})` }
function openViewer(i) {
  vI = i; const P = PICS[i]; vImg.src = P.real && CFG.images && CFG.images[i] ? CFG.images[i] : P.ctx.canvas.toDataURL('image/jpeg', .9);
  viewer.querySelector('.v-no').textContent = String(i).padStart(2, '0'); viewer.querySelector('.v-t').textContent = ROOMS[i].t; viewer.querySelector('.v-o').textContent = ROOMS[i].o;
  vz = { s: 1, x: 0, y: 0 }; vApply(); viewer.hidden = false; document.getElementById('vClose').focus()
}
function closeViewer() { viewer.hidden = true }
document.getElementById('vClose').onclick = closeViewer;
viewer.addEventListener('click', e => { if (e.target === viewer || e.target.classList.contains('v-stage')) closeViewer() });
vImg.addEventListener('dblclick', e => { const r = vImg.getBoundingClientRect(); if (vz.s > 1) vz = { s: 1, x: 0, y: 0 }; else { vz.s = 2.2; vz.x = (r.left + r.width / 2 - e.clientX) * 1.2; vz.y = (r.top + r.height / 2 - e.clientY) * 1.2 } vApply() });
viewer.addEventListener('wheel', e => { e.preventDefault(); vz.s = Math.min(5, Math.max(1, vz.s * (e.deltaY < 0 ? 1.12 : 1 / 1.12))); if (vz.s === 1) vz.x = vz.y = 0; vApply() }, { passive: false });
const vPts = new Map(); let vPinch = null;
vImg.addEventListener('pointerdown', e => { e.preventDefault(); vImg.setPointerCapture(e.pointerId); vPts.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (vPts.size === 2) { const [a, b] = [...vPts.values()]; vPinch = { d: Math.hypot(a.x - b.x, a.y - b.y), s: vz.s } } else vDrag = { x: e.clientX - vz.x, y: e.clientY - vz.y, t: performance.now() } });
vImg.addEventListener('pointermove', e => { if (!vPts.has(e.pointerId)) return; vPts.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (vPinch && vPts.size === 2) { const [a, b] = [...vPts.values()]; vz.s = Math.min(5, Math.max(1, vPinch.s * Math.hypot(a.x - b.x, a.y - b.y) / vPinch.d)); vApply() } else if (vDrag && vz.s > 1) { vz.x = e.clientX - vDrag.x; vz.y = e.clientY - vDrag.y; vApply() } });
['pointerup', 'pointercancel'].forEach(ev => vImg.addEventListener(ev, e => { vPts.delete(e.pointerId); if (vPts.size < 2) vPinch = null; if (!vPts.size) { if (vDrag && ev === 'pointerup' && e.pointerType === 'touch' && performance.now() - (vImg._lt || 0) < 300) vImg.dispatchEvent(new MouseEvent('dblclick', { clientX: e.clientX, clientY: e.clientY })); vImg._lt = performance.now(); vDrag = null; if (vz.s === 1) { vz.x = vz.y = 0; vApply() } } }));
{ const oa = document.getElementById('openAll'); if (CFG.video && CFG.video.url) oa.href = CFG.video.url; else oa.remove() }
gbNick.value = store.get('pae-gbnick', ''); gbNick.placeholder = nickOf(myA, myB);
gbText.addEventListener('input', () => { gbLen.textContent = `${gbText.value.length}/200` });
document.getElementById('gbForm').addEventListener('submit', e => {
  e.preventDefault(); const m = gbText.value.trim(), n = (gbNick.value.trim() || myName || nickOf(myA, myB)).slice(0, 12);
  if (m.length < 5) { gbMsg.textContent = '조금만 더 써 줄래요? 다섯 글자 이상이면 돼요.'; return }
  if (ExhibitFilter.isBad(m + ' ' + n)) { gbMsg.textContent = '바르고 고운 말로 다시 써 줄래요? 🙂'; return }
  if (ExhibitFilter.hasPersonal(m + ' ' + n)) { gbMsg.textContent = '전화번호·주소·SNS 아이디 같은 개인정보는 쓸 수 없어요.'; return }
  const last = store.get('pae-lastpost', 0); if (Date.now() - last < 30000) { gbMsg.textContent = '30초 뒤에 다시 남길 수 있어요.'; return }
  gbSend.disabled = true; gbMsg.textContent = '붙이는 중…'; store.set('pae-gbnick', gbNick.value.trim());
  fetch(CFG.guestbookUrl, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ p: GB.cur, n, m, dev: devId }) })
    .then(r => r.json()).then(d => {
      if (d && d.ok) { store.set('pae-lastpost', Date.now()); gbText.value = ''; gbLen.textContent = '0/200'; gbMsg.textContent = '감상평을 붙였어요! 고마워요.'; GB.items.push({ t: Date.now(), p: GB.cur, n, m }); setItems(GB.items); setTimeout(loadGB, 4000) }
      else gbMsg.textContent = (d && d.msg) || '저장하지 못했어요. 잠시 뒤에 다시 해 주세요.'
    }).catch(() => { gbMsg.textContent = '인터넷 연결을 확인하고 다시 해 주세요.' }).finally(() => { gbSend.disabled = false })
});
loadGB(); setInterval(loadGB, 60000);

/* ================= 함께 관람 (Firebase, 위치와 별명 번호만 주고받아요) ================= */
const others = new Map(); let fb = null, myRef = null, serverOffset = 0;
function updPeople() { const n = [...others.values()].filter(o => o.on).length + 1; document.getElementById('people').textContent = n > 1 ? `지금 ${n}명 관람 중` : (fb ? '지금 나 혼자 관람 중' : '혼자 관람 중') }
function upsertPeer(key, v) {
  if (!v || typeof v.x !== 'number' || typeof v.z !== 'number') return;
  const c = Math.abs(v.c | 0) % COLORS.length, a = Math.abs(v.a | 0) % 16, b = Math.abs(v.b | 0) % 16, kd = Math.abs(v.k | 0) % KINDS.length, rawN = typeof v.n === 'string' ? v.n.replace(/\s+/g, ' ').trim().slice(0, 8) : '', name = rawN.length >= 2 && !ExhibitFilter.isBad(rawN) && !ExhibitFilter.hasPersonal(rawN) ? rawN : nickOf(a, b);
  let o = others.get(key);
  if (!o || o.c !== c || o.name !== name || o.kd !== kd) { if (o) scene.remove(o.g); o = { g: makeAvatar(COLORS[c], name, false, kd), c, kd, name, cur: new THREE.Vector3(v.x, 0, v.z), r: +v.r || 0, cl: v.cl || 0 }; others.set(key, o) }
  o.tx = Math.max(-W2, Math.min(W2, v.x)); o.tz = Math.max(-LEN, Math.min(0, v.z)); o.tr = +v.r || 0; o.mv = !!v.mv; o.st = !!v.st; o.t = +v.t || 0; o.on = true;
  if (v.cl && v.cl !== o.cl) { o.cl = v.cl; if (Date.now() + serverOffset - v.cl < 5000) clapAt(o.g) }
  updPeople()
}
function removePeer(key) { const o = others.get(key); if (o) { scene.remove(o.g); others.delete(key); updPeople() } }
function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s) }) }
async function startTogether() {
  if (!CFG.firebase) return;
  try {
    const base = 'https://www.gstatic.com/firebasejs/9.23.0/';
    await loadScript(base + 'firebase-app-compat.js'); await loadScript(base + 'firebase-auth-compat.js'); await loadScript(base + 'firebase-database-compat.js');
    firebase.initializeApp(CFG.firebase); const cred = await firebase.auth().signInAnonymously(); const uid = cred.user.uid;
    const db = firebase.database(); fb = db;
    db.ref('.info/serverTimeOffset').on('value', s => serverOffset = s.val() || 0);
    myRef = db.ref('presence/' + uid); myRef.onDisconnect().remove();
    const pr = db.ref('presence');
    pr.on('child_added', s => { if (s.key !== uid) upsertPeer(s.key, s.val()) });
    pr.on('child_changed', s => { if (s.key !== uid) upsertPeer(s.key, s.val()) });
    pr.on('child_removed', s => removePeer(s.key));
    sendPresence(true); setInterval(() => sendPresence(true), 20000);
    setInterval(() => { const now = Date.now() + serverOffset; for (const [k, o] of others) if (now - o.t > 70000) removePeer(k) }, 10000);
    updPeople();
  } catch (e) { fb = null; console.warn('함께 관람 연결 실패', e) }
}
let lastSent = 0, lastClap = 0;
function sendPresence(force) {
  if (!myRef || !me) return; const now = performance.now(); if (!force && (!moving || now - lastSent < 280)) return; lastSent = now;
  const d = { x: +pos.x.toFixed(2), z: +pos.z.toFixed(2), r: +heading.toFixed(2), c: myColor, a: myA, b: myB, k: myK, n: myName, st: !!seated, mv: !!moving, t: firebase.database.ServerValue.TIMESTAMP };
  if (lastClap) d.cl = lastClap; myRef.set(d).catch(() => { })
}
let wasMoving = false;

/* 박수 */
const claps = [];
function clapAt(g) { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); x.font = '96px serif'; x.textAlign = 'center'; x.fillText('👏', 64, 100); const t = new THREE.CanvasTexture(c); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false })); s.scale.set(.8, .8, 1); s.position.y = 2.7; s.renderOrder = 11; g.add(s); claps.push({ s, g, t0: performance.now() }) }
document.getElementById('clap').onclick = () => { if (!me) return; const now = Date.now(); if (now - (clapAt.last || 0) < 1500) return; clapAt.last = now; clapAt(me); lastClap = now + serverOffset; sendPresence(true) };

/* 입력 */
const keys = {};
addEventListener('keydown', e => { if (/INPUT|TEXTAREA/.test(e.target.tagName) || !gbEl.hidden || !qzEl.hidden) return; keys[e.key.toLowerCase()] = true; if (e.key.startsWith('Arrow')) e.preventDefault(); target = null });
addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false });
addEventListener('blur', () => { for (const k in keys) keys[k] = false });
if (matchMedia('(pointer:coarse)').matches) document.body.classList.add('coarse');
const joy = document.getElementById('joy'), knob = joy.querySelector('i'); let jv = { x: 0, y: 0 }, jid = null;
function joyMove(e) { const r = joy.getBoundingClientRect(); let x = (e.clientX - r.left - r.width / 2) / (r.width / 2), y = (e.clientY - r.top - r.height / 2) / (r.height / 2); const m = Math.hypot(x, y); if (m > 1) { x /= m; y /= m } jv = { x, y }; knob.style.transform = `translate(${x * 34}px,${y * 34}px)` }
joy.addEventListener('pointerdown', e => { jid = e.pointerId; joy.setPointerCapture(jid); joyMove(e); target = null });
joy.addEventListener('pointermove', e => { if (e.pointerId === jid) joyMove(e) });
['pointerup', 'pointercancel'].forEach(ev => joy.addEventListener(ev, () => { jid = null; jv = { x: 0, y: 0 }; knob.style.transform = '' }));
const ray = new THREE.Raycaster(), mv = new THREE.Vector2(); let down = null;
let dragYawT = 0;
renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, lx: e.clientX, moved: false }; try { renderer.domElement.setPointerCapture(e.pointerId) } catch (x) { } });
renderer.domElement.addEventListener('pointermove', e => {
  if (!down || !me) return; const dx = e.clientX - down.lx; down.lx = e.clientX;
  if (Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) down.moved = true;
  if (down.moved) { camYaw -= dx * (e.pointerType === 'touch' ? .008 : .006); dragYawT = performance.now() }
});
renderer.domElement.addEventListener('pointercancel', () => { down = null });
renderer.domElement.addEventListener('pointerup', e => {
  if (!down || down.moved) { down = null; return } down = null;
  const r = renderer.domElement.getBoundingClientRect(); mv.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1); ray.setFromCamera(mv, camera);
  const objs = [floor]; for (let i = 1; i <= 10; i++) { objs.push(PICS[i].pic); PICS[i].notes.children.forEach(c => objs.push(c)) }
  const hit = ray.intersectObjects(objs)[0]; if (!hit) return;
  if (hit.object.userData.gb) { openGB(hit.object.userData.gb, false); return }
  if (hit.object.userData.pic) { const pi = hit.object.userData.pic; if (pi === nearI) openViewer(pi); else target = PICS[pi].front.clone() } else target = hit.point.clone().setY(0)
});
const mini = document.getElementById('mini'), mg = mini.getContext('2d');
const mapXY = (x, z) => [20 + (-z / LEN) * 360, 64 + (x / W2) * 50];
mini.addEventListener('click', e => { const r = mini.getBoundingClientRect(), mx = (e.clientX - r.left) / r.width * 400, my = (e.clientY - r.top) / r.height * 128; let best = 0, bd = 1e9; for (let i = 1; i <= 10; i++) { const p = PICS[i].center, [px, py] = mapXY(p.x, p.z), d = Math.hypot(px - mx, py - my); if (d < bd) { bd = d; best = i } } if (bd < 60) target = PICS[best].front.clone() });

/* 입장: 어두운 전시실 입구에서 캐릭터 고르기 */
if (CFG.portrait) { const pb = document.getElementById('portraitBox'); pb.querySelector('img').src = CFG.portrait; pb.hidden = false }
const sw = document.getElementById('sw'), kindsEl = document.getElementById('kinds'), kindDesc = document.getElementById('kindDesc');
const PREV = new THREE.Vector3(0, 0, -5.2);
function buildPreview() { if (preview) scene.remove(preview); preview = makeAvatar(COLORS[myColor], nickOf(myA, myB), true, myK); preview.position.copy(PREV); preview.userData.tag.visible = false; spot.target.position.copy(PREV); kindDesc.textContent = KINDS[myK].n;[...kindsEl.children].forEach(x => x.setAttribute('aria-pressed', +x.dataset.k === myK)) }
function buildKindGrid() { kindsEl.innerHTML = ''; const th = avatarThumbs(COLORS[myColor]); KIND_ORDER.forEach(i => { const b = document.createElement('button'); b.type = 'button'; b.dataset.k = i; b.setAttribute('aria-label', KINDS[i].n); b.title = KINDS[i].n; const im = document.createElement('img'); im.src = th[i]; im.alt = ''; b.appendChild(im); b.onclick = () => { myK = i; buildPreview() }; kindsEl.appendChild(b) }); [...kindsEl.children].forEach(x => x.setAttribute('aria-pressed', +x.dataset.k === myK)) }
COLORS.forEach((c, i) => { const b = document.createElement('button'); b.type = 'button'; b.style.background = c; b.setAttribute('aria-label', '색 ' + (i + 1)); b.setAttribute('aria-pressed', i === myColor); b.onclick = () => { myColor = i;[...sw.children].forEach((x, k) => x.setAttribute('aria-pressed', k === i)); buildPreview(); buildKindGrid() }; sw.appendChild(b) });
const nickIn = document.getElementById('nickIn'), nickMsg = document.getElementById('nickMsg');
let myName = '';
nickIn.value = store.get('pae-name', '');
function nameNow() { return (nickIn.value.trim().replace(/\s+/g, ' ') || nickOf(myA, myB)).slice(0, 8) }
function nameProblem(n) { if (n.length < 2) return '두 글자 이상 써 주세요.'; if (ExhibitFilter.isBad(n)) return '바르고 고운 이름으로 써 주세요 🙂'; if (ExhibitFilter.hasPersonal(n) || /\d{3,}/.test(n)) return '전화번호·SNS 같은 개인정보는 이름으로 쓸 수 없어요.'; return '' }
function showNick() { nickIn.placeholder = nickOf(myA, myB); gbNick.placeholder = nameNow(); nickMsg.textContent = '' }
nickIn.addEventListener('input', () => { nickMsg.textContent = nickIn.value.trim() ? nameProblem(nameNow()) : '' });
document.body.classList.add('at-gate'); showNick(); buildKindGrid(); buildPreview();
document.getElementById('reroll').onclick = () => { myA = Math.floor(Math.random() * 16); myB = Math.floor(Math.random() * 16); nickIn.value = ''; showNick() };
/* 입장 화면에서도 프롬나드: 브라우저는 첫 터치·클릭 전에는 소리를 못 내서, 첫 손길에 음악을 켜요 */
function unlockSound() {
  // 아이폰 무음(진동) 모드에서도 음악이 나오도록 '재생' 모드로 바꾸기 (iOS 17+), 안 되는 기기는 무음 오디오 한 번 틀기
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback' } catch (e) { }
  if (!unlockSound.el) { try { const sr = 8000, n = sr / 2, b = new ArrayBuffer(44 + n), v = new DataView(b), w = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0))); w(0, 'RIFF'); v.setUint32(4, 36 + n, true); w(8, 'WAVEfmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, sr, true); v.setUint32(28, sr, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); w(36, 'data'); v.setUint32(40, n, true); for (let i = 0; i < n; i++)v.setUint8(44 + i, 128); const au = new Audio(URL.createObjectURL(new Blob([b], { type: 'audio/wav' }))); au.loop = true; au.setAttribute('playsinline', ''); au.play().catch(() => { }); unlockSound.el = au } catch (e) { } }
  initAudio(); if (ac && ac.state !== 'running') ac.resume();
}
document.getElementById('gate').addEventListener('pointerdown', unlockSound, { capture: true });
document.getElementById('enter').onclick = () => {
  myName = nameNow(); const prob = nameProblem(myName); if (prob) { nickMsg.textContent = prob; nickIn.focus(); return }
  store.set('pae-name', nickIn.value.trim()); gbNick.placeholder = myName;
  store.set('pae-color', myColor); store.set('pae-a', myA); store.set('pae-b', myB); store.set('pae-k2', myK);
  document.getElementById('gate').hidden = true; document.body.classList.remove('at-gate'); unlockSound(); if (!soundOn) toggleSound(); // 입장 화면에서 껐어도 전시실에서는 음악이 나오게
  if (preview) { scene.remove(preview); preview = null }
  pos.copy(PREV); heading = Math.PI; camYaw = 0; camera.clearViewOffset();
  me = makeAvatar(COLORS[myColor], myName + ' (나)', true, myK); me.traverse(o => { if (o.isMesh && o.material && !o.isSprite) { o.material = o.material.clone(); o.material.transparent = true } }); me.userData.fade = 1; me.position.copy(pos); startTogether();
  setTimeout(() => document.getElementById('hint').style.opacity = 0, 9000)
};
const sb = document.getElementById('sound'), gsb = document.getElementById('gateSound');
function toggleSound() { soundOn = !soundOn; sb.textContent = soundOn ? '소리 끄기' : '소리 켜기'; gsb.textContent = soundOn ? '🔊 소리 끄기' : '🔇 소리 켜기'; VID.mute(!soundOn); sb.setAttribute('aria-pressed', soundOn); gsb.setAttribute('aria-pressed', soundOn); if (master) master.gain.setTargetAtTime(soundOn ? .9 : 0, ac.currentTime, .1) }
sb.onclick = toggleSound; gsb.onclick = toggleSound;

/* ================= 완주 퀴즈: 음악 듣고 어떤 그림인지 맞히기 ================= */
const QZ = { open: false, key: null, list: [], at: 0, score: 0, answers: [] };
const qzEl = document.getElementById('quiz'), qzBody = document.getElementById('qzBody');
function picSrc(i) { const P = PICS[i]; return P.real && CFG.images && CFG.images[i] ? CFG.images[i] : P.ctx.canvas.toDataURL('image/jpeg', .8) }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]] } return a }
function restartTrack() { if (ac && QZ.key) { initAudio(); ac.resume(); startTrack(QZ.key) } }
function quizInvite() {
  qzBody.innerHTML = ''; QZ.open = false; QZ.key = null;
  qzBody.appendChild(el('div', 'qz-badge', '🎉'));
  qzBody.appendChild(el('h2', null, '도장 10개를 모두 모았어요!'));
  qzBody.appendChild(el('p', 'qz-sub', '이제 음악만 듣고 어떤 그림인지 맞혀 볼까요? 열 곡이 나와요.'));
  const row = el('div', 'qz-row'); const go = el('button', 'qz-main', '퀴즈 시작하기'); go.type = 'button'; go.onclick = startQuiz; const later = el('button', 'qz-ghost', '나중에 할게요'); later.type = 'button'; later.onclick = closeQuiz; row.append(go, later); qzBody.appendChild(row);
  qzEl.hidden = false; go.focus()
}
function startQuiz() { QZ.list = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); QZ.at = 0; QZ.score = 0; QZ.answers = []; QZ.open = true; initAudio(); if (ac) ac.resume(); if (!soundOn) document.getElementById('sound').click(); showQ() }
function showQ() {
  const i = QZ.list[QZ.at]; QZ.key = KEYS[i]; restartTrack();
  const opts = shuffle([i, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(x => x !== i)).slice(0, 3)]);
  qzBody.innerHTML = '';
  const head = el('div', 'qz-head'); head.appendChild(el('span', null, `${QZ.at + 1} / 10`)); head.appendChild(el('span', 'qz-score', `점수 ${QZ.score}`)); qzBody.appendChild(head);
  const bar = el('div', 'qz-prog'); const fill = el('i'); fill.style.width = (QZ.at / 10 * 100) + '%'; bar.appendChild(fill); qzBody.appendChild(bar);
  qzBody.appendChild(el('h2', null, '♪ 지금 들리는 음악은 어떤 그림일까요?'));
  const again = el('button', 'qz-ghost small', '🔁 처음부터 다시 듣기'); again.type = 'button'; again.onclick = restartTrack; qzBody.appendChild(again);
  const grid = el('div', 'qz-grid');
  opts.forEach(o => { const b = el('button', 'qz-opt'); b.type = 'button'; b.dataset.k = o; const im = document.createElement('img'); im.src = picSrc(o); im.alt = '보기 그림'; b.appendChild(im); b.appendChild(el('span', 'qz-cap', '')); b.onclick = () => answer(o, i, grid); grid.appendChild(b) });
  qzBody.appendChild(grid);
  qzBody.appendChild(el('p', 'qz-fb', ''));
}
function answer(pick, right, grid) {
  if (grid.dataset.done) return; grid.dataset.done = 1; const ok = pick === right; if (ok) QZ.score++; QZ.answers.push({ i: right, ok });
  [...grid.children].forEach(b => { const k = +b.dataset.k; b.disabled = true; b.querySelector('.qz-cap').textContent = ROOMS[k].t; if (k === right) b.classList.add('right'); else if (k === pick) b.classList.add('wrong') });
  const fb = qzBody.querySelector('.qz-fb'); fb.textContent = ok ? `정답! 〈${ROOMS[right].t}〉예요.` : `아쉬워요. 정답은 〈${ROOMS[right].t}〉예요.`; fb.className = 'qz-fb ' + (ok ? 'ok' : 'no');
  qzBody.querySelector('.qz-score').textContent = `점수 ${QZ.score}`;
  const nx = el('button', 'qz-main', QZ.at === 9 ? '결과 보기' : '다음 문제 →'); nx.type = 'button'; nx.onclick = () => { QZ.at++; if (QZ.at >= 10) showResult(); else showQ() }; qzBody.appendChild(nx); nx.focus()
}
function showResult() {
  QZ.key = 'gate'; restartTrack(); const sc = QZ.score; store.set('pae-quiz-best', Math.max(sc, store.get('pae-quiz-best', 0)));
  const msg = sc === 10 ? '완벽해요! 무소륵스키도 깜짝 놀랄 귀예요.' : sc >= 8 ? '대단해요! 그림과 음악이 귀에 쏙 들어왔네요.' : sc >= 5 ? '잘했어요! 헷갈린 곡은 한 번 더 들어 보세요.' : '괜찮아요! 전시실을 한 바퀴 더 돌고 다시 도전해 봐요.';
  qzBody.innerHTML = '';
  qzBody.appendChild(el('div', 'qz-kicker', `${myName || nickOf(myA, myB)}의 감상 퀴즈 결과`));
  const big = el('div', 'qz-big'); big.appendChild(el('b', null, String(sc))); big.appendChild(el('span', null, ' / 10')); qzBody.appendChild(big);
  qzBody.appendChild(el('p', 'qz-sub', msg));
  const ul = el('ul', 'qz-list'); QZ.answers.forEach(a => { const li = el('li', a.ok ? 'ok' : 'no'); li.appendChild(el('span', null, a.ok ? '○' : '✕')); li.appendChild(el('span', null, `${String(a.i).padStart(2, '0')} ${ROOMS[a.i].t}`)); ul.appendChild(li) }); qzBody.appendChild(ul);
  const row = el('div', 'qz-row'); const cb = el('button', 'qz-main', '📜 감상 확인증 만들기'); cb.type = 'button'; cb.onclick = certForm; row.appendChild(cb);
  if (CFG.video && CFG.video.url) { const a = el('a', 'qz-ghost', '음플릭스에 감상평 달러 가기 ↗'); a.href = CFG.video.url; a.target = '_blank'; a.rel = 'noopener'; row.appendChild(a) }
  const re = el('button', 'qz-ghost', '다시 도전'); re.type = 'button'; re.onclick = startQuiz; const bk = el('button', 'qz-ghost', '전시실로 돌아가기'); bk.type = 'button'; bk.onclick = closeQuiz; row.append(re, bk); qzBody.appendChild(row);
  QZ.done = true; qzEl.hidden = false
}
/* 감상 확인증: 내 감상평은 이 기기 화면에만 들어가요 (어디로도 보내지 않아요) */
function certForm() {
  QZ.key = null; const prev = store.get('pae-cert', {});
  qzBody.innerHTML = '';
  qzBody.appendChild(el('h2', null, '마지막으로, 내 감상평을 써 볼까요?'));
  qzBody.appendChild(el('p', 'qz-sub', '감상평은 내 감상 확인증에만 들어가요. 다른 사람에게는 보이지 않아요.'));
  const ta = document.createElement('textarea'); ta.className = 'qz-ta'; ta.maxLength = 300; ta.rows = 5; ta.placeholder = '가장 기억에 남는 그림과 음악은? 음악을 듣고 어떤 장면이 떠올랐나요?'; ta.value = prev.review || ''; qzBody.appendChild(ta);
  const cnt = el('div', 'qz-cnt', `${ta.value.length}/300`); qzBody.appendChild(cnt); ta.oninput = () => { cnt.textContent = `${ta.value.length}/300` };
  const msg = el('p', 'qz-fb no', ''); qzBody.appendChild(msg);
  const row = el('div', 'qz-row'); const ok = el('button', 'qz-main', '감상 확인증 보기'); ok.type = 'button';
  ok.onclick = () => { const v = ta.value.trim(); if (v.length < 10) { msg.textContent = '열 글자 이상 써 주세요.'; ta.focus(); return } store.set('pae-cert', { score: QZ.score, review: v, date: Date.now(), name: myName || nickOf(myA, myB) }); showCert() };
  row.appendChild(ok); qzBody.appendChild(row); qzEl.hidden = false; ta.focus()
}
function showCert() {
  const c = store.get('pae-cert', null); if (!c) return certForm();
  qzBody.innerHTML = '';
  const cert = el('div', 'cert');
  cert.appendChild(el('div', 'cert-k', '음플릭스 온라인 전시'));
  cert.appendChild(el('h2', 'cert-t', '감상 확인증'));
  cert.appendChild(el('div', 'cert-s', '무소륵스키 〈전람회의 그림〉'));
  const dl = el('dl', 'cert-dl');
  const row = (k, v) => { const d = el('div'); d.appendChild(el('dt', null, k)); if (typeof v === 'string') d.appendChild(el('dd', null, v)); else { const dd = el('dd'); dd.appendChild(v); d.appendChild(dd) } dl.appendChild(d) };
  row('이름', c.name || myName || nickOf(myA, myB));
  const st = el('div', 'cert-stamps'); for (let i = 1; i <= 10; i++) { const r = el('span', seen.has(i) ? 'on' : '', String(i).padStart(2, '0')); st.appendChild(r) } const sw2 = el('div'); sw2.appendChild(el('b', null, `${seen.size} / 10개`)); sw2.appendChild(st); row('관람 도장', sw2);
  row('퀴즈 점수', `${c.score} / 10점`);
  row('감상 날짜', new Date(c.date).toLocaleDateString('ko-KR'));
  cert.appendChild(dl);
  const rv = el('div', 'cert-rv'); rv.appendChild(el('div', 'cert-rk', '내 감상평')); rv.appendChild(el('p', null, c.review)); cert.appendChild(rv);
  cert.appendChild(el('p', 'cert-praise', '감상 수업에 훌륭하게 참여했어요. 칭찬해요!'));
  const foot = el('div', 'cert-foot'); const lg = document.createElement('img'); lg.src = LOGO_SRC; lg.alt = '음플릭스'; lg.className = 'cert-logo'; foot.appendChild(lg);
  const crew = el('div', 'cert-crew');['assets/chars/c1.png', 'assets/chars/c2.png', 'assets/chars/c3.png'].forEach(src => { const im = document.createElement('img'); im.src = src; im.alt = ''; crew.appendChild(im) }); foot.appendChild(crew);
  cert.appendChild(foot);
  qzBody.appendChild(cert);
  qzBody.appendChild(el('p', 'qz-sub cert-hint', '이 화면을 캡처해서 선생님께 보여 주세요.'));
  const r2 = el('div', 'qz-row');
  if (CFG.video && CFG.video.url) { const a = el('a', 'qz-ghost', '음플릭스에 감상평 달러 가기 ↗'); a.href = CFG.video.url; a.target = '_blank'; a.rel = 'noopener'; r2.appendChild(a) }
  const ed = el('button', 'qz-ghost', '감상평 고치기'); ed.type = 'button'; ed.onclick = certForm; const bk = el('button', 'qz-ghost', '전시실로 돌아가기'); bk.type = 'button'; bk.onclick = closeQuiz; r2.append(ed, bk); qzBody.appendChild(r2);
  qzEl.hidden = false; qzEl.querySelector('.qz-card').scrollTop = 0
}
function closeQuiz() { qzEl.hidden = true; QZ.open = false; QZ.key = null }
document.getElementById('qzClose').onclick = closeQuiz;
qzEl.addEventListener('click', e => { if (e.target === qzEl) closeQuiz() });


/* 함께 관람을 쓰지 않는 사이트(음플릭스 전용 주소)에서는 접속자 수·박수 숨기기 */
if (!CFG.firebase && !(window.claude && window.claude.use)) { const pp = document.getElementById('people'), cl = document.getElementById('clap'), gl = document.getElementById('gateLive'); if (pp) pp.remove(); if (cl) cl.remove(); if (gl) gl.parentElement.remove() }
/* ================= 벤치에 앉기 ================= */
let seated = null;
const SEATS = []; BENCHES.forEach(([bx, bz]) => [-1.05, 0, 1.05].forEach(ox => [1, -1].forEach(side => SEATS.push({ x: bx + ox, z: bz + side * .12, face: side }))));
const sitBtn = document.getElementById('sit');
function nearSeat() { let best = null, bd = 1.7; for (const st of SEATS) { const d = Math.hypot(pos.x - st.x, pos.z - (st.z + st.face * .6)); if (d < bd) { bd = d; best = st } } return best }
function sitDown(st) { seated = st; target = null; pos.set(st.x, 0, st.z); heading = st.face > 0 ? 0 : Math.PI; camYaw = st.face > 0 ? Math.PI : 0; sendPresence(true); updSit() }
function standUp() { if (!seated) return; pos.set(seated.x, 0, seated.z + seated.face * .95); seated = null; sendPresence(true); updSit() }
function updSit() { const st = seated ? null : (me && !nearI ? nearSeat() : null); sitBtn.hidden = !(seated || st); sitBtn.textContent = seated ? '일어나기' : '🪑 앉기'; sitBtn.dataset.on = seated ? 1 : 0 }
sitBtn.onclick = () => { if (seated) standUp(); else { const st = nearSeat(); if (st) sitDown(st) } };
addEventListener('keydown', e => { if (!me || /INPUT|TEXTAREA/.test(e.target.tagName) || !gbEl.hidden) return; if (e.key === 'f' || e.key === 'F' || e.key === ' ') { e.preventDefault(); sitBtn.onclick() } });

/* ================= 루프 ================= */
const angLerp = (a, b, k) => { let d = ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; return a + d * k };
function collide(p) {
  p.x = Math.max(-W2 + .6, Math.min(W2 - .6, p.x)); p.z = Math.max(-LEN + .6, Math.min(-.6, p.z));
  BENCHES.forEach(([bx, bz]) => { const hx = 1.7 + .45, hz = .45 + .45, dx = p.x - bx, dz = p.z - bz; if (Math.abs(dx) < hx && Math.abs(dz) < hz) { if (hx - Math.abs(dx) < hz - Math.abs(dz)) p.x = bx + Math.sign(dx || 1) * hx; else p.z = bz + Math.sign(dz || 1) * hz } })
}
function resize() { const w = stage.clientWidth, h = stage.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 68 : 55; if (!me) { if (w > 820) camera.setViewOffset(w, h, -w * .2, 0, w, h); else camera.setViewOffset(w, h, 0, h * .22, w, h) } camera.updateProjectionMatrix() }
addEventListener('resize', resize); resize();
const VO = { x: 0, y: 0 }, detour = { d: 0, t: 0 };
const camPos = new THREE.Vector3(0, 3.2, 2), camLook = new THREE.Vector3(0, 1.4, -4); let last = performance.now(), picClock = 0;
function frame(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now; const t = now / 1000;
  let fwd = 0, side = 0;
  if (keys['arrowup'] || keys['w']) fwd += 1; if (keys['arrowdown'] || keys['s']) fwd -= 1; if (keys['arrowright'] || keys['d']) side += 1; if (keys['arrowleft'] || keys['a']) side -= 1;
  if (Math.hypot(jv.x, jv.y) > .15) { fwd = -jv.y; side = jv.x }
  if (me && !seated) { if (keys['q']) camYaw += 1.8 * dt; if (keys['e']) camYaw -= 1.8 * dt }
  const f = { x: -Math.sin(camYaw), z: -Math.cos(camYaw) }, r = { x: Math.cos(camYaw), z: -Math.sin(camYaw) };
  let mx = f.x * fwd + r.x * side, mz = f.z * fwd + r.z * side;
  if (target && !fwd && !side) { const dx = target.x - pos.x, dz = target.z - pos.z, d = Math.hypot(dx, dz); if (d < .15) target = null; else { mx = dx / d * Math.min(1, d); mz = dz / d * Math.min(1, d) } }
  if (seated && (fwd || side || target)) { const tg = target; standUp(); target = tg }
  if (seated) { mx = mz = 0 }
  const mm = Math.hypot(mx, mz); moving = !!me && mm > .05;
  if (moving) { const sp = 4.2 * Math.min(1, mm), ox = pos.x, oz = pos.z; pos.x += mx / mm * sp * dt; pos.z += mz / mm * sp * dt; collide(pos);
    if (target && Math.hypot(pos.x - ox, pos.z - oz) < sp * dt * .35) { if (!detour.d) detour.d = pos.x >= 0 ? 1 : -1; detour.t = t } // 벤치에 막히면 한쪽으로 돌아가기
    if (target && detour.d && t - detour.t < .6) { pos.x += detour.d * sp * dt; collide(pos) } else detour.d = 0;
    heading = angLerp(heading, Math.atan2(mx, mz), 1 - Math.exp(-10 * dt));
    if (target && !fwd && !side && performance.now() - dragYawT > 1500) camYaw = angLerp(camYaw, Math.atan2(-mx, -mz), 1 - Math.exp(-1.6 * dt)); walkT += dt * 9 }
  if (wasMoving && !moving) sendPresence(true); wasMoving = moving;
  let near = 0;
  if (me && !seated) for (let i = 1; i <= 10; i++) {
    const P = PICS[i], dx = pos.x - P.center.x, dz = pos.z - P.center.z, d = dx * P.n.x + dz * P.n.z, lat = dx * P.n.z - dz * P.n.x, pad = i === nearI ? .35 : 0;
    if (d < (i === 10 ? 4.4 : 3.3) + pad && Math.abs(lat) < P.w / 2 + .45 + pad) { near = i; break }
  }
  if (near !== nearI) { if (nearI && !seen.has(nearI)) listened[nearI] = 0; nearI = near; nearSince = t; showPlaque(near, false); if (near) loadBuf(KEYS[near]) }
  // 그 작품의 음악이 실제로 흘러나오는 동안만 30초를 셉니다 (소리 꺼짐·불러오는 중·다른 곡이면 멈춤)
  const hearing = !QZ.open && nearI && soundOn && ac && ac.state === 'running' && playing && playing.name === KEYS[nearI] && !bufLoading.has(KEYS[nearI]) && (playing.real || !(CFG.audio && CFG.audio[nearI]) || bufFail.has(KEYS[nearI]));
  { const sl = document.getElementById('seal'), hi = sl && sl.querySelector('.st i'); if (hi) { const want2 = !soundOn ? '소리를 켜 주세요' : hearing ? `${Math.max(0, Math.ceil(needSec(nearI) - (listened[nearI] || 0)))}초 남음` : '음악 준비 중'; if (hi.textContent !== want2) hi.textContent = want2 } }
  if (hearing && !seen.has(nearI)) { listened[nearI] = (listened[nearI] || 0) + dt; const sl = document.getElementById('seal'), pr = sl && sl.querySelector('.prg'); if (pr) pr.style.strokeDashoffset = C36 * (1 - Math.min(1, listened[nearI] / needSec(nearI))) }
  if (nearI && !seen.has(nearI) && playing && playing.real && listened[nearI] >= needSec(nearI)) { seen.add(nearI); store.set('pae-seen3', [...seen]); updCount(); { const sl = document.getElementById('seal'); if (sl) { sl.className = 'seal done pop'; sl.querySelector('.st').innerHTML = '관람<b>완료!</b>'; plaque.classList.remove('thump'); void plaque.offsetWidth; plaque.classList.add('thump') } } if (seen.size === 10) { store.set('pae-done', Date.now()); toast('도장 10개 완성! 산책 완주'); setTimeout(quizInvite, 1600) } else toast(`관람 도장 ${seen.size}/10`) }
  want = QZ.open && QZ.key ? QZ.key : nearI ? KEYS[nearI] : 'promenade';
  if (me) { me.position.set(pos.x, seated ? .3 : moving && !RM ? Math.abs(Math.sin(walkT)) * .08 : 0, pos.z); me.rotation.y = heading; me.userData.tag.visible = !nearI && !seated; { const ft = nearI ? .12 : 1, u = me.userData; if (Math.abs(u.fade - ft) > .005) { u.fade += (ft - u.fade) * Math.min(1, dt * 6); me.traverse(o => { if (o.isMesh && o.material) { o.material.opacity = (o.material.userData.base ?? (o.material.userData.base = o.material.opacity)) * u.fade; o.material.depthWrite = u.fade > .9 } }) } } animateAvatar(me, walkT, moving, !!seated); sendPresence(false); if ((t * 4 | 0) !== updSit.k) { updSit.k = t * 4 | 0; updSit() } }
  for (const o of others.values()) { o.cur.x += (o.tx - o.cur.x) * Math.min(1, dt * 6); o.cur.z += (o.tz - o.cur.z) * Math.min(1, dt * 6); o.r = angLerp(o.r, o.tr, Math.min(1, dt * 6)); o.ph = (o.ph || 0) + (o.mv ? dt * 9 : 0); o.g.position.set(o.cur.x, o.st ? .3 : o.mv && !RM ? Math.abs(Math.sin(o.ph)) * .08 : 0, o.cur.z); o.g.rotation.y = o.r; animateAvatar(o.g, o.ph, o.mv, o.st) }
  for (let k = claps.length - 1; k >= 0; k--) { const c = claps[k], a = (now - c.t0) / 1400; c.s.position.y = 2.7 + a * .8; c.s.material.opacity = 1 - a; if (a >= 1) { c.g.remove(c.s); claps.splice(k, 1) } }
  if (me && lit < 1) lit = Math.min(1, lit + dt / 1.8);
  { const e = lit * lit * (3 - 2 * lit); hemi.intensity = .12 + .83 * e; sun.intensity = .05 + .3 * e; spot.intensity = 2.6 * (1 - e); scene.background.copy(DARK).lerp(BRIGHT, e); scene.fog.color.copy(scene.background); scene.fog.near = 6 + 22 * e; scene.fog.far = 26 + 34 * e }
  if (preview) { preview.rotation.y = RM ? 0 : Math.sin(t * .6) * .35; animateAvatar(preview, t * 3, false) }
  let cp, cl;
  if (!me) { const a = RM ? 0 : Math.sin(t * .25) * .35; cp = new THREE.Vector3(PREV.x + Math.sin(a) * 3.6, 1.75, PREV.z + Math.cos(a) * 3.6); cl = new THREE.Vector3(PREV.x, 1.15, PREV.z) }
  else if (nearI) {
    // 작품이 설명 카드에 가리지 않고 남은 화면에 꽉 차게 보이도록 거리 계산
    const p = PICS[nearI]; if (performance.now() - dragYawT > 1500) camYaw = angLerp(camYaw, Math.atan2(p.n.x, p.n.z), 1 - Math.exp(-2.2 * dt));
    const W = stage.clientWidth, Hh = stage.clientHeight; let fx = 1, fy = (Hh - 130) / Hh;
    if (plaque.classList.contains('on')) { const r = plaque.getBoundingClientRect(); if (r.top > Hh * .45 || r.right < W * .6) fx = (W - r.right - 16) / W; else fy = (Hh - 150 - r.bottom) / Hh }
    const vt = Math.tan(camera.fov * Math.PI / 360), ht = vt * camera.aspect;
    const d = Math.min(11.5, Math.max(2.6, (p.w / 2 * 1.12) / (ht * Math.max(.3, fx)), (p.h / 2 * 1.12) / (vt * Math.max(.3, fy))));
    cp = p.center.clone().addScaledVector(p.n, d); cl = p.center.clone() }
  else if (seated) { const f = seated.face; cp = new THREE.Vector3(pos.x + 1.8, 3.1, pos.z - f * 4.6); cl = new THREE.Vector3(pos.x, 1.2, pos.z + f * 6) }
  else { cp = new THREE.Vector3(pos.x + Math.sin(camYaw) * 5.4, 3.3, pos.z + Math.cos(camYaw) * 5.4); cl = new THREE.Vector3(pos.x, 1.3, pos.z) }
  cp.x = Math.max(-W2 + .4, Math.min(W2 - .4, cp.x)); cp.z = Math.max(-LEN + .4, Math.min(-.3, cp.z));
  const k = 1 - Math.exp(-3.2 * dt); camPos.lerp(cp, k); camLook.lerp(cl, k); camera.position.copy(camPos); camera.lookAt(camLook);
  if (me) {
    const W = stage.clientWidth, Hh = stage.clientHeight, tg = { x: 0, y: 0 };
    if (plaque.classList.contains('on')) { const r = plaque.getBoundingClientRect(); if (r.top > Hh * .45 || r.right < W * .6) tg.x = -r.right / 2; else tg.y = -(((r.bottom + (Hh - 150)) / 2) - Hh / 2) }
    VO.x += (tg.x - VO.x) * Math.min(1, dt * 5); VO.y += (tg.y - VO.y) * Math.min(1, dt * 5);
    if (Math.abs(VO.x) > .5 || Math.abs(VO.y) > .5) camera.setViewOffset(W, Hh, VO.x, VO.y, W, Hh); else if (camera.view && camera.view.enabled) camera.clearViewOffset();
  }
  renderer.render(scene, camera); drawMini(); requestAnimationFrame(frame);
}
function drawMini() {
  mg.clearRect(0, 0, 400, 128); mg.fillStyle = '#ffffff'; mg.fillRect(0, 0, 400, 128); mg.strokeStyle = '#161616'; mg.lineWidth = 2; mg.strokeRect(18, 12, 364, 104);
  BENCHES.forEach(([x, z]) => { const [a, b] = mapXY(x, z); mg.fillStyle = '#d8cbb8'; mg.fillRect(a - 4, b - 17, 8, 34) });
  for (let i = 1; i <= 10; i++) { const p = PICS[i].center, [a, b] = mapXY(p.x, p.z); mg.fillStyle = seen.has(i) ? '#161616' : '#ffffff'; mg.strokeStyle = '#161616'; mg.lineWidth = 1.5; mg.beginPath(); mg.arc(a, b, 11, 0, 7); mg.fill(); mg.stroke(); mg.fillStyle = seen.has(i) ? '#ffffff' : '#161616'; mg.font = '700 13px Pretendard, sans-serif'; mg.textAlign = 'center'; mg.fillText(i, a, b + 5) }
  for (const o of others.values()) { const [a, b] = mapXY(o.cur.x, o.cur.z); mg.fillStyle = COLORS[o.c]; mg.beginPath(); mg.arc(a, b, 6, 0, 7); mg.fill() }
  if (me) { const [a, b] = mapXY(pos.x, pos.z); mg.fillStyle = '#2346d1'; mg.beginPath(); mg.arc(a, b, 8, 0, 7); mg.fill(); mg.strokeStyle = '#ffffff'; mg.lineWidth = 2; mg.stroke() }
}
requestAnimationFrame(frame);
