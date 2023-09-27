new Swiper(".albums-swiper", {
  slidesPerView: 2.3,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-albums-next",
    prevEl: ".swiper-albums-prev",
  },
  autoResize: false,
});

new Swiper(".song-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-song-next",
    prevEl: ".swiper-song-prev",
  },
  autoResize: false,
});

new Swiper(".new-video-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-new-video-next",
    prevEl: ".swiper-new-video-prev",
  },
  autoResize: false,
});

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-choose").hide();
    $(".modal-edit").hide();
    $(".modal-more").hide();
    $(".modal-delete").hide();
  });
});
$(".open-modal").each(function () {
  $(this).click(function () {
    $(".modal-choose").show();
  });
});

$(".open-modal-edit").each(function () {
  $(this).click(function () {
    $(".modal-edit").show();
  });
});

$(".open-modal-more").each(function () {
  $(this).click(function () {
    $(".modal-more").show();
  });
});
