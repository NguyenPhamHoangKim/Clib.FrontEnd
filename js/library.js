new Swiper(".new-video-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-new-video-next",
    prevEl: ".swiper-new-video-prev",
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
  },
});
new Swiper(".albums-swiper", {
  slidesPerView: 2.3,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-albums-next",
    prevEl: ".swiper-albums-prev",
  },
  autoResize: false,
});
console.log($("#following-swiper"));
new Swiper("#following-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-following-next",
    prevEl: ".swiper-following-prev",
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
      slidesPerView: 6.5,
      spaceBetween: 16,
    },
  },
});

new Swiper("#listen-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-listen-next",
    prevEl: ".swiper-listen-prev",
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
      slidesPerView: 6.5,
      spaceBetween: 16,
    },
  },
});
new Swiper(".playlists-mb-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 14,
    },
  },
});
new Swiper(".playlists-pc-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  autoResize: false,
  navigation: {
    nextEl: ".swiper-playlists-pc-next",
    prevEl: ".swiper-playlists-pc-prev",
  },
  breakpoints: {
    800: {
      slidesPerView: 1.2,
    },
    1320: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },
  },
});
new Swiper(".playlist-video-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-playlist-video-next",
    prevEl: ".swiper-playlist-video-prev",
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
  },
});

if ($(".close-modal")) {
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

  const closeVideo = function () {
    $(".modal-choose").hide();
  };

  checkClickOutside(
    "modal-choose-inner",
    function () {
      closeVideo();
    },
    "open-modal",
  );

  checkClickOutside(
    "modal-edit-inner",
    function () {
      $(".modal-edit").hide();
    },
    "open-modal-edit",
  );
}

checkClickOutside(
  "modal-more--inner",
  function () {
    $(".modal-more").hide();
  },
  "open-modal-more",
);
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
new Swiper(".services-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-services-next",
    prevEl: ".swiper-services-prev",
  },
  autoResize: false,
  breakpoints: {
    400: {
      slidesPerView: 1.5,
    },
  },
});
