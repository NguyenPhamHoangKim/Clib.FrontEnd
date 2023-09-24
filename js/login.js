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
$(".modal-filter").hide();

$("#open-modal").click(function () {
  $(".modal-delete").show();
});
$("#open-modal").click(function () {
  $(".modal-filter").hide();
});

$(".open-privacy").click(function () {
  $(".modal-privacy").show();
});

$(".open-modal-filter").click(function () {
  $(".modal-filter").show();
});
$(".open-advertising").click(function () {
  $(".modal-advertising").show();
});
$(".close-modal-filter").click(function () {
  $(".modal-filter").hide();
});

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-delete").hide();
    $(".modal-privacy").hide();
    $(".modal-advertising").hide();
  });
});

let currentPathname = window.location.pathname;

$(".link").each(function () {
  let linkPathname = this.pathname;
  if (currentPathname === linkPathname) {
    $(this).addClass("active-setting");
  }
});

$(".toggleDiv").click(function (event) {
  // Kiểm tra nếu người dùng nhấp vào label chứa checkbox thì không thay đổi
  if ($(event.target).is("label")) {
    return;
  }

  // Tìm phần hiddenText trong toggleDiv
  const hiddenText = $(this).next(".hiddenText");

  // Hiển thị hoặc ẩn hiddenText
  hiddenText.slideToggle();
});
