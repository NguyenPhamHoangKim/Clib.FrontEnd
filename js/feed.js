$(".modal-like").hide();
$(".modal-report").hide();

$(".btn-like").each(function () {
  $(this).click(function () {
    $(".modal-like").show();
  });
});

$(".btn-report").each(function () {
  $(this).click(function () {
    $(".modal-report").show();
  });
});

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-like").hide();
    $(".modal-report").hide();
  });
});
