/* ===== 전시관 설정 =====
   이 파일만 고치면 돼요. 빈칸('')이나 null이면 그 기능은 꺼진 채로 전시관이 열려요. */
window.EXHIBIT_CONFIG = {

  /* 1) 방명록: 구글 앱스 스크립트 '웹 앱' 주소 (https://script.google.com/macros/s/..../exec) */
  guestbookUrl: '',

  /* 2) 함께 관람(다른 학교 친구들 아바타 보이기): Firebase 웹 앱 설정 값
        예) { apiKey:'...', authDomain:'...', databaseURL:'https://...firebasedatabase.app', projectId:'...', appId:'...' } */
  firebase: null,

  /* 3) 음플릭스 〈전람회의 그림〉 영상과 곡별 시작 시간(초)
        시간을 모르면 0으로 두면 영상 처음부터 열려요. */
  video: {
    url: 'https://www.youtube.com/watch?v=x-zNzTtzCnw',
    // 음플릭스 〈무소륵스키 전람회의 그림〉 설명란 시간 그대로 (0번은 첫 프롬나드)
    // embed: true 이면 전시관 안에 영상 창을 띄우고, 작품 앞에 서면 그 곡 구간(해설 포함)을 재생해요
    embed: true,
    // [시작, 끝] 초. 0번은 걸어 다닐 때 반복되는 첫 프롬나드
    segments: { 0: [6, 80], 1: [80, 199], 2: [244, 528], 3: [554, 611], 4: [611, 754], 5: [788, 855], 6: [855, 993], 7: [1072, 1149], 8: [1149, 1233], 9: [1342, 1539], 10: [1539, 1827] },
    starts: { 0: 6, 1: 80, 2: 244, 3: 554, 4: 611, 5: 788, 6: 855, 7: 1072, 8: 1149, 9: 1342, 10: 1539 }
  },

  /* 4) 그림·음원 파일 위치. 파일이 없으면 기본 그림과 기본 음악(프롬나드 변주)이 나와요.
        0번은 입구(프롬나드), 1~10번은 그림 순서예요. */
  images: {
    1: 'assets/img/01.jpg', 2: 'assets/img/02.jpg', 3: 'assets/img/03.jpg', 4: 'assets/img/04.jpg', 5: 'assets/img/05.jpg',
    6: 'assets/img/06.jpg', 7: 'assets/img/07.jpg', 8: 'assets/img/08.jpg', 9: 'assets/img/09.jpg', 10: 'assets/img/10.jpg'
  },
  audio: {
    0: 'assets/audio/00.mp3',
    1: 'assets/audio/01.mp3', 2: 'assets/audio/02.mp3', 3: 'assets/audio/03.mp3', 4: 'assets/audio/04.mp3', 5: 'assets/audio/05.mp3',
    6: 'assets/audio/06.mp3', 7: 'assets/audio/07.mp3', 8: 'assets/audio/08.mp3', 9: 'assets/audio/09.mp3', 10: 'assets/audio/10.mp3'
  }
};
