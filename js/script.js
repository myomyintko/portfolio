$(window).on("load", () => {
  $(".loader").fadeOut();
  $("#preloder").delay(100).fadeOut("slower");
});

function onScroll() {
  var scrollPos = $(document).scrollTop();
  $(".nav-link").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    console.log('scrollpos '+scrollPos);
    console.log('top '+refElement.position().top);
    console.log('height '+refElement.height());
    if (
      refElement.position().top - 100 <= scrollPos
    ) {
      $(".nav-link").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

$(document).on("scroll", () => {
  onScroll();
  if ($(window).scrollTop() > 100) {
    $("header").addClass("shadow-sm");
  } else {
    $("header").removeClass("shadow-sm");
  }
});

$(document).ready(function () {
  // Mobile navbar
  $(".open-menu").on("click", () => {
    $("#mobile-menu").removeClass("hidden");
  });

  $(".mobile-nav-link").on("click", () => {
    $("#mobile-menu").addClass("hidden");
  });
  $("#close-menu").on("click", () => {
    $("#mobile-menu").addClass("hidden");
  });

  //smoothscroll
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $(".nav-link").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});
