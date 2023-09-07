$(".profile-nav:not(.active)").each(function () {
  $(this).mouseenter(function () {
    const originalSrc = $(this).find("img").attr("src");
    const newSrc = originalSrc.replace(".svg", "-selected.svg");
    $(this).find("img").attr("src", newSrc);
  });
});

$(".profile-nav:not(.active)").mouseleave(function () {
  const originalSrc = $(this).find("img").attr("src");
  const newSrc = originalSrc.replace("-selected.svg", ".svg");
  $(this).find("img").attr("src", newSrc);
});

new Swiper(".song-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-song-next",
    prevEl: ".swiper-song-prev",
  },
  autoResize: false,
});
