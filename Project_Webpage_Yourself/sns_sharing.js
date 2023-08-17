// var Desc = document.getElementById("record").innerText
// var date = new Date();

// var today = document.write(date.getDate())
// var name = document.getElementById("name").innerText

Kakao.Share.createCustomButton({
    container: '#kakaotalk-sharing-btn1',
    templateId: 97295,
    templateArgs: {
        title: "아자아자! 오늘도 열공!👏 ",
        desc: "오늘 나의 공부 시간 기록",
        url: "https://localhost/stopwatch"
    }
  });

//   Kakao.Share.createCustomButton({
//     container: '#kakaotalk-sharing-btn2',
//     templateId: 97295,
//     templateArgs: {
//       title: "짝짝짝👏 오늘의 목표 달성!"
//       description: sdfsdf
//     },
//   });

// Kakao.Share.createDefaultButton({
//     container: '#kakaotalk-sharing-btn1',
//     objectType: 'text',
//     text:
//       '른 템플릿을 이용해 보낼 수 있습니다.',
//     link: {
//       // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
//       mobileWebUrl: 'file://stopwatch.html',
//       webUrl: 'file://stopwatch.html',
//     },
//   });

//   akao.Share.createDefaultButton({
//     container: '#kakaotalk-sharing-btn2',
//     objectType: 'text',
//     text:
//       '른 템플릿을 이용해 보낼 수 있습니다.',
//     link: {
//       // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
//       mobileWebUrl: 'file://stopwatch.html',
//       webUrl: 'file://stopwatch.html',
//     },
//   });