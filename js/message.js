$(document).ready(function () {
  // Bắt sự kiện khi input được nhấn
  $("#search-people").click(function () {
    // Hiển thị modal
    $("#modal").show();
  });
  $("#close-modal").click(function () {
    //tắt modal
    $("#modal").hide();
  });
  $(".create-chat").click(function () {
    // Hiển thị modal
    $(".modal-create").show();
  });
  $(".close-create-chat").click(function () {
    //tắt modal
    $(".modal-create").hide();
  });

  $(".playlist").click(function () {
    // Hiển thị modal
    $(".modal-playlist").show();
  });
  $(".close-modal-playlist").click(function () {
    //tắt modal
    $(".modal-playlist").hide();
  });

  $(".new-message").click(function () {
    // Hiển thị modal
    $(".list-people").show();
  });
  $(".close-modal-playlist").click(function () {
    //tắt modal
    $(".modal-playlist").hide();
  });

  $(".more").click(function () {
    // Hiển thị modal
    $(".modal-more").show();
  });
  $(".x").click(function () {
    //tắt modal
    $(".modal-more").hide();
  });

  $(".people").each(function () {
    $(this).click(function () {
      // Đảm bảo bạn có phần tử ".chat" và ".list-people" tương ứng
      $(".chat").show();
      $(".list-people").hide();
      $(".modal-content").hide();

      // Hiển thị ".chat" và ẩn ".list-people" tương ứng
    });
  });

  // Khi nội dung của container đã tải xong
  $(".overflow-y-auto").on("scroll", function () {
    // Kiểm tra nếu chiều cao thực tế của container lớn hơn chiều cao tối đa
    if ($(this)[0].scrollHeight > $(this).innerHeight()) {
      // Kích hoạt cuộn dọc
      $(this).addClass("overflow-y-scroll");
    } else {
      // Ngược lại, không cần cuộn
      $(this).removeClass("overflow-y-scroll");
    }
  });

  $(".person").on("click", function () {
    // Hide the modal content
    $("#modal-content").hide();

    // Get the person's name and chat HTML
    let personName = $(this).find(".text-lg").text();
    let chatHTML = `
    <div id="chat-container" class="w-full h-full relative">
    <div
      class="flex items-center gap-2 w-full person lg:cursor-pointer p-4"
    >
      <img src="./assets/images/st.png" alt="" />
      <div class="flex items-center justify-between w-full">
        <div>
          <span
            class="text-lg font-semibold text-[#2C2F33] flex items-center gap-1 lg:text-xl whitespace-nowrap overflow-ellipsis max-w-[200px]"
            >${personName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.9667 8.94948L16.8334 7.63281C16.6167 7.38281 16.4417 6.91615 16.4417 6.58281V5.16615C16.4417 4.28281 15.7167 3.55781 14.8334 3.55781H13.4167C13.0917 3.55781 12.6167 3.38281 12.3667 3.16615L11.0501 2.03281C10.4751 1.54115 9.5334 1.54115 8.95007 2.03281L7.64173 3.17448C7.39173 3.38281 6.91673 3.55781 6.59173 3.55781H5.15006C4.26673 3.55781 3.54173 4.28281 3.54173 5.16615V6.59115C3.54173 6.91615 3.36673 7.38281 3.1584 7.63281L2.0334 8.95781C1.55007 9.53281 1.55007 10.4661 2.0334 11.0411L3.1584 12.3661C3.36673 12.6161 3.54173 13.0828 3.54173 13.4078V14.8328C3.54173 15.7161 4.26673 16.4411 5.15006 16.4411H6.59173C6.91673 16.4411 7.39173 16.6161 7.64173 16.8328L8.9584 17.9661C9.5334 18.4578 10.4751 18.4578 11.0584 17.9661L12.3751 16.8328C12.6251 16.6161 13.0917 16.4411 13.4251 16.4411H14.8417C15.7251 16.4411 16.4501 15.7161 16.4501 14.8328V13.4161C16.4501 13.0911 16.6251 12.6161 16.8417 12.3661L17.9751 11.0495C18.4584 10.4745 18.4584 9.52448 17.9667 8.94948ZM13.4667 8.42448L9.44173 12.4495C9.32507 12.5661 9.16673 12.6328 9.00007 12.6328C8.8334 12.6328 8.67507 12.5661 8.5584 12.4495L6.54173 10.4328C6.30007 10.1911 6.30007 9.79115 6.54173 9.54948C6.7834 9.30781 7.1834 9.30781 7.42507 9.54948L9.00007 11.1245L12.5834 7.54115C12.8251 7.29948 13.2251 7.29948 13.4667 7.54115C13.7084 7.78281 13.7084 8.18281 13.4667 8.42448Z"
                fill="#1A75FF"
              />
            </svg>
          </span>
        </div>
        <div>
          <img src="./assets/svgs/more.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="h-full w-full bg-[#f7f7f7] flex flex-col">
      <div class="px-4">
        <div class="flex items-start flex-col gap-1">
          <div class="flex items-end gap-3">
            <img src="./assets/images/st.png" alt="" />
            <div class="whitespace-normal w-full max-w-[440px]">
              <p
                class="bg-[#ebeef0] px-4 py-2 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[0] text-base text-[#52616B]"
              >
                má thằng đó tao yêu nó lắm mà nó cắm sừng tao mày ơi dm
                nghiệp quật nó cho nó chừa đi,chứ tao buồn quá
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-end justify-evenly flex-col gap-1 mt-1">
          <div class="flex items-center flex-row-reverse gap-3">
            <div class="whitespace-normal w-full max-w-[440px]">
              <p
                class="bg-[#0abfac] px-4 py-2 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[0] text-base text-[#ffffff]"
              >
                Wow you so beautiful
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-start w-full flex-col gap-1">
          <div class="flex items-end gap-3">
            <img src="./assets/images/st.png" alt="" />
            <div class="whitespace-normal w-full max-w-[440px]">
              <p
                class="bg-[#ebeef0] px-4 py-2 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[0] text-base text-[#52616B]"
              >
                Hello
              </p>
            </div>
          </div>
        </div>
        <div class="w-full flex items-end flex-col gap-1 my-1">
          <div class="flex w-full max-w-[560px] bg-[#ffffff] gap-4 p-4 rounded-xl ">
            <img
              class="w-[220px] h"
              src="./assets/images/Rectangle 90.png"
              alt=""
            />
            <div class="w-full">
              <div class="max-w-[350px] flex items-center justify-between">
                <h6 class="text-base lg:text-xl font-semibold">
                  Chill with me
                </h6>
                <div class="flex items-center gap-2">
                  <img
                    src="./assets/images/heart.png"
                    alt=""
                    id="heart"
                  />
                  <img src="./assets/svgs/more.svg" alt="" />
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <img src="./assets/images/music.png" alt="" />
                  <p>18 songs</p>
                </div>
                <div class="flex items-center gap-1">
                  <img src="./assets/images/heart (1).png" alt="" />
                  <p>200 liked</p>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3 font-semibold p-2">
                    <p class="">1</p>
                    <div>
                      <p>Out of my mine</p>
                      <span class="text-sm font-normal text-[#52616B]"
                        >Robbie Williams</span
                      >
                    </div>
                  </div>
                  <div>02:00</div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3 font-semibold p-2">
                    <p class="">2</p>
                    <div>
                      <p>Out of my mine</p>
                      <span class="text-sm font-normal text-[#52616B]"
                        >Robbie Williams</span
                      >
                    </div>
                  </div>
                  <div>02:00</div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3 font-semibold p-2">
                    <p class="">3</p>
                    <div>
                      <p>Out of my mine</p>
                      <span class="text-sm font-normal text-[#52616B]"
                        >Robbie Williams</span
                      >
                    </div>
                  </div>
                  <div>02:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full flex items-center justify-between bg-[#fff] border-t p-1"
      >
        <div
          class="flex items-center gap-2 w-full person lg:cursor-pointer"
        >
          <img src="./assets/images/Rectangle 11 (1).png" alt="" />
          <div class="flex flex-col gap-1 pr-3">
            <span
              class="text-lg font-semibold text-[#2C2F33] flex items-center gap-1 lg:text-xl whitespace-nowrap overflow-ellipsis max-w-[200px]"
              >K-ICM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9667 8.94948L16.8334 7.63281C16.6167 7.38281 16.4417 6.91615 16.4417 6.58281V5.16615C16.4417 4.28281 15.7167 3.55781 14.8334 3.55781H13.4167C13.0917 3.55781 12.6167 3.38281 12.3667 3.16615L11.0501 2.03281C10.4751 1.54115 9.5334 1.54115 8.95007 2.03281L7.64173 3.17448C7.39173 3.38281 6.91673 3.55781 6.59173 3.55781H5.15006C4.26673 3.55781 3.54173 4.28281 3.54173 5.16615V6.59115C3.54173 6.91615 3.36673 7.38281 3.1584 7.63281L2.0334 8.95781C1.55007 9.53281 1.55007 10.4661 2.0334 11.0411L3.1584 12.3661C3.36673 12.6161 3.54173 13.0828 3.54173 13.4078V14.8328C3.54173 15.7161 4.26673 16.4411 5.15006 16.4411H6.59173C6.91673 16.4411 7.39173 16.6161 7.64173 16.8328L8.9584 17.9661C9.5334 18.4578 10.4751 18.4578 11.0584 17.9661L12.3751 16.8328C12.6251 16.6161 13.0917 16.4411 13.4251 16.4411H14.8417C15.7251 16.4411 16.4501 15.7161 16.4501 14.8328V13.4161C16.4501 13.0911 16.6251 12.6161 16.8417 12.3661L17.9751 11.0495C18.4584 10.4745 18.4584 9.52448 17.9667 8.94948ZM13.4667 8.42448L9.44173 12.4495C9.32507 12.5661 9.16673 12.6328 9.00007 12.6328C8.8334 12.6328 8.67507 12.5661 8.5584 12.4495L6.54173 10.4328C6.30007 10.1911 6.30007 9.79115 6.54173 9.54948C6.7834 9.30781 7.1834 9.30781 7.42507 9.54948L9.00007 11.1245L12.5834 7.54115C12.8251 7.29948 13.2251 7.29948 13.4667 7.54115C13.7084 7.78281 13.7084 8.18281 13.4667 8.42448Z"
                  fill="#1A75FF"
                />
              </svg>
            </span>
            <span class="text-sm text-[#52616B]">Send playlist</span>
          </div>
        </div>
        <div class="mr-3">
          <img src="./assets/svgs/close.svg" alt="" />
        </div>
      </div>
      <div
        class="w-full flex items-center justify-between bg-[#fff] border-t p-1"
      >
        <div
          class="flex items-center gap-2 w-full person lg:cursor-pointer"
        >
          <img src="./assets/images/Rectangle 11 (1).png" alt="" />
          <div class="flex flex-col gap-1 pr-3">
            <span
              class="text-lg font-semibold text-[#2C2F33] flex items-center gap-1 lg:text-xl whitespace-nowrap overflow-ellipsis max-w-[200px]"
              >K-ICM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9667 8.94948L16.8334 7.63281C16.6167 7.38281 16.4417 6.91615 16.4417 6.58281V5.16615C16.4417 4.28281 15.7167 3.55781 14.8334 3.55781H13.4167C13.0917 3.55781 12.6167 3.38281 12.3667 3.16615L11.0501 2.03281C10.4751 1.54115 9.5334 1.54115 8.95007 2.03281L7.64173 3.17448C7.39173 3.38281 6.91673 3.55781 6.59173 3.55781H5.15006C4.26673 3.55781 3.54173 4.28281 3.54173 5.16615V6.59115C3.54173 6.91615 3.36673 7.38281 3.1584 7.63281L2.0334 8.95781C1.55007 9.53281 1.55007 10.4661 2.0334 11.0411L3.1584 12.3661C3.36673 12.6161 3.54173 13.0828 3.54173 13.4078V14.8328C3.54173 15.7161 4.26673 16.4411 5.15006 16.4411H6.59173C6.91673 16.4411 7.39173 16.6161 7.64173 16.8328L8.9584 17.9661C9.5334 18.4578 10.4751 18.4578 11.0584 17.9661L12.3751 16.8328C12.6251 16.6161 13.0917 16.4411 13.4251 16.4411H14.8417C15.7251 16.4411 16.4501 15.7161 16.4501 14.8328V13.4161C16.4501 13.0911 16.6251 12.6161 16.8417 12.3661L17.9751 11.0495C18.4584 10.4745 18.4584 9.52448 17.9667 8.94948ZM13.4667 8.42448L9.44173 12.4495C9.32507 12.5661 9.16673 12.6328 9.00007 12.6328C8.8334 12.6328 8.67507 12.5661 8.5584 12.4495L6.54173 10.4328C6.30007 10.1911 6.30007 9.79115 6.54173 9.54948C6.7834 9.30781 7.1834 9.30781 7.42507 9.54948L9.00007 11.1245L12.5834 7.54115C12.8251 7.29948 13.2251 7.29948 13.4667 7.54115C13.7084 7.78281 13.7084 8.18281 13.4667 8.42448Z"
                  fill="#1A75FF"
                />
              </svg>
            </span>
            <span class="text-sm text-[#52616B]">Send playlist</span>
          </div>
        </div>
        <div class="mr-3">
          <img src="./assets/svgs/close.svg" alt="" />
        </div>
      </div>

      <div
        class="w-full py-4 bg-[#ffffff] flex items-center justify-between gap-4 absolute bottom-0 left-0 p-4 border-t"
      >
        <div class="flex items-center gap-4 w-full">
          <div id="playlist" class="relative">
            <img src="./assets/svgs/music.svg" alt="" />
            <span
              class="absolute top-[-20px] right-[-15px] flex justify-center items-center w-6 h-6 rounded-[50%] bg-[#ebeef0]"
              >2</span
            >
          </div>
          <img src="./assets/svgs/gallery.png" alt="" />
          <input
            type="text"
            placeholder="Write something..."
            class="rounded-xl w-full py-3 px-4 bg-[#f7f7f7] border-none outline-none"
          />
        </div>

        <div class="h-10 w-10">
          <img
            src="./assets/svgs/send.svg"
            class="cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
       `;

    // Replace the content of the chat container with the chat HTML
    $("#chat-container").html(chatHTML);

    // Hiển thị #chat-container
    $("#chat-container").show();

    $("#playlist").click(function () {
      // Hiển thị modal
      $("#modal-playlist").show();
    });
    $("#close-modal-playlist").click(function () {
      //tắt modal
      $("#modal-playlist").hide();
    });
  });
});
