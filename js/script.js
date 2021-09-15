$(window).on("load", () => {
  $(".loader").fadeOut();
  $("#preloder").delay(100).fadeOut("slower");
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

  $(document).on("scroll", () => {
    onScroll;
    if ($(window).scrollTop() > 100) {
      $("header").addClass("shadow-sm");
    } else {
      $("header").removeClass("shadow-sm");
    }
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

function onScroll() {
  var scrollPos = $(document).scrollTop();
  $(".nav-link").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".nav-link").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

// var form = $("#contact-me");

// function alert(text) {
//   $("mail-alert").removeClass("hidden");
//   $("mail-status-text").html(text);
// }

// $(".close-alert").click(() => {
//   $("mail-alert").addClass("hidden");
// });

// $(".send-mail").on("click", (event) => {
//   event.preventDefault();
//   var obj = {
//     firstname: $("[name=firstname]").val(),
//     lastname: $("[name=lastname]").val(),
//     _replyto: $("[name=_replyto]").val(),
//     subject: $("[name=subject]").val(),
//     message: $("[name=message]").val(),
//   };
//   if(obj.firstname > 0){

//   }
//   // fetch("https://formspree.io/f/xyyldkkg", {
//   //   method: "POST",
//   //   dataType: "json",
//   //   data: obj,
//   //   headers: {
//   //     Accept: "application/json",
//   //   },
//   // })
//   //   .then((response) => {
//   //     alert("Thanks for send submitting");
//   //     form.reset();
//   //   })
//   //   .catch((error) => {
//   //     alert('"Oops! There was a problem submitting your form');
//   //   });
// });
