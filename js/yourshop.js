$(".btn-upload").click(function () {
  $(".upload").show();
});
$(".close-upload").click(function () {
  $(".upload").hide();
});
checkClickOutside(
  "upload--inner",
  function () {
    $(".upload").hide();
  },
  "btn-upload",
);
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
new Swiper(".digital-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-digital-next",
    prevEl: ".swiper-digital-prev",
  },
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 2.5,
    },
    680: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 5.5,
      spaceBetween: 16,
    },
  },
});
