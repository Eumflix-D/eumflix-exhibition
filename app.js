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
const KEYS=[null,'gnomus','castle','tuileries','bydlo','chicks','goldenberg','limoges','catacombs','babayaga','gate'];
const COLORS=['#b3322b','#3f6f9a','#6a8f4e','#c9a24a','#7d4a8c','#e07a3a'];
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
  if (!ac) return;
  if (!playing || playing.name !== want) startTrack(want);
  else if (!playing.real && bufCache.has(want)) startTrack(want);
  if (!playing.real) { const p = BUILT[playing.name]; while (playing.next < ac.currentTime + .6) { const t0 = playing.next; p.ev.forEach(([t, v, n, d, g]) => play(playing.g, v, t0 + t, n, d, g)); playing.next += p.len } }
}

/* ================= 3D 공간 ================= */
const W2 = 7, LEN = 48;
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.outputEncoding = THREE.sRGBEncoding; stage.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color('#1a0a0f'); scene.fog = new THREE.Fog('#1a0a0f', 20, 52);
const camera = new THREE.PerspectiveCamera(55, 1, .1, 120);
scene.add(new THREE.HemisphereLight('#ffe6c0', '#3a1a10', .75));
const sun = new THREE.DirectionalLight('#fff0d8', .45); sun.position.set(3, 10, 4); scene.add(sun);
function canvasTex(w, h, fn, rep) { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); fn(g, w, h); const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]) } t.anisotropy = 8; return t }
const floorTex = canvasTex(256, 256, (g) => { for (let y = 0; y < 8; y++)for (let x = 0; x < 2; x++) { g.fillStyle = ['#5e3d25', '#583921', '#634028', '#5b3b23'][(x + y * 3) % 4]; g.fillRect(x * 128 + (y % 2) * 64, y * 32, 128, 32); g.fillStyle = 'rgba(0,0,0,.12)'; g.fillRect(x * 128 + (y % 2) * 64, y * 32, 2, 32); g.fillRect(0, y * 32, 256, 1) } }, [7, 24]);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(W2 * 2, LEN), new THREE.MeshLambertMaterial({ map: floorTex })); floor.rotation.x = -Math.PI / 2; floor.position.z = -LEN / 2; scene.add(floor);
const rug = new THREE.Mesh(new THREE.PlaneGeometry(3, LEN - 6), new THREE.MeshLambertMaterial({ color: '#5a1a24' })); rug.rotation.x = -Math.PI / 2; rug.position.set(0, .01, -LEN / 2 - 1); scene.add(rug);
const wallTex = canvasTex(128, 128, (g) => { g.fillStyle = '#3d1520'; g.fillRect(0, 0, 128, 128); g.fillStyle = 'rgba(201,162,74,.07)'; for (let i = 0; i < 4; i++)for (let j = 0; j < 4; j++) { g.beginPath(); g.ellipse(i * 32 + 16, j * 32 + 16, 6, 10, 0, 0, 7); g.fill() } }, [10, 3]);
const wallMat = new THREE.MeshLambertMaterial({ map: wallTex });
function wall(w, h, x, z, ry) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), wallMat); m.position.set(x, h / 2, z); m.rotation.y = ry; scene.add(m);
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, 1, .08), new THREE.MeshLambertMaterial({ color: '#2a0f17' })); b.position.set(x, .5, z); b.rotation.y = ry; scene.add(b);
  const r = new THREE.Mesh(new THREE.BoxGeometry(w, .08, .1), new THREE.MeshLambertMaterial({ color: '#8d7136' })); r.position.set(x, 1.02, z); r.rotation.y = ry; scene.add(r)
}
const H = 5.6; wall(LEN, H, -W2, -LEN / 2, Math.PI / 2); wall(LEN, H, W2, -LEN / 2, -Math.PI / 2); wall(W2 * 2, H, 0, -LEN, 0); wall(W2 * 2, H, 0, 0, Math.PI);
const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W2 * 2, LEN), new THREE.MeshLambertMaterial({ color: '#20090f' })); ceil.rotation.x = Math.PI / 2; ceil.position.set(0, H, -LEN / 2); scene.add(ceil);
[-10, -24, -38].forEach(z => { const l = new THREE.PointLight('#ffd9a0', .55, 22, 2); l.position.set(0, 4.6, z); scene.add(l); const s = new THREE.Mesh(new THREE.SphereGeometry(.28, 16, 12), new THREE.MeshBasicMaterial({ color: '#ffe2a8' })); s.position.copy(l.position); scene.add(s) });
const BENCHES = [[0, -12], [0, -30]]; const benchMat = new THREE.MeshLambertMaterial({ color: '#2b1a12' }), cushion = new THREE.MeshLambertMaterial({ color: '#7a1f24' });
BENCHES.forEach(([x, z]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(3.4, .45, .9), benchMat); b.position.set(x, .22, z); scene.add(b); const c = new THREE.Mesh(new THREE.BoxGeometry(3.2, .12, .8), cushion); c.position.set(x, .5, z); scene.add(c) });
function makeSign() {
  return canvasTex(1024, 512, (g, w, h) => {
    g.fillStyle = '#ece0c4'; g.fillRect(0, 0, w, h); g.strokeStyle = '#8d7136'; g.lineWidth = 14; g.strokeRect(20, 20, w - 40, h - 40);
    g.fillStyle = '#3a1620'; g.textAlign = 'center'; g.font = '800 92px Hahmlet, serif'; g.fillText('전람회의 그림', w / 2, 170);
    g.font = '36px "IBM Plex Sans KR", sans-serif'; g.fillStyle = '#6d5440'; g.fillText('음플릭스 전시관 · 무소륵스키 1874', w / 2, 240);
    g.font = '34px "Gowun Dodum", sans-serif'; g.fillStyle = '#2b1a12';
    ['1873년, 친구 하르트만이 서른아홉에 세상을 떠났어요.', '무소륵스키는 유작전의 그림 열 점을 음악으로 옮겼어요.', '그림 사이를 걷는 발걸음이 바로 프롬나드예요.'].forEach((s, i) => g.fillText(s, w / 2, 320 + i * 52))
  })
}
const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(5, 2.5), new THREE.MeshBasicMaterial({ map: makeSign() })); signMesh.position.set(0, 2.6, -.06); signMesh.rotation.y = Math.PI; scene.add(signMesh);

/* 그림 걸기 */
const PICS = [null];
const frameMat = new THREE.MeshLambertMaterial({ color: '#c9a24a', emissive: '#3a2a08' });
function hang(i) {
  let x, z, ry, nx, nz, w = 3.2, h = 2.4, y = 2.5;
  if (i === 10) { x = 0; z = -LEN + .12; ry = 0; nx = 0; nz = 1; w = 4.8; h = 3.6; y = 2.9 }
  else if (i % 2) { x = -W2 + .12; z = -6 - (i - 1) * 4; ry = Math.PI / 2; nx = 1; nz = 0 }
  else { x = W2 - .12; z = -6 - (i - 1) * 4; ry = -Math.PI / 2; nx = -1; nz = 0 }
  const c = document.createElement('canvas'); c.width = 800; c.height = 600; const g = c.getContext('2d'); cx = g; cx.save(); DRAW[KEYS[i]](2); cx.restore();
  const tex = new THREE.CanvasTexture(c); tex.encoding = THREE.sRGBEncoding; tex.anisotropy = 8;
  const grp = new THREE.Group(); grp.position.set(x, y, z); grp.rotation.y = ry; scene.add(grp);
  const fr = new THREE.Mesh(new THREE.BoxGeometry(1, 1, .14), frameMat); fr.scale.set(w + .36, h + .36, 1); grp.add(fr);
  const pic = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex })); pic.scale.set(w, h, 1); pic.position.z = .075; pic.userData.pic = i; grp.add(pic);
  const glow = canvasTex(256, 256, (gg) => { const r = gg.createRadialGradient(128, 90, 10, 128, 128, 128); r.addColorStop(0, 'rgba(255,225,170,.35)'); r.addColorStop(1, 'rgba(255,225,170,0)'); gg.fillStyle = r; gg.fillRect(0, 0, 256, 256) });
  const gl = new THREE.Mesh(new THREE.PlaneGeometry(w * 1.9, h * 1.9), new THREE.MeshBasicMaterial({ map: glow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); gl.position.z = .02; grp.add(gl);
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(.9, .1, .3), frameMat); lamp.position.set(0, h / 2 + .45, .25); grp.add(lamp);
  const lab = canvasTex(256, 96, (gg) => { gg.fillStyle = '#ece0c4'; gg.fillRect(0, 0, 256, 96); gg.fillStyle = '#3a1620'; gg.textAlign = 'center'; gg.font = '800 40px Hahmlet, serif'; gg.fillText(ROMAN[i], 128, 46); gg.font = '24px "IBM Plex Sans KR", sans-serif'; gg.fillStyle = '#6d5440'; gg.fillText(ROOMS[i].t.slice(0, 12), 128, 80) });
  const lb = new THREE.Mesh(new THREE.PlaneGeometry(.8, .3), new THREE.MeshBasicMaterial({ map: lab })); lb.position.set(w / 2 + .75, -h / 2 + .2, .03); grp.add(lb);
  // 감상평 메모판 (그림 왼쪽 벽)
  const notes = new THREE.Group(); notes.position.set(-(w / 2 + 1.05), .1, .03); grp.add(notes);
  const P = { i, ctx: g, tex, pic, fr, grp, lb, notes, real: false, front: new THREE.Vector3(x + nx * 2.4, 0, z + nz * (i === 10 ? 3.4 : 2.4)), n: new THREE.Vector3(nx, 0, nz), center: new THREE.Vector3(x, y, z), w, h, maxW: w, maxH: h };
  PICS.push(P);
  // 선생님 그림 파일이 있으면 바꿔 끼우기
  const src = (CFG.images || {})[i];
  if (src) { const im = new Image(); im.onload = () => { const t2 = new THREE.Texture(im); t2.encoding = THREE.sRGBEncoding; t2.anisotropy = 8; t2.needsUpdate = true; pic.material.map = t2; pic.material.needsUpdate = true; P.real = true;
    const a = im.naturalWidth / im.naturalHeight; let ww = P.maxW * (i === 10 ? 1.15 : 1.25), hh = ww / a; if (hh > P.maxH * 1.1) { hh = P.maxH * 1.1; ww = hh * a } P.w = ww; P.h = hh; pic.scale.set(ww, hh, 1); fr.scale.set(ww + .36, hh + .36, 1); lb.position.set(ww / 2 + .75, -hh / 2 + .2, .03); notes.position.set(-(ww / 2 + 1.05), .1, .03) }; im.src = src }
}
for (let i = 1; i <= 10; i++)hang(i);

/* 아바타 */
function nameTag(text, mine) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d'); g.font = '600 28px "IBM Plex Sans KR", sans-serif';
  const w = Math.min(250, g.measureText(text).width + 28); g.fillStyle = mine ? 'rgba(201,162,74,.92)' : 'rgba(26,10,15,.8)'; g.fillRect((256 - w) / 2, 10, w, 44); g.fillStyle = mine ? '#2b1a12' : '#f1e6d2'; g.textAlign = 'center'; g.fillText(text, 128, 42);
  const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false })); s.scale.set(1.2, .3, 1); s.position.y = 2.15; s.renderOrder = 10; return s
}
function makeAvatar(color, name, mine) {
  const g = new THREE.Group(); const robe = new THREE.MeshLambertMaterial({ color });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(.28, .5, 1.1, 20), robe); body.position.y = .55; g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(.36, 24, 18), new THREE.MeshLambertMaterial({ color: '#e8b98f' })); head.position.y = 1.45; g.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(.375, 24, 12, 0, Math.PI * 2, 0, Math.PI * .42), new THREE.MeshLambertMaterial({ color: '#3a2618' })); hair.position.y = 1.47; hair.rotation.x = -.25; g.add(hair);
  const eyeM = new THREE.MeshBasicMaterial({ color: '#1a0f0a' });[-.12, .12].forEach(x => { const e = new THREE.Mesh(new THREE.SphereGeometry(.045, 8, 8), eyeM); e.position.set(x, 1.45, .33); g.add(e) });
  const scarf = new THREE.Mesh(new THREE.TorusGeometry(.27, .07, 8, 20), new THREE.MeshLambertMaterial({ color: '#ece0c4' })); scarf.rotation.x = Math.PI / 2; scarf.position.y = 1.08; g.add(scarf);
  const sh = new THREE.Mesh(new THREE.CircleGeometry(.5, 20), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: .3 })); sh.rotation.x = -Math.PI / 2; sh.position.y = .02; g.add(sh);
  const tag = nameTag(name, mine); g.add(tag); g.userData = { body, head, tag }; scene.add(g); return g;
}

/* ================= 상태 ================= */
let me = null, myColor = store.get('pae-color', 0), myA = store.get('pae-a', Math.floor(Math.random() * 16)), myB = store.get('pae-b', Math.floor(Math.random() * 16));
let heading = Math.PI, camYaw = 0, walkT = 0, moving = false;
const pos = new THREE.Vector3(0, 0, -3.5);
let target = null, nearI = 0, nearSince = 0;
const seen = new Set(store.get('pae-seen', []));
const plaque = document.getElementById('plaque'), toastEl = document.getElementById('toast');
function toast(s) { toastEl.textContent = s; toastEl.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('on'), 2400) }
function updCount() { document.getElementById('count').textContent = `도장 ${seen.size}/10` }
updCount();
function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e }
function showPlaque(i, fresh) {
  if (!i) { plaque.classList.remove('on'); return }
  const r = ROOMS[i], link = listenLink(i), cnt = (GB.byPic[i] || []).length;
  plaque.innerHTML = `<div class="no">${ROMAN[i]} · ${i} / 10</div><h1></h1><p class="orig"></p>
   <p>${r.p[0]}</p><p class="more">${r.p[1]}</p><div class="now">♪ <span class="nowtxt"></span><br>${r.i}</div>
   <div class="row"><a class="btn primary" target="_blank" rel="noopener"></a>
   <button class="btn ghost" data-gb="write">감상평 남기기</button><button class="btn ghost" data-gb="read">감상평 보기 (${cnt})</button></div>
   ${seen.has(i) ? `<div class="seal${fresh ? ' pop' : ''}">관람<br>${i}</div>` : ''}`;
  plaque.querySelector('h1').textContent = r.t; plaque.querySelector('.orig').textContent = r.o;
  const a = plaque.querySelector('a'); a.href = link.href; a.textContent = link.label;
  plaque.querySelector('.nowtxt').textContent = (CFG.audio && CFG.audio[i] && !bufFail.has(KEYS[i])) ? '지금 소리: 음플릭스 음원' : '지금 소리: ' + r.m;
  plaque.querySelector('[data-gb=write]').onclick = () => openGB(i, true);
  plaque.querySelector('[data-gb=read]').onclick = () => openGB(i, false);
  plaque.classList.add('on');
}

/* ================= 방명록 ================= */
const GB = { items: [], byPic: {}, ok: !!CFG.guestbookUrl, cur: 0 };
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
const NOTE_COLORS = ['#f7e27a', '#f9c1b8', '#c5e3a5', '#bfdcef'];
function noteTex(item, k) {
  return canvasTex(256, 256, (g) => {
    g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(10, 12, 240, 240); g.fillStyle = NOTE_COLORS[k % 4]; g.fillRect(4, 4, 240, 240);
    g.fillStyle = 'rgba(179,50,43,.85)'; g.beginPath(); g.arc(124, 18, 9, 0, 7); g.fill();
    g.fillStyle = '#2b1a12'; g.font = '26px "Gowun Dodum", sans-serif'; wrapLines(g, item.m, 210, 5).forEach((l, j) => g.fillText(l, 20, 66 + j * 34));
    g.font = '600 18px "IBM Plex Sans KR", sans-serif'; g.fillStyle = '#6d5440'; g.fillText('— ' + item.n, 20, 232)
  })
}
function moreTex(n) { return canvasTex(256, 80, (g) => { g.fillStyle = '#ece0c4'; g.fillRect(0, 0, 256, 80); g.fillStyle = '#3a1620'; g.textAlign = 'center'; g.font = '600 26px "IBM Plex Sans KR", sans-serif'; g.fillText(n ? `감상평 ${n}개 · 모두 보기` : '첫 감상평을 남겨 주세요', 128, 50) }) }
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
  gbChips.innerHTML = ''; [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i => { const b = el('button', 'chip', i ? ROMAN[i] + ' ' + ROOMS[i].t : '전체'); b.setAttribute('aria-pressed', GB.cur === i); b.onclick = () => { GB.cur = i; renderGB() }; gbChips.appendChild(b) })
}
function renderGB() {
  renderChips();
  document.getElementById('gbTitle').textContent = GB.cur ? `${ROMAN[GB.cur]}. ${ROOMS[GB.cur].t} 감상평` : '모든 감상평';
  document.getElementById('gbForm').hidden = !GB.cur || !GB.ok;
  const list = (GB.cur ? (GB.byPic[GB.cur] || []) : GB.items).slice().reverse(); gbList.innerHTML = '';
  if (!GB.ok) { gbList.appendChild(el('p', 'empty', '방명록은 곧 열려요. 선생님이 준비 중이에요.')); return }
  if (!list.length) { gbList.appendChild(el('p', 'empty', GB.cur ? '아직 감상평이 없어요. 첫 번째로 남겨 볼까요?' : '아직 감상평이 없어요. 그림 앞에서 첫 감상평을 남겨 주세요.')); return }
  list.forEach((x, k) => { const li = el('li', 'memo'); li.style.setProperty('--note', NOTE_COLORS[k % 4]); li.appendChild(el('p', 'm', x.m)); const meta = el('div', 'meta'); meta.appendChild(el('b', null, x.n)); meta.appendChild(el('span', null, (GB.cur ? '' : ROMAN[x.p] + ' ' + ROOMS[x.p].t + ' · ') + fmtDate(x.t))); li.appendChild(meta); gbList.appendChild(li) });
}
function openGB(i, write) { GB.cur = i; gbMsg.textContent = ''; gbEl.hidden = false; renderGB(); if (write && GB.ok && i) setTimeout(() => gbText.focus(), 50); else document.getElementById('gbClose').focus() }
document.getElementById('gbClose').onclick = () => { gbEl.hidden = true };
gbEl.addEventListener('click', e => { if (e.target === gbEl) gbEl.hidden = true });
addEventListener('keydown', e => { if (e.key === 'Escape' && !gbEl.hidden) gbEl.hidden = true });
document.getElementById('openAll').onclick = () => openGB(0, false);
gbNick.value = store.get('pae-gbnick', ''); gbNick.placeholder = nickOf(myA, myB);
gbText.addEventListener('input', () => { gbLen.textContent = `${gbText.value.length}/200` });
document.getElementById('gbForm').addEventListener('submit', e => {
  e.preventDefault(); const m = gbText.value.trim(), n = (gbNick.value.trim() || nickOf(myA, myB)).slice(0, 12);
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
  const c = Math.abs(v.c | 0) % COLORS.length, a = Math.abs(v.a | 0) % 16, b = Math.abs(v.b | 0) % 16, name = nickOf(a, b);
  let o = others.get(key);
  if (!o || o.c !== c || o.name !== name) { if (o) scene.remove(o.g); o = { g: makeAvatar(COLORS[c], name, false), c, name, cur: new THREE.Vector3(v.x, 0, v.z), r: +v.r || 0, cl: v.cl || 0 }; others.set(key, o) }
  o.tx = Math.max(-W2, Math.min(W2, v.x)); o.tz = Math.max(-LEN, Math.min(0, v.z)); o.tr = +v.r || 0; o.mv = !!v.mv; o.t = +v.t || 0; o.on = true;
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
  const d = { x: +pos.x.toFixed(2), z: +pos.z.toFixed(2), r: +heading.toFixed(2), c: myColor, a: myA, b: myB, mv: !!moving, t: firebase.database.ServerValue.TIMESTAMP };
  if (lastClap) d.cl = lastClap; myRef.set(d).catch(() => { })
}
let wasMoving = false;

/* 박수 */
const claps = [];
function clapAt(g) { const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'); x.font = '96px serif'; x.textAlign = 'center'; x.fillText('👏', 64, 100); const t = new THREE.CanvasTexture(c); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false })); s.scale.set(.8, .8, 1); s.position.y = 2.7; s.renderOrder = 11; g.add(s); claps.push({ s, g, t0: performance.now() }) }
document.getElementById('clap').onclick = () => { if (!me) return; const now = Date.now(); if (now - (clapAt.last || 0) < 1500) return; clapAt.last = now; clapAt(me); lastClap = now + serverOffset; sendPresence(true) };

/* 입력 */
const keys = {};
addEventListener('keydown', e => { if (/INPUT|TEXTAREA/.test(e.target.tagName) || !gbEl.hidden) return; keys[e.key.toLowerCase()] = true; if (e.key.startsWith('Arrow')) e.preventDefault(); target = null });
addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false });
addEventListener('blur', () => { for (const k in keys) keys[k] = false });
if (matchMedia('(pointer:coarse)').matches) document.body.classList.add('coarse');
const joy = document.getElementById('joy'), knob = joy.querySelector('i'); let jv = { x: 0, y: 0 }, jid = null;
function joyMove(e) { const r = joy.getBoundingClientRect(); let x = (e.clientX - r.left - r.width / 2) / (r.width / 2), y = (e.clientY - r.top - r.height / 2) / (r.height / 2); const m = Math.hypot(x, y); if (m > 1) { x /= m; y /= m } jv = { x, y }; knob.style.transform = `translate(${x * 34}px,${y * 34}px)` }
joy.addEventListener('pointerdown', e => { jid = e.pointerId; joy.setPointerCapture(jid); joyMove(e); target = null });
joy.addEventListener('pointermove', e => { if (e.pointerId === jid) joyMove(e) });
['pointerup', 'pointercancel'].forEach(ev => joy.addEventListener(ev, () => { jid = null; jv = { x: 0, y: 0 }; knob.style.transform = '' }));
const ray = new THREE.Raycaster(), mv = new THREE.Vector2(); let down = null;
renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY } });
renderer.domElement.addEventListener('pointerup', e => {
  if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) return; down = null;
  const r = renderer.domElement.getBoundingClientRect(); mv.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1); ray.setFromCamera(mv, camera);
  const objs = [floor]; for (let i = 1; i <= 10; i++) { objs.push(PICS[i].pic); PICS[i].notes.children.forEach(c => objs.push(c)) }
  const hit = ray.intersectObjects(objs)[0]; if (!hit) return;
  if (hit.object.userData.gb) { openGB(hit.object.userData.gb, false); return }
  if (hit.object.userData.pic) target = PICS[hit.object.userData.pic].front.clone(); else target = hit.point.clone().setY(0)
});
const mini = document.getElementById('mini'), mg = mini.getContext('2d');
const mapXY = (x, z) => [20 + (-z / LEN) * 360, 64 + (x / W2) * 50];
mini.addEventListener('click', e => { const r = mini.getBoundingClientRect(), mx = (e.clientX - r.left) / r.width * 400, my = (e.clientY - r.top) / r.height * 128; let best = 0, bd = 1e9; for (let i = 1; i <= 10; i++) { const p = PICS[i].center, [px, py] = mapXY(p.x, p.z), d = Math.hypot(px - mx, py - my); if (d < bd) { bd = d; best = i } } if (bd < 60) target = PICS[best].front.clone() });

/* 입장 */
const sw = document.getElementById('sw');
COLORS.forEach((c, i) => { const b = document.createElement('button'); b.style.background = c; b.setAttribute('aria-label', '옷 색 ' + (i + 1)); b.setAttribute('aria-pressed', i === myColor); b.onclick = () => { myColor = i;[...sw.children].forEach((x, k) => x.setAttribute('aria-pressed', k === i)) }; sw.appendChild(b) });
const nickEl = document.getElementById('nickname');
function showNick() { nickEl.textContent = nickOf(myA, myB); gbNick.placeholder = nickOf(myA, myB) }
showNick();
document.getElementById('reroll').onclick = () => { myA = Math.floor(Math.random() * 16); myB = Math.floor(Math.random() * 16); showNick() };
document.getElementById('enter').onclick = () => {
  store.set('pae-color', myColor); store.set('pae-a', myA); store.set('pae-b', myB);
  document.getElementById('gate').hidden = true; initAudio(); if (ac) ac.resume();
  me = makeAvatar(COLORS[myColor], nickOf(myA, myB) + ' (나)', true); me.position.copy(pos); startTogether();
  setTimeout(() => document.getElementById('hint').style.opacity = 0, 9000)
};
const sb = document.getElementById('sound'); sb.onclick = () => { soundOn = !soundOn; sb.textContent = soundOn ? '소리 켜짐' : '소리 꺼짐'; sb.setAttribute('aria-pressed', soundOn); if (master) master.gain.setTargetAtTime(soundOn ? .9 : 0, ac.currentTime, .1) };

/* ================= 루프 ================= */
const angLerp = (a, b, k) => { let d = ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; return a + d * k };
function collide(p) {
  p.x = Math.max(-W2 + .6, Math.min(W2 - .6, p.x)); p.z = Math.max(-LEN + .6, Math.min(-.6, p.z));
  BENCHES.forEach(([bx, bz]) => { const hx = 1.7 + .45, hz = .45 + .45, dx = p.x - bx, dz = p.z - bz; if (Math.abs(dx) < hx && Math.abs(dz) < hz) { if (hx - Math.abs(dx) < hz - Math.abs(dz)) p.x = bx + Math.sign(dx || 1) * hx; else p.z = bz + Math.sign(dz || 1) * hz } })
}
function resize() { const w = stage.clientWidth, h = stage.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 68 : 55; camera.updateProjectionMatrix() }
addEventListener('resize', resize); resize();
const camPos = new THREE.Vector3(0, 3.2, 2), camLook = new THREE.Vector3(0, 1.4, -4); let last = performance.now(), picClock = 0;
function frame(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now; const t = now / 1000;
  let fwd = 0, side = 0;
  if (keys['arrowup'] || keys['w']) fwd += 1; if (keys['arrowdown'] || keys['s']) fwd -= 1; if (keys['arrowright'] || keys['d']) side += 1; if (keys['arrowleft'] || keys['a']) side -= 1;
  if (Math.hypot(jv.x, jv.y) > .15) { fwd = -jv.y; side = jv.x }
  const f = { x: -Math.sin(camYaw), z: -Math.cos(camYaw) }, r = { x: Math.cos(camYaw), z: -Math.sin(camYaw) };
  let mx = f.x * fwd + r.x * side, mz = f.z * fwd + r.z * side;
  if (target && !fwd && !side) { const dx = target.x - pos.x, dz = target.z - pos.z, d = Math.hypot(dx, dz); if (d < .15) target = null; else { mx = dx / d * Math.min(1, d); mz = dz / d * Math.min(1, d) } }
  const mm = Math.hypot(mx, mz); moving = !!me && mm > .05;
  if (moving) { const sp = 4.2 * Math.min(1, mm); pos.x += mx / mm * sp * dt; pos.z += mz / mm * sp * dt; collide(pos); heading = angLerp(heading, Math.atan2(mx, mz), 1 - Math.exp(-10 * dt)); camYaw = angLerp(camYaw, Math.atan2(-mx, -mz), 1 - Math.exp(-(fwd || side ? 1.2 : 2.5) * dt)); walkT += dt * 9 }
  if (wasMoving && !moving) sendPresence(true); wasMoving = moving;
  let ni = 0, nd = 1e9; for (let i = 1; i <= 10; i++) { const d = pos.distanceTo(PICS[i].front); if (d < nd) { nd = d; ni = i } }
  const near = me && nd < (ni === 10 ? 3.2 : 2.6) ? ni : 0;
  if (near !== nearI) { nearI = near; nearSince = t; showPlaque(near, false); if (near) loadBuf(KEYS[near]) }
  if (nearI && !seen.has(nearI) && t - nearSince > 1.5) { seen.add(nearI); store.set('pae-seen', [...seen]); updCount(); showPlaque(nearI, true); toast(seen.size === 10 ? '🎉 열 점을 모두 감상했어요! 산책 완주' : `관람 도장 ${seen.size}/10`) }
  want = nearI ? KEYS[nearI] : 'promenade';
  if (nearI && !PICS[nearI].real && !RM && now - picClock > 33) { picClock = now; const p = PICS[nearI]; cx = p.ctx; cx.save(); DRAW[KEYS[nearI]](t); cx.restore(); p.tex.needsUpdate = true }
  if (me) { me.position.set(pos.x, moving && !RM ? Math.abs(Math.sin(walkT)) * .08 : 0, pos.z); me.rotation.y = heading; me.userData.tag.visible = !nearI; me.userData.body.rotation.z = moving && !RM ? Math.sin(walkT) * .06 : 0; sendPresence(false) }
  for (const o of others.values()) { o.cur.x += (o.tx - o.cur.x) * Math.min(1, dt * 6); o.cur.z += (o.tz - o.cur.z) * Math.min(1, dt * 6); o.r = angLerp(o.r, o.tr, Math.min(1, dt * 6)); o.ph = (o.ph || 0) + (o.mv ? dt * 9 : 0); o.g.position.set(o.cur.x, o.mv && !RM ? Math.abs(Math.sin(o.ph)) * .08 : 0, o.cur.z); o.g.rotation.y = o.r }
  for (let k = claps.length - 1; k >= 0; k--) { const c = claps[k], a = (now - c.t0) / 1400; c.s.position.y = 2.7 + a * .8; c.s.material.opacity = 1 - a; if (a >= 1) { c.g.remove(c.s); claps.splice(k, 1) } }
  let cp, cl;
  if (nearI) { const p = PICS[nearI], back = (nearI === 10 ? 7.2 : 5.2) * (camera.aspect < 1 ? 1.45 : 1); cp = p.center.clone().addScaledVector(p.n, back).setY(2.4); cl = p.center.clone().setY(p.center.y - (camera.aspect < 1 ? 1.3 : .75)) }
  else { cp = new THREE.Vector3(pos.x + Math.sin(camYaw) * 5.4, 3.3, pos.z + Math.cos(camYaw) * 5.4); cl = new THREE.Vector3(pos.x, 1.3, pos.z) }
  cp.x = Math.max(-W2 + .4, Math.min(W2 - .4, cp.x)); cp.z = Math.max(-LEN + .4, Math.min(-.3, cp.z));
  const k = 1 - Math.exp(-3.2 * dt); camPos.lerp(cp, k); camLook.lerp(cl, k); camera.position.copy(camPos); camera.lookAt(camLook);
  renderer.render(scene, camera); drawMini(); requestAnimationFrame(frame);
}
function drawMini() {
  mg.clearRect(0, 0, 400, 128); mg.strokeStyle = '#8d7136'; mg.lineWidth = 2; mg.strokeRect(18, 12, 364, 104);
  BENCHES.forEach(([x, z]) => { const [a, b] = mapXY(x, z); mg.fillStyle = '#5a1a24'; mg.fillRect(a - 5, b - 17, 10, 34) });
  for (let i = 1; i <= 10; i++) { const p = PICS[i].center, [a, b] = mapXY(p.x, p.z); mg.fillStyle = seen.has(i) ? '#b3322b' : '#c9a24a'; mg.beginPath(); mg.arc(a, b, 12, 0, 7); mg.fill(); mg.fillStyle = '#1a0a0f'; mg.font = '600 15px "IBM Plex Sans KR", sans-serif'; mg.textAlign = 'center'; mg.fillText(i, a, b + 5) }
  for (const o of others.values()) { const [a, b] = mapXY(o.cur.x, o.cur.z); mg.fillStyle = COLORS[o.c]; mg.beginPath(); mg.arc(a, b, 7, 0, 7); mg.fill() }
  if (me) { const [a, b] = mapXY(pos.x, pos.z); mg.fillStyle = '#fff'; mg.beginPath(); mg.arc(a, b, 9, 0, 7); mg.fill(); mg.fillStyle = COLORS[myColor]; mg.beginPath(); mg.arc(a, b, 6, 0, 7); mg.fill() }
}
requestAnimationFrame(frame);
