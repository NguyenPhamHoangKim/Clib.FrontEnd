$(".open-modal-add").each(function () {
  $(this).click(function () {
    $(".modal-add").show();
  });
});

$(".open-modal-delete").each(function () {
  $(this).click(function () {
    $(".modal-delete").show();
  });
});

$(".create-btn").each(function () {
  $(this).click(function () {
    $(".modal-add").hide();
    $(".modal-create").show();
  });
});

$(".btn-add").click(function () {
  $(".modal-create").hide();
  $(".modal-add").show();
});
checkClickOutside(
  "modal-create-inner",
  function () {
    $(".modal-create").hide();
  },
  "create-btn",
);

const $dropdown = $(".dropdown");
const $modal = $(".artworkModal");
const $privacyModal = $(".modal-privacy");
let selectedOption = "";

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-add").hide();
    $(".modal-create").hide();
    $(".modal-delete").hide();
    $(".artworkModal").hide();
    $(".modal-privacy").hide();
    $(".modal-per").hide();
  });
});

$dropdown.change(function () {
  selectedOption = $(this).val();

  if (selectedOption === "Artwork") {
    $modal.show();
  } else {
    $modal.hide();
  }

  if (selectedOption === "Privacy and tag") {
    $privacyModal.show();
  } else {
    $privacyModal.hide();
  }

  if (selectedOption === "Permissions") {
    $(".modal-per").show();
  } else {
    $(".modal-per").hide();
  }
  $(this).prop("selectedIndex", 0);
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

$("#show-modal-privacy-mb").click(function () {
  $("#modal-privacy-mb").addClass("flex");
  $("#modal-privacy-mb").removeClass("hidden");

  $("#modal-edit-mb").removeClass("flex");
  $("#modal-edit-mb").addClass("hidden");
});

$(".close-modal-privacy-mb").each(function () {
  $(this).click(function () {
    $("#modal-privacy-mb").removeClass("flex");
    $("#modal-privacy-mb").addClass("hidden");
  });
});

$("#show-modal-artwork-mb").click(function () {
  $("#modal-artwork-mb").addClass("flex");
  $("#modal-artwork-mb").removeClass("hidden");

  $("#modal-edit-mb").removeClass("flex");
  $("#modal-edit-mb").addClass("hidden");
});

$(".close-modal-artwork-mb").each(function () {
  $(this).click(function () {
    $("#modal-artwork-mb").removeClass("flex");
    $("#modal-artwork-mb").addClass("hidden");
  });
});

$("#show-modal-permissions-mb").click(function () {
  $("#modal-permissions-mb").addClass("flex");
  $("#modal-permissions-mb").removeClass("hidden");

  $("#modal-edit-mb").removeClass("flex");
  $("#modal-edit-mb").addClass("hidden");
});

$(".close-modal-permissions-mb").each(function () {
  $(this).click(function () {
    $("#modal-permissions-mb").removeClass("flex");
    $("#modal-permissions-mb").addClass("hidden");
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

checkClickOutside(
  "modal-privacy-mb--inner",
  function () {
    $("#modal-privacy-mb").removeClass("flex");
    $("#modal-privacy-mb").addClass("hidden");
  },
  "show-modal-privacy-mb",
);

checkClickOutside(
  "modal-artwork-mb--inner",
  function () {
    $("#modal-artwork-mb").removeClass("flex");
    $("#modal-artwork-mb").addClass("hidden");
  },
  "show-modal-artwork-mb",
);

checkClickOutside(
  "modal-permissions-mb--inner",
  function () {
    $("#modal-permissions-mb").removeClass("flex");
    $("#modal-permissions-mb").addClass("hidden");
  },
  "show-modal-permissions-mb",
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
//   "modal-add-video-inner",
//   function () {
//     $(".modal-add").hide();
//   },
//   "open-modal-add",
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
