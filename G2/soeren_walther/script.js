$(window).on("scroll", function () {
  const scrollTop = $(window).scrollTop();

  if (scrollTop < 500) {
    $(".content").removeClass("active").eq(0).addClass("active");
  } else if (scrollTop < 1000) {
    $(".content").removeClass("active").eq(1).addClass("active");
  } else {
    $(".content").removeClass("active").eq(2).addClass("active");
  }
});