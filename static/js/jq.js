$(function () {
  // nav hamburger
  $("#navBTN").on("click", function () {
    var navIcon = $(".navXsList").css("display");
    if (navIcon == "none") {
      $(".navXsList").css({ display: "flex" });
      $("#navBTN path").attr({
        d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z",
      });
    } else {
      $(".navXsList").css({ display: "none" });
      $("#navBTN path").attr({
        d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
      });
    }
  });
  // search youtuber
  $("#submit").on("click", function () {
    var name = $("#searchInput").val();
    if (name == "입짧은 햇님" || name == "입짧은" || name == "햇님") {
      console.log("성공");
      window.location.replace("/youtuber1");
    } else if (name == "쯔양") {
      window.location.replace("/youtuber1");
    } else if (name == "히밥") {
      window.location.replace("/youtuber1");
    } else if (name == "웅이") {
      window.location.replace("/youtuber1");
    } else if (name == "여수언니" || name == "여수") {
      window.location.replace("/youtuber1");
    } else if (name == "문복희" || name == "복희") {
      window.location.replace("/youtuber1");
    }
  });
  // login
  $("#loginSubmit").on("click", function () {
    var id = $("#userId").val();
    var password = $("#userPassword").val();
    if (id == "" && password == "") {
      $("#userId + span").text("아이디를 입력하세요.");
      $("#userPassword + span").text("비밀번호를 입력하세요.");
    } else if (password == "") {
      $("#userPassword + span").text("비밀번호를 입력하세요.");
      $("#userId + span").text("");
    } else if (id == "") {
      $("#userId + span").text("아이디를 입력하세요.");
      $("#userPassword + span").text("");
    } else if (id == "userid" && password == "aaa") {
      alert("로그인 성공임");
      // window.location.replace("/");
    } else if (id !== "userid" || password !== "aaa") {
      alert("아이디 또는 비밀번호가 틀립니다.");
    }
  });
  // menu_2 section3
  $(".foodCategory button").on("click", function () {
    console.log($(this).attr("id"));
    var title = $(this).attr("id");
    if (title == "chicken") {
      $(".ViewArea .chicken").css("display", "flex");
      title = "치킨";
      $(".cateTitle").text(title);
      $(".kor").css("display", "none");
      $(".wes").css("display", "none");
      $(".des").css("display", "none");
    } else if (title == "kor") {
      $(".ViewArea .kor").css("display", "flex");
      title = "한식";
      $(".cateTitle").text(title);
      $(".chicken").css("display", "none");
      $(".wes").css("display", "none");
      $(".des").css("display", "none");
    } else if (title == "western") {
      $(".ViewArea .wes").css("display", "flex");
      title = "양식";
      $(".cateTitle").text(title);
      $(".chicken").css("display", "none");
      $(".kor").css("display", "none");
      $(".des").css("display", "none");
    } else if (title == "desert") {
      $(".ViewArea .des").css("display", "flex");
      title = "디저트";
      $(".cateTitle").text(title);
      $(".chicken").css("display", "none");
      $(".kor").css("display", "none");
      $(".wes").css("display", "none");
    }
  });
});
