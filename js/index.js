function checkClickOutside(elementId, callback) {
  $(document).on("click", function (event) {
    const targetElement = event.target;
    const containerElement = $("#" + elementId);
    if (containerElement.has(targetElement).length === 0) {
      callback();
    }
  });
}

$("#toggle-mobile-menu").click(function () {
  $("#header-tab-modal").addClass("active");
});

$("#close-header-tab-modal").click(function () {
  $("#header-tab-modal").removeClass("active");
});

const handleToggleNoti = function () {
  const $elem = $("#noti-wrapper .noti-icon");
  $("#noti-popup").toggleClass("active");

  $elem.attr(
    "src",
    $elem.attr("src") === "/assets/svgs/notification-selected.svg"
      ? "/assets/svgs/notification-pc.svg"
      : "/assets/svgs/notification-selected.svg",
  );
};

const handleCloseNoti = function () {
  $("#noti-popup").removeClass("active");
  $("#noti-wrapper .noti-icon").attr("src", "/assets/svgs/notification-pc.svg");
};

$("#toggle-notification").click(function () {
  handleToggleNoti();
});

checkClickOutside("noti-wrapper", function () {
  handleCloseNoti();
});
