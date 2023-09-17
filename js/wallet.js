$(".modal-paypal").hide();
$(".modal-money").hide();

$(".close-modal").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-paypal").hide();
    $(".modal-money").hide();
  });
});

$(".btn-paypal").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-paypal").show();
  });
});
$(".btn-monney").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-money").show();
  });
});
