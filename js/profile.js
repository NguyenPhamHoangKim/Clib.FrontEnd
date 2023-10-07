if ($(".edit-profile-group")) {
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
}
if ($("#show-edit-modal")) {
  $("#show-edit-modal").click(function () {
    $("#edit-profile--modal").addClass("show");
  });
}

if ($("#edit-profile--modal")) {
  $("#edit-profile--modal").click(function () {
    $(this).removeClass("show");
  });
}

if ($("#edit-profile--inner")) {
  $("#edit-profile--inner").click(function (e) {
    e.stopPropagation();
  });
}
if ($(".gallery-img")) {
  $(".gallery-img").each(function () {
    $(this).click(function () {
      $("#gallery-focus-image").toggleClass("show");
    });
  });
}
if ($("#close-focus-img")) {
  $("#close-focus-img").click(function () {
    $("#gallery-focus-image").removeClass("show");
  });
}
if ($(".comment-gallery-item")) {
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
}

new Swiper(".goods-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-goods-next",
    prevEl: ".swiper-goods-prev",
  },
  autoResize: false,
});

new Swiper("#new-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-new-next",
    prevEl: ".swiper-new-prev",
  },
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 3.5,
    },
    680: {
      slidesPerView: 4.5,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 16,
    },
  },
});
new Swiper(".albums-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-albums-next",
    prevEl: ".swiper-albums-prev",
  },
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 3.5,
    },
    680: {
      slidesPerView: 4.5,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 16,
    },
  },
});

new Swiper(".playlists-mb-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 14,
    },
  },
});

new Swiper(".playlists-pc-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  autoResize: false,
  navigation: {
    nextEl: ".swiper-playlists-pc-next",
    prevEl: ".swiper-playlists-pc-prev",
  },
  breakpoints: {
    800: {
      slidesPerView: 1.2,
    },
    1320: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },
  },
});

new Swiper(".new-video-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-new-video-next",
    prevEl: ".swiper-new-video-prev",
  },
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 2.5,
    },
    680: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 16,
    },
  },
});

new Swiper(".digital-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-digital-next",
    prevEl: ".swiper-digital-prev",
  },
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 2.5,
    },
    680: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 5.5,
      spaceBetween: 16,
    },
  },
});

new Swiper(".playlist-video-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-playlist-video-next",
    prevEl: ".swiper-playlist-video-prev",
  },
  autoResize: false,
  breakpoints: {
    480: {
      slidesPerView: 2.5,
    },
    680: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 16,
    },
  },
});
