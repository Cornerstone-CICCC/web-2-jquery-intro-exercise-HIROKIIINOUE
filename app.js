$(function () {
  $("#toggleButton").on("click", function () {
    $(this).next("p").slideToggle();
  });

  $("#colorButton").on("click", function () {
    $(this).next("div").css({
      backgroundColor: "yellow",
    });
  });

  $("#addClassButton").on("click", function () {
    $("#classDiv").addClass("newClass");
  });
  $("#removeClassButton").on("click", function () {
    $("#classDiv").removeClass("newClass");
  });

  $("#fadeInButton").on("click", function () {
    $("#fadeDiv").fadeIn("slow");
  });
  $("#fadeOutButton").on("click", function () {
    $("#fadeDiv").fadeOut("slow");
  });

  $("#slideUpButton").on("click", function () {
    $("#slideDiv").slideUp("slow");
  });
  $("#slideDownButton").on("click", function () {
    $("#slideDiv").slideDown("slow");
  });
});
