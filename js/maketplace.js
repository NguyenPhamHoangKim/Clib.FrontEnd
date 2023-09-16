$(document).ready(function () {
  // Initially, set the "active" class to the "Music" button
  $("#musicButton").addClass("active");

  // Add a click event handler for the buttons
  $("#musicButton").click(function () {
    // Remove the "active" class from all buttons
    $(".grid button").removeClass("active");

    // Add the "active" class to the clicked button
    $(this).addClass("active");
  });

  $("#videosButton").click(function () {
    // Remove the "active" class from all buttons
    $(".grid button").removeClass("active");

    // Add the "active" class to the clicked button
    $(this).addClass("active");
  });

  $("#music").show();
  $("#videos").hide();

  // Click event handler for the "Music" button
  $("#musicButton").click(function () {
    // Show the music section and hide the video section
    $("#music").show();
    $("#videos").hide();
  });

  // Click event handler for the "Videos" button
  $("#videosButton").click(function () {
    // Show the video section and hide the music section
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

  // Add a click event handler for the Digital Food button
  digitalFoodButton.on("click", function () {
    // Remove "active" class from all buttons
    digitalFoodButton.addClass("active");
    servicesButton.removeClass("active");

    // Show/hide elements based on their IDs
    filterMusic.show();
    music.show();
    filterProduct.hide();
    services.hide();
  });

  // Add a click event handler for the Services button
  servicesButton.on("click", function () {
    // Remove "active" class from all buttons
    digitalFoodButton.removeClass("active");
    servicesButton.addClass("active");

    // Show/hide elements based on their IDs
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

  // Xử lý sự kiện khi nút "Musics" được nhấp
  $(".music").click(function () {
    // Ẩn nội dung video
    $(".video-mobile").hide();

    // Hiển thị nội dung âm nhạc
    $(".music-mobile").show();
  });

  // Xử lý sự kiện khi nút "Videos" được nhấp
  $(".video").click(function () {
    // Ẩn nội dung âm nhạc
    $(".music-mobile").hide();

    // Hiển thị nội dung video
    $(".video-mobile").show();
  });

  $(".service").hide();
  $(".yourshop").hide();

  $(".btn-digital").click(function () {
    // Ẩn nội dung video
    $(".digital").show();

    // Hiển thị nội dung âm nhạc
    $(".service").hide();
    $(".yourshop").hide();
  });

  // Xử lý sự kiện khi nút "Videos" được nhấp
  $(".btn-service").click(function () {
    // Ẩn nội dung âm nhạc
    $(".service").show();

    // Hiển thị nội dung video
    $(".digital").hide();
    $(".yourshop").hide();
  });

  $(".btn-yourshop").click(function () {
    // Ẩn nội dung âm nhạc
    $(".yourshop").show();

    // Hiển thị nội dung video
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
  $(".upload").hide();

  $(".yourshop").click(function () {
    // Ẩn nội dung âm nhạc
    $(".upload").show();
  });
  $(".close-upload").click(function () {
    // Ẩn nội dung âm nhạc
    $(".upload").hide();
  });

  new Swiper(".swiper-digital", {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesPerView: "auto",
    spaceBetween: 10, // Khoảng cách giữa các slide
    breakpoints: {
      320: {
        slidesPerView: 1.2, // Hiển thị 2 slide
      },
      640: {
        slidesPerView: 2.2, // Hiển thị 2 slide
      },
    }, // Adjust spacing between slides
  });
});
