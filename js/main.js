$(document).ready(function () {
  // 초기화
  $(document)
    .off("click", ".logo-img") // 기존 클릭 이벤트 제거
    .on("click", ".logo-img", function () {
      location.reload(); // 페이지 새로고침
    });

  // 메뉴 열고 닫기
  $(document)
    .off("click", ".menu-img") // 기존 클릭 이벤트 제거
    .on("click", ".menu-img", function () {
      $(".aside-tab").removeClass("on");
      $(".main-content").removeClass("on");
      $(".right-menu-img").addClass("on");
    });
  $(document)
    .off("click", ".right-menu-img") // 기존 클릭 이벤트 제거
    .on("click", ".right-menu-img", function () {
      $(".aside-tab").addClass("on");
      $(".main-content").addClass("on");
      $(".right-menu-img").removeClass("on");
    });
  $(window).on("resize", function () {
    if ($(window).width() <= 768) {
      $(".aside-tab").removeClass("on"); // 'on' 클래스 제거
      $(".main-content").removeClass("on"); // 'on' 클래스 제거
      $(".right-menu-img").addClass("on"); // 'on' 클래스 제거
    }
  });

  // 페이지 로드 시에도 확인
  if ($(window).width() <= 768) {
    $(".aside-tab").removeClass("on");
    $(".main-content").removeClass("on"); // 'on' 클래스 제거
    $(".right-menu-img").addClass("on"); // 'on' 클래스 제거
  }

  //메뉴 탭
  $(document)
    .off("click", ".tab > li")
    .on("click", ".tab > li", function () {
      var $tab = $(this).closest(".tab > li");

      if ($tab.hasClass("on")) {
        $tab.removeClass("on");
        $(this).removeClass("on");
      } else {
        $tab.addClass("on");
        $(this).addClass("on");
      }
    });
});