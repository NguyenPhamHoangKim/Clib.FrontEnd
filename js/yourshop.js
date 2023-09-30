$(".btn-upload").click(function () {
  $(".upload").show();
});
$(".close-upload").click(function () {
  $(".upload").hide();
});

new Swiper(".albums-swiper", {
  slidesPerView: 1.8,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-albums-next",
    prevEl: ".swiper-albums-prev",
  },
  autoResize: false,
  breakpoints: {
    500: {
      spaceBetween: 12,
      slidesPerView: 2.8,
    },
  },
});

new Swiper(".services-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 18,
  navigation: {
    nextEl: ".swiper-services-next",
    prevEl: ".swiper-services-prev",
  },
  autoResize: false,
});
