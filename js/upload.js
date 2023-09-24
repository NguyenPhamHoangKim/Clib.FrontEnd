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
