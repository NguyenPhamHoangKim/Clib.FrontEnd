$(document).ready(function () {
  $("#musicButton").addClass("active");

  $("#musicButton").click(function () {
    $(".grid button").removeClass("active");

    $(this).addClass("active");
  });

  $("#videosButton").click(function () {
    $(".grid button").removeClass("active");

    $(this).addClass("active");
  });

  $("#music").show();
  $("#videos").hide();

  $("#musicButton").click(function () {
    $("#music").show();
    $("#videos").hide();
  });

  $("#videosButton").click(function () {
    $("#videos").show();
    $("#music").hide();
  });

  let digitalFoodButton = $("#digitalFoodButton");
  let servicesButton = $("#servicesButton");
  let filterMusic = $(".filter-music");
  let music = $("#music");
  let videos = $("#videos");
  let filterProduct = $(".filter-product");
  let services = $("#services");
  services.hide();
  filterProduct.hide();

  digitalFoodButton.on("click", function () {
    digitalFoodButton.addClass("active");
    servicesButton.removeClass("active");

    filterMusic.show();
    music.show();
    filterProduct.hide();
    services.hide();
  });

  servicesButton.on("click", function () {
    digitalFoodButton.removeClass("active");
    servicesButton.addClass("active");

    filterMusic.hide();
    music.hide();
    videos.hide();
    filterProduct.show();
    services.show();
  });

  $("#button-filter").click(function () {
    $(".filter-music").show();
  });
  $(".close-filter").click(function () {
    $(".filter-music").hide();
    $(".filter-product").hide();
  });

  $(".button").click(function () {
    $(".button").removeClass("active-mobile");

    $(this).addClass("active-mobile");
  });

  $(".hero").click(function () {
    $(".hero").removeClass("active-hero");

    $(this).addClass("active-hero");
  });

  $(".video-mobile").hide();

  $(".music").click(function () {
    $(".video-mobile").hide();

    $(".music-mobile").show();
  });

  $(".video").click(function () {
    $(".music-mobile").hide();

    $(".video-mobile").show();
  });

  $(".service").hide();
  $(".yourshop").hide();

  $(".btn-digital").click(function () {
    $(".digital").show();

    $(".service").hide();
    $(".yourshop").hide();
  });

  $(".btn-service").click(function () {
    $(".service").show();

    $(".digital").hide();
    $(".yourshop").hide();
  });

  $(".btn-yourshop").click(function () {
    $(".yourshop").show();

    $(".service").hide();
    $(".digital").hide();
  });

  $(".filter-digital").hide();
  $(".filter-service").hide();

  $(".filter-music-mobile").click(function () {
    // Ẩn nội dung âm nhạc
    $(".filter-digital").show();

    // Hiển thị nội dung video
  });
  $(".filter-service-mobile").click(function () {
    // Ẩn nội dung âm nhạc
    $(".filter-service").show();

    // Hiển thị nội dung video
  });
  $(".hiden-filter").click(function () {
    // Ẩn nội dung âm nhạc
    $(".filter-digital").hide();

    // Hiển thị nội dung video
  });
  $(".hidden-filter-mobile").click(function () {
    // Ẩn nội dung âm nhạc
    $(".filter-service").hide();
  });
});
