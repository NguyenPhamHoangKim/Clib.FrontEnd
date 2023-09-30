$(".modal-like").hide();
$(".modal-report").hide();

$(".btn-like").each(function () {
  $(this).click(function () {
    $(".modal-like").show();
  });
});

$(".btn-report").each(function () {
  $(this).click(function () {
    $(".modal-report").show();
  });
});

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-like").hide();
    $(".modal-report").hide();
  });
});

$(".show-liked-by-modal").each(function () {
  checkClickOutside(
    "liked-by-modal--inner",
    function () {
      $("#liked-by-modal").removeClass("!flex");
    },
    "show-liked-by-modal",
  );

  $(this).click(function () {
    $("#liked-by-modal").toggleClass("!flex");
  });
});

$("#liked-by-close").click(function () {
  $("#liked-by-modal").removeClass("!flex");
});

$(".show-reposted-by-modal").each(function () {
  checkClickOutside(
    "reposted-by-modal--inner",
    function () {
      $("#reposted-by-modal").removeClass("!flex");
    },
    "show-reposted-by-modal",
  );

  $(this).click(function () {
    $("#reposted-by-modal").toggleClass("!flex");
  });
});

$("#reposted-by-close").click(function () {
  $("#reposted-by-modal").removeClass("!flex");
});
