var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  initialSlide: 0,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".pj_img").hover(
  function () {
    let img_h = $(this).find("img").height();
    let screen_h = $(window).height();

    $(this)
      .find("img")
      .stop()
      .animate({ "margin-top": -(img_h - screen_h) }, 4000);
  },
  function () {
    $(this).find("img").stop().animate({ "margin-top": 0 }, 2000);
  }
);
