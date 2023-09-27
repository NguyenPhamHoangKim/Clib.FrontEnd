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
