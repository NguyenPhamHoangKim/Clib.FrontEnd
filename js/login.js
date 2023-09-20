$("#toggle-password").click(() => {
  $("#password").attr(
    "type",
    $("#password").attr("type") == "password" ? "text" : "password",
  );
});

$("#email").blur(function () {
  const email = $(this).val();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    $("#email-error").text("Invalid email address");
    $("#email").addClass("error");
  } else {
    $("#email-error").text("");
    $("#email").removeClass("error");
  }
});

$("#password").blur(function () {
  const password = $(this).val();
  if (password === "") {
    $("#password-error").text("Password is required");
    $("#password").addClass("error");
  } else {
    $("#password-error").text("");
    $("#password").removeClass("error");
  }
});

$(".modal-delete").hide();
$(".modal-privacy").hide();
$(".modal-advertising").hide();

$("#open-modal").click(function () {
  $(".modal-delete").show();
});

$(".open-privacy").click(function () {
  $(".modal-privacy").show();
});
$(".open-advertising").click(function () {
  $(".modal-advertising").show();
});

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-delete").hide();
    $(".modal-privacy").hide();
    $(".modal-advertising").hide();
  });
});

$(".toggleDiv").click(function () {
  $(this).next(".hiddenText").slideToggle("fast"); // Sử dụng slideToggle để làm cho hiệu ứng mượt hơn
});
