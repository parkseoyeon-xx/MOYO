var swiper = new Swiper('.gallery .gallery_inner ', {
  slidesPerView: 4,//보여지는 갤러리 수
  spaceBetween: 39,//갤러리 사이 간격
  speed: 1100,//버튼을 슬라이드가 넘어가는 시간
  autoplay: {
    delay: 2500,//자동으로 넘어가기 전 머무르는 시간
    disableOnInteraction: false,
  },
  loop: true,//슬라이드 무한반복
  navigation: {//화살표 버튼
    nextEl: '.gallery .swiper-button-next',
    prevEl: '.gallery .swiper-button-prev',
  },
  pagination: {//블릿 버튼
    el: '.gallery .swiper-pagination',
    type: "fraction",
  },
});

$(function () {
  $('.maincontents_in_text li').click(function () {
    $(this).addClass('text_on').siblings().removeClass('text_on');
  });
  $('.maincontents_in_text li:nth-child(1)').click(function () {
    $('.box1').addClass('active').siblings().removeClass('active');
  });
  $('.maincontents_in_text li:nth-child(2)').click(function () {
    $('.box2').addClass('active').siblings().removeClass('active');
  });
  $('.maincontents_in_text li:nth-child(3)').click(function () {
    $('.box3').addClass('active').siblings().removeClass('active');
  });
  $('.maincontents_in_text li:nth-child(4)').click(function () {
    $('.box4').addClass('active').siblings().removeClass('active');
  });
});

var swiper = new Swiper('.slide ', {
  speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
  autoplay: {
    delay: 5000,//자동으로 넘어가기 전 머무르는 시간
    disableOnInteraction: false,
  },
  loop: true,//슬라이드 무한반복
  navigation: {//화살표 버튼
    nextEl: '.slide .swiper-button-next',
    prevEl: '.slide .swiper-button-prev',
  },
  pagination: {//블릿 버튼
    el: '.slide .swiper-pagination',
    clickable: true,
  },
  effect: "fade",

  on:{
    slideChangeTransitionStart : function(){
      $('.slide .swiper-slide-active video')[0].currentTime=0;
      $('.slide .swiper-slide-active video')[0].play();
  }
},
});

