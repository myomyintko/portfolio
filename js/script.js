$(window).on("load", () => {
  $(".loader").fadeOut();
  $("#preloder").delay(100).fadeOut("slower");
  loadSkills();
  loadExp();
});

function loadSkills(){
  $.getJSON("./../data/skill.json", function (skills) {
    var items = [];
    $.each(skills, function (key) {
      $.each(skills[key], (k,v) => {
        items.push(v)        
      });
      items = items.filter((item,index) => items.indexOf(item) === index)
    });
    $.each(items, (i,v)=>{
      $("<span class='relative w-auto px-2 py-1 border bg-blue-800 text-white cursor-pointer rounded m-2 font-normal uppercase text-sm text-center' id='" + i + "'>" + v + "</span>")
   .appendTo( "#skills" )
 })
  });
}


function loadExp(){
  $.getJSON("./../data/exp.json", function (exps) {
    $.each(exps, function (key) {
      $.each(exps[key], (k,v) => {
            $(`
          <div class="exp">
           <h3 class="
                 inline-block
                 relative
                 text-sm
                 py-1
                 px-3
                 tracking-wider
                 uppercase
               ">
             ${v.date_from} - ${v.date_to}
           </h3>
           <h4 class="text-md font-semibold uppercase">${v.position}</h4>
           <h5 class="text-lg uppercase font-light">
             ${v.company_name}
           </h5>
           <p>
             ${v.descriptions}
           </p>
         </div>
          `)
       .appendTo( "#exps" )
      });
    });
  });
}

function onScroll() {
  var scrollPos = $(document).scrollTop();
  $(".nav-link").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 100 <= scrollPos) {
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
