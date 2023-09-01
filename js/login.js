$("#toggle-password").click(() => {
  $("#password").attr(
    "type",
    $("#password").attr("type") == "password" ? "text" : "password",
  );
});
