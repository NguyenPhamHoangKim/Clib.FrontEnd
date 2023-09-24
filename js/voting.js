new Swiper(".song-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-song-next",
    prevEl: ".swiper-song-prev",
  },
  autoResize: false,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    580: {
      slidesPerView: 2.2,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 16,
    },
    1165: {
      slidesPerView: 4.2,
      spaceBetween: 16,
    },
  },
});
