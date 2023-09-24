$(".modal-create").hide();
$(".modal-playlist").hide();
$(".modal-more").hide();

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-create").hide();
    $(".modal-playlist").hide();
    $(".modal-more").hide();
  });
});

$(".create-chat").each(function () {
  $(this).click(function () {
    $(".modal-create").show();
  });
});

$(".btn-playlist").each(function () {
  $(this).click(function () {
    $(".modal-playlist").show();
  });
});

$(".btn-more").each(function () {
  $(this).click(function () {
    $(".modal-more").show();
  });
});
