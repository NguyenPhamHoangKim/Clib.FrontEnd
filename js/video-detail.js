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
