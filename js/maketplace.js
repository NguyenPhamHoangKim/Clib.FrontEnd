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
    // Show the video section and hide the music section
    $(".filter-music").show();
  });
  $(".close-filter").click(function () {
    // Show the video section and hide the music section
    $(".filter-music").hide();
    $(".filter-product").hide();
  });
});
