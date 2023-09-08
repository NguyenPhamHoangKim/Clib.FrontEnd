$(".profile-nav:not(.active)").each(function () {
  $(this).mouseenter(function () {
    const originalSrc = $(this).find("img").attr("src");
    const newSrc = originalSrc.replace(".svg", "-selected.svg");
    $(this).find("img").attr("src", newSrc);
  });
});

$(".profile-nav:not(.active)").mouseleave(function () {
  const originalSrc = $(this).find("img").attr("src");
  const newSrc = originalSrc.replace("-selected.svg", ".svg");
  $(this).find("img").attr("src", newSrc);
});

new Swiper(".song-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-song-next",
    prevEl: ".swiper-song-prev",
  },
  autoResize: false,
});

$(".edit-profile-group").each(function () {
  const editProfileGroup = $(this);
  editProfileGroup.find(".profile-edit-btn").click(function () {
    editProfileGroup.find(".save-edit-profile").addClass("show");
    editProfileGroup.find("input, textarea").removeAttr("disabled");
  });

  editProfileGroup.find(".close-save-edit-profile").click(function () {
    $(this).parent().parent().removeClass("show");
    editProfileGroup.find("input, textarea").attr("disabled", "disabled");
  });
});

$("#show-edit-modal").click(function () {
  $("#edit-profile--modal").addClass("show");
});

$("#edit-profile--modal").click(function () {
  $(this).removeClass("show");
});

$("#edit-profile--inner").click(function (e) {
  e.stopPropagation();
});

$(".gallery-img").each(function () {
  $(this).click(function () {
    $("#gallery-focus-image").toggleClass("show");
  });
});

$("#close-focus-img").click(function () {
  $("#gallery-focus-image").removeClass("show");
});

$(".comment-gallery-item").each(function () {
  const _this = $(this);

  _this.find(".show-reply-box").click(function () {
    $(".reply-cmt-box.show").removeClass("show");
    const replyBox = $(this)
      .closest(".cmt-box-right")
      .parent()
      .next(".reply-cmt-box");
    replyBox.addClass("show");
  });
});
