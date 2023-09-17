$(document).ready(function () {
  $(".btn-upload").click(function () {
    // Remove the "active-upload" class from all buttons
    $(".active-upload").removeClass("active-upload");

    // Add the "active-upload" class to the clicked button
    $(this).addClass("active-upload");
  });
  //   $(".modal-upload-music").hide();
  $(".modal-upload-music").hide();
  $(".modal-upload-video").hide();
  //   $(".modal-upload-yourshop").hide();

  $(".upload-music").each(function () {
    $(this).click(function () {
      // Ẩn nội dung âm nhạc
      $(".modal-upload-music").show();
    });
  });
  $(".btn-upload-video").each(function () {
    $(this).click(function () {
      // Ẩn nội dung âm nhạc
      $(".modal-upload-video").show();
    });
  });
  $(".btn-upload-yourshop").each(function () {
    $(this).click(function () {
      // Ẩn nội dung âm nhạc
      $(".modal-upload-yourshop").show();
    });
  });

  $(".close-modal").each(function () {
    $(this).click(function () {
      // Ẩn nội dung âm nhạc
      $(".modal-upload-music").hide();
      $(".modal-upload-video").hide();
      $(".modal-upload-yourshop").hide();
    });
  });
});
