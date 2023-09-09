function checkClickOutside(elementId, callback) {
  $(document).on("click", function (event) {
    const targetElement = event.target;
    const containerElement = $("#" + elementId);
    if (containerElement.has(targetElement).length === 0) {
      callback();
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
  $(this).click(function () {
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
    console.log("Clicked on hot-item-play");
  });
});

$("#mini-player").click(function () {
  var musicPlayer = $("#music-player");
  if (musicPlayer.hasClass("med") || musicPlayer.hasClass("max")) {
    musicPlayer.removeClass("med max").addClass("min");
  }
});

$("#medium-player").click(function () {
  var musicPlayer = $("#music-player");
  if (musicPlayer.hasClass("min") || musicPlayer.hasClass("max")) {
    musicPlayer.removeClass("min max").addClass("med");
  }
});

$("#max-player").click(function () {
  var musicPlayer = $("#music-player");
  if (musicPlayer.hasClass("min") || musicPlayer.hasClass("med")) {
    musicPlayer.removeClass("min med").addClass("max");
  }
});
