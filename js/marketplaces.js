$(".modal-upload").hide();

$(".close-filter").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".filter-music").hide();
    $(".filter-video").hide();
  });
});

$(".btn-filter").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".filter-music").show();
    $(".filter-video").show();
  });
});

$(".close-upload").each(function () {
  $(this).click(function () {
    $(".modal-upload").hide();
  });
});
$(".btn-upload").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-upload").show();
  });
});

checkClickOutside(
  "modal-upload-inner",
  function () {
    $(".modal-upload").hide();
  },
  "btn-upload",
);
