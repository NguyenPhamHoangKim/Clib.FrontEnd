$(".open-modal-add").each(function () {
  $(this).click(function () {
    $(".modal-add").show();
  });
});

checkClickOutside(
  "modal-add-inner",
  function () {
    $(".modal-add").hide();
  },
  "open-modal-add",
);

checkClickOutside(
  "modal-add-video-inner",
  function () {
    $(".modal-add").hide();
  },
  "open-modal-add",
);

$(".open-modal-delete").each(function () {
  $(this).click(function () {
    $(".modal-delete").show();
  });
});

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-add").hide();
    $(".modal-create").hide();
    $(".modal-delete").hide();
    $(".artworkModal").hide();
    $(".modal-per").hide();
  });
});

$(".create-btn").click(function () {
  $(".modal-add").hide();
  $(".modal-create").show();
});

checkClickOutside(
  "modal-create-inner",
  function () {
    $(".modal-create").hide();
  },
  "create-btn",
);

$(".btn-add").click(function () {
  $(".modal-create").hide();
  $(".modal-add").show();
});

let $dropdown = $(".dropdown");
let $modal = $(".artworkModal");

$dropdown.change(function () {
  let selectedOption = $dropdown.val();

  if (selectedOption === "Artwork") {
    $modal.show(); // Hiển thị modal nếu tùy chọn là "Artwork"
  } else {
    $modal.hide(); // Ẩn modal nếu tùy chọn khác
  }
  if (selectedOption === "Permissions") {
    $(".modal-per").show();
  } else {
    $(".modal-per").hide();
  }
});

$("#show-modal-edit-mb").click(function () {
  $("#modal-edit-mb").addClass("flex");
  $("#modal-edit-mb").removeClass("hidden");
});

$("#close-modal-edit-mb").click(function () {
  $("#modal-edit-mb").removeClass("flex");
  $("#modal-edit-mb").addClass("hidden");
});

checkClickOutside(
  "edit-modal-mb-inner",
  function () {
    $("#modal-edit-mb").removeClass("flex");
    $("#modal-edit-mb").addClass("hidden");
  },
  "show-modal-edit-mb",
);

$("#show-modal-add-mb").click(function () {
  $("#modal-add-mb").addClass("flex");
  $("#modal-add-mb").removeClass("hidden");
});

$("#close-modal-add-mb").click(function () {
  $("#modal-add-mb").removeClass("flex");
  $("#modal-add-mb").addClass("hidden");
});

checkClickOutside(
  "modal-add-mb--inner",
  function () {
    $("#modal-add-mb").removeClass("flex");
    $("#modal-add-mb").addClass("hidden");
  },
  "show-modal-add-mb",
);
