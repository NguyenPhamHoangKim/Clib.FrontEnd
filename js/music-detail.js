new Swiper(".swiper-styles", {
  slidesPerView: 1.2,
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 3.5,
    },
    680: {
      slidesPerView: 4.5,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 16,
    },
  },
});

$(".modal-checkout").hide();

// $(".modal-checkout").hide();
$(".close-checkout").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-checkout").hide();
  });
});
$(".btn-checkout").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-checkout").show();
  });
});
