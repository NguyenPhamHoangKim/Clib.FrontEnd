function checkClickOutside(elementId, callback, openClass) {
  $(document).on("click", function (event) {
    const targetElement = event.target;
    const containerElement = $("#" + elementId);

    if (!openClass) {
      if (
        !containerElement.is(targetElement) &&
        !containerElement.has(targetElement).length
      ) {
        callback();
      }
    } else {
      const openClassElements = $("." + openClass);

      if (
        !containerElement.is(targetElement) &&
        !openClassElements.is(targetElement) &&
        !containerElement.has(targetElement).length &&
        !openClassElements.has(targetElement).length
      ) {
        callback();
      }
    }
  });
}
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
