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
    320: {
      slidesPerView: 1.8,
    },
    680: {
      slidesPerView: 4.5,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 16,
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
