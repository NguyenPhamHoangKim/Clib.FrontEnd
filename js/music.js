$(document).ready(function () {
  let $albumCover = $("#album-cover");
  let $showLyricsContainer = $("#show-lyrics-container");

  $("#show-lyrics").on("click", function () {
    $albumCover.css({
      transform: "scale(0.1)",
      opacity: 0,
    });
    $showLyricsContainer.css("opacity", 0);

    $("#lyrics").show();
  });

  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();

    if (scrollPosition > 100) {
      $albumCover.css({
        transform: "scale(0.1)",
        opacity: 0,
      });
      $showLyricsContainer.css("opacity", 0);
    } else {
      $albumCover.css({
        transform: "scale(1)",
        opacity: 1,
      });
      $showLyricsContainer.css("opacity", 1);
    }
  });
});
