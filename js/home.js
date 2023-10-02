$(".hot-tab").each((_, el) => {
  $(el).click(() => {
    $(".hot-tab.active").removeClass("active");
    $(el).addClass("active");
  });
});
$(".hot-tab-vid").each((_, el) => {
  $(el).click(() => {
    $(".hot-tab-vid.active").removeClass("active");
    $(el).addClass("active");
  });
});

$(".hot-item").each(function (_, el) {
  const hotItemLove = $(el).find(".hot-item--love img");
  $(hotItemLove).click(function (e) {
    e.preventDefault();
    $(this).attr(
      "src",
      $(this).attr("src") === "/assets/svgs/heart.svg"
        ? "/assets/svgs/heart-outline.svg"
        : "/assets/svgs/heart.svg",
    );
  });
});

new Swiper(".banner-swiper", {
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

new Swiper(".song-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-song-next",
    prevEl: ".swiper-song-prev",
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

new Swiper(".artists-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-artists-next",
    prevEl: ".swiper-artists-prev",
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

new Swiper(".albums-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-albums-next",
    prevEl: ".swiper-albums-prev",
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
