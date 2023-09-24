$(document).ready(function () {
  // Bắt sự kiện click trên tất cả các phần tử có lớp toggle
  $(".toggle").click(function () {
    // Tìm phần tử hiddenText cùng cặp và toggle hiển thị
    $(this).next(".hidden-text").toggle();
  });
});
