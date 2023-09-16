new Swiper(".swiper-service", {
  slidesPerView: 1.2,
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoResize: false,
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
  },
});
$(".modal-cmt").hide();

$(".close-checkout").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-cmt").hide();
  });
});

$(".cmt").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-cmt").show();
  });
});
