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

checkClickOutside(
  "modal-upload-inner",
  function () {
    $(".modal-upload-music").hide();
  },
  "upload-music",
);

$(".btn-upload-video").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-upload-video").show();
  });
});

checkClickOutside(
  "modal-upload-video-inner",
  function () {
    $(".modal-upload-video").hide();
  },
  "btn-upload-video",
);

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
