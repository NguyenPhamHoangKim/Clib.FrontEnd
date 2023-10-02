$(".modal-paypal").hide();
$(".modal-money").hide();

$(".close-modal").each(function () {
  $(this).click(function () {
    // Ẩn nội dung âm nhạc
    $(".modal-paypal").hide();
    $(".modal-money").hide();
  });
});
$(".overlay").each(function () {
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

checkClickOutside(
  "modal-paypal",
  function () {
    $(".modal-paypal").hide();
  },
  "btn-paypal",
);

checkClickOutside(
  "modal-money",
  function () {
    $(".modal-money").hide();
  },
  "btn-monney",
);
