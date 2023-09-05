$("#toggle-mobile-menu").click(function () {
  $("#header-tab-modal").addClass("active");
});

$("#close-header-tab-modal").click(function () {
  $("#header-tab-modal").removeClass("active");
});

$("#toggle-notification").click(function () {
  $(this)
    .find(".noti-icon")
    .attr(
      "src",
      $(this).find("img").attr("src") ===
        "/assets/svgs/notification-selected.svg"
        ? "/assets/svgs/notification-pc.svg"
        : "/assets/svgs/notification-selected.svg",
    );
  $("#noti-popup").toggleClass("active");
});
