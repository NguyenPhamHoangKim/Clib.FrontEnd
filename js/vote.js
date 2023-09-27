$("#artist, #composers").hide();
$("#trending").show();
$("a[href='#trending']").addClass("active-setting");

$("a[href='#trending']").click(function () {
  $("#trending").show();
  $("#artist, #composers").hide();
  $("a[href='#trending']").addClass("active-setting");
  $("a[href='#artist'], a[href='#composers']").removeClass("active-setting");
});

$("a[href='#artist']").click(function () {
  $("#artist").show();
  $("#trending, #composers").hide();
  $("a[href='#artist']").addClass("active-setting");
  $("a[href='#trending'], a[href='#composers']").removeClass("active-setting");
});

$("a[href='#composers']").click(function () {
  $("#composers").show();
  $("#trending, #artist").hide();
  $("a[href='#composers']").addClass("active-setting");
  $("a[href='#trending'], a[href='#artist']").removeClass("active-setting");
});

$(".open-modal-voting").each(function () {
  $(this).click(function () {
    $(".modal-voting").show();
  });
});
$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-voting").hide();
  });
});
