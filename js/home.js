$(".hot-tab").each((_, el) => {
  $(el).click(() => {
    $(".hot-tab.active").removeClass("active");
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
  slidesPerView: 6.5,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-song-next",
    prevEl: ".swiper-song-prev",
  },
});
