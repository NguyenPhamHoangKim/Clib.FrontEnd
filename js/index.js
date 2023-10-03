function checkClickOutside(elementId, callback, openClass) {
  $(document).on("click", function (event) {
    const targetElement = event.target;
    const containerElement = $("#" + elementId);

    if (!openClass) {
      if (
        !containerElement.is(targetElement) &&
        !containerElement.has(targetElement).length
      ) {
        callback();
      }
    } else {
      const openClassElements = $("." + openClass);

      if (
        !containerElement.is(targetElement) &&
        !openClassElements.is(targetElement) &&
        !containerElement.has(targetElement).length &&
        !openClassElements.has(targetElement).length
      ) {
        callback();
      }
    }
  });
}

$("#toggle-mobile-menu").click(function () {
  $("#header-tab-modal").addClass("active");
});

$("#close-header-tab-modal").click(function () {
  $("#header-tab-modal").removeClass("active");
});

const handleToggleNoti = function () {
  const $elem = $("#noti-wrapper .noti-icon");
  $("#noti-popup").toggleClass("active");

  $elem.attr(
    "src",
    $elem.attr("src") === "/assets/svgs/notification-selected.svg"
      ? "/assets/svgs/notification-pc.svg"
      : "/assets/svgs/notification-selected.svg",
  );
};

const handleCloseNoti = function () {
  $("#noti-popup").removeClass("active");
  $("#noti-wrapper .noti-icon").attr("src", "/assets/svgs/notification-pc.svg");
};

const handleToggleMs = function () {
  const $elem = $("#ms-wrapper .ms-icon");
  $("#ms-popup").toggleClass("active");

  $elem.attr(
    "src",
    $elem.attr("src") === "/assets/svgs/messenger-selected.svg"
      ? "/assets/svgs/messenger-pc.svg"
      : "/assets/svgs/messenger-selected.svg",
  );
};

const handleCloseMs = function () {
  $("#ms-popup").removeClass("active");
  $("#ms-wrapper .ms-icon").attr("src", "/assets/svgs/messenger-pc.svg");
};

$("#toggle-notification").click(function () {
  handleToggleNoti();
});
checkClickOutside("noti-wrapper", function () {
  handleCloseNoti();
});

$("#toggle-ms").click(function () {
  handleToggleMs();
});
checkClickOutside("ms-wrapper", function () {
  handleCloseMs();
});

$(".add-playlist-btn").each(function (idx) {
  $(this).click(function () {
    $(".add-playlist-btn.active").removeClass("active");
    $(".add-playlist-show.active").removeClass("active");
    $(".add-playlist-show").eq(idx).addClass("active");
    $(this).addClass("active");

    if (idx === 1) {
      $(".create-playlist-btm").addClass("active");
    } else {
      $(".create-playlist-btm").removeClass("active");
    }
  });
});

$(".show-create-playlist-popup").each(function () {
  $(this).click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(".add-playlist-modal").addClass("active");
  });
});

$("#close-add-playlist-modal").click(function () {
  $(".add-playlist-modal").removeClass("active");
});
$(".hot-item-play").each(function () {
  $(this).click(function (event) {
    event.preventDefault();
    event.stopPropagation();
  });
});

const musicPlayer = $("#music-player");

const handleShowMusicPlayer = function () {
  musicPlayer.addClass("show");
};
const handleCloseMusicPlayer = function () {
  musicPlayer.removeClass("show");
};

const handleShowMusicPlayerLarge = function () {
  $("#music-player-large").addClass("show");
};
const handleCloseMusicPlayerLarge = function () {
  $("#music-player-large").removeClass("show");
};

$(".mini-player").each(function () {
  $(this).click(function () {
    if ($(this).hasClass("large")) {
      handleCloseMusicPlayerLarge();
    }
    handleShowMusicPlayer();
    musicPlayer.removeClass("med max").addClass("min");
  });
});

$(".medium-player").each(function () {
  $(this).click(function () {
    if ($(this).hasClass("large")) {
      handleCloseMusicPlayerLarge();
    }
    handleShowMusicPlayer();
    musicPlayer.removeClass("min max").addClass("med");
  });
});

$(".open-music-player").each(function () {
  $(this).click(function () {
    handleShowMusicPlayer();
  });
});

$(".open-large-player").each(function () {
  $(this).click(function () {
    if ($(this).hasClass("large")) {
      handleShowMusicPlayer();
    } else {
      handleCloseMusicPlayer();
    }
    handleShowMusicPlayerLarge();
  });
});

$(".open-large-player").each(function () {
  $(this).click(function () {
    if ($(this).hasClass("large")) {
      handleShowMusicPlayer();
    } else {
      handleCloseMusicPlayer();
    }
    handleShowMusicPlayerLarge();
  });
});

checkClickOutside(
  "music-player-large--inner",
  function () {
    handleCloseMusicPlayerLarge();
  },
  "open-large-player",
);

$(".close-modal").each(function () {
  $(this).click(function () {
    $(".modal-video").hide();
    $(".modal-video-full").hide();
  });
});

$(".btn-open-video").each(function () {
  $(this).click(function () {
    $(".modal-video").show();
  });
});

$(".btn-modal-video-full").each(function () {
  $(this).click(function () {
    $(".modal-video").hide();
    $(".modal-video-full").show();
  });
});

const closeVideo = function () {
  $(".modal-video-full").hide();
};

checkClickOutside(
  "modal-inner",
  function () {
    closeVideo();
  },
  "btn-modal-video-full",
);
