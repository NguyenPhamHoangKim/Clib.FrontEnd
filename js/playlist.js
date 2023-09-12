$("#toggle-edit-detail").click(function () {
  $("#edit-detail-modal").addClass("show");
});

$("#close-detail-modal").click(function () {
  $("#edit-detail-modal").removeClass("show");
});

$("#edit-detail-modal--inner").click(function (e) {
  e.stopPropagation();
});

checkClickOutside(
  "edit-detail-modal--inner",
  function () {
    $("#edit-detail-modal").removeClass("show");
  },
  "toggle-edit-detail",
);
