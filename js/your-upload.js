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
$("#close-modal-create-mb").click(function () {
  $("#modal-create-mb").removeClass("flex");
  $("#modal-create-mb").addClass("hidden");
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

$("#show-modal-create").click(function () {
  $("#modal-add-mb").removeClass("flex");
  $("#modal-add-mb").addClass("hidden");

  $("#modal-create-mb").addClass("flex");
  $("#modal-create-mb").removeClass("hidden");
});

$("#change-to-modal-create").click(function () {
  $("#modal-add-mb").removeClass("hidden");
  $("#modal-add-mb").addClass("flex");

  $("#modal-create-mb").addClass("hidden");
  $("#modal-create-mb").removeClass("flex");
});

$("#change-to-modal-add").click(function () {
  $("#modal-add-mb").addClass("flex");
  $("#modal-add-mb").removeClass("hidden");

  $("#modal-create-mb").removeClass("flex");
  $("#modal-create-mb").addClass("hidden");
});

$("#show-modal-delete-mb").click(function () {
  $("#modal-delete-mb").addClass("flex");
  $("#modal-delete-mb").removeClass("hidden");
});

$(".close-modal-delete-mb").each(function () {
  $(this).click(function () {
    $("#modal-delete-mb").removeClass("flex");
    $("#modal-delete-mb").addClass("hidden");
  });
});

checkClickOutside(
  "modal-delete-mb--inner",
  function () {
    $("#modal-delete-mb").removeClass("flex");
    $("#modal-delete-mb").addClass("hidden");
  },
  "show-modal-delete-mb",
);

// checkClickOutside(
//   "modal-create-mb--inner",
//   function () {
//     $("#modal-create-mb").removeClass("flex");
//     $("#modal-create-mb").addClass("hidden");
//   },
//   "show-modal-create-mb",
// );
// checkClickOutside(
//   "modal-add-mb--inner",
//   function () {
//     console.log(3);

//     $("#modal-add-mb").removeClass("flex");
//     $("#modal-add-mb").addClass("hidden");
//   },
//   "show-modal-add-mb",
// );
