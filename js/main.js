(function($) {
    "use strict";

    // Preloader
      window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
      });

    // Portfolio Slides
    $('.card-slides').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin:10,
        items: 1,
    });

    /* feather icon */
  feather.replace();

    /* sidebar collapse  */
  const sidebarToggle = document.querySelector(".sidebar-toggle");

  function sidebarCollapse() {
    $('.overlay-dark-sidebar').toggleClass('show');
    document.querySelector(".sidebar").classList.toggle("sidebar-collapse");
    document.querySelector(".sidebar").classList.toggle("collapsed");
    document.querySelector(".contents").classList.toggle("expanded");
  }
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function (e) {
      e.preventDefault();
      sidebarCollapse();
    });
  }

  /* sidebar nav events */
  $(".sidebar_nav .has-child ul").hide();
  $(".sidebar_nav .has-child.open ul").show();
  $(".sidebar_nav .has-child >a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().next("has-child").slideUp();
    $(this).parent().parent().children(".has-child").children("ul").slideUp();
    $(this).parent().parent().children(".has-child").removeClass("open");
    if ($(this).next().is(":visible")) {
      $(this).parent().removeClass("open");
    } else {
      $(this).parent().addClass("open");
      $(this).next().slideDown();
    }
  });

  /* Header mobile view */
  $(window).on('resize', function () {
      var screenSize = window.innerWidth;
      if ($(this).width() <= 767.98) {
        $(".navbar-right__menu").appendTo(".mobile-author-actions");
        // $(".search-form").appendTo(".mobile-search");
        $(".contents").addClass("expanded");
        $(".sidebar ").removeClass("sidebar-collapse");
        $(".sidebar ").addClass("collapsed");
      } else {
        $(".navbar-right__menu").appendTo(".navbar-right");
      }
    })
    .trigger("resize");

  $(window)
    .bind("resize", function () {
      var screenSize = window.innerWidth;
      if ($(this).width() > 767.98) {
        $(".atbd-mail-sidebar").addClass("show");
      }
    })
    .trigger("resize");

  $(window)
    .bind("resize", function () {
      var screenSize = window.innerWidth;
      if ($(this).width() <= 991) {
        $(".sidebar").removeClass("sidebar-collapse");
        $(".sidebar").addClass("collapsed");
        $(".sidebar-toggle").on("click", function () {
          $(".overlay-dark-sidebar").toggleClass("show");
        });
        $(".overlay-dark-sidebar").on("click", function () {
          $(this).removeClass("show");
          $(".sidebar").removeClass("sidebar-collapse");
          $(".sidebar").addClass("collapsed");
        });
      }
    })
    .trigger("resize");

  /* Mobile Menu */
  $(window)
    .bind("resize", function () {
      var screenSize = window.innerWidth;
      if ($(this).width() <= 991.98) {
        $(".menu-horizontal").appendTo(".mobile-nav-wrapper");
      }
    })
    .trigger("resize");

  $(".btn-search").on("click", function () {
    $(this).toggleClass("search-active");
    $(".mobile-search").toggleClass("show");
    $(".mobile-author-actions").removeClass("show");
  });


  $(".kanban-items li").hover(function () {
    $(this).toggleClass("active");
  });

  $(".btn-author-action").on("click", function () {
    $(".mobile-author-actions").toggleClass("show");
    $(".mobile-search").removeClass("show");
    $(".btn-search").removeClass("search-active");
  });

  $(".menu-mob-trigger").on("click", function (e) {
    e.preventDefault();
    $(".mobile-nav-wrapper").toggleClass("show");
  });

  $(".nav-close").on("click", function (e) {
    e.preventDefault();
    $(".mobile-nav-wrapper").removeClass("show");
  });

  /* Mail Compose Rich-text*/
  $('#mail-message, #mail-reply-message')
    .trumbowyg({
      btnsDef: {
        // Create a new dropdown
        svgPath: typeof env !== "undefined" && env.editorIconUrl ? env.editorIconUrl : 'img/ui/icons.svg',
        image: {
          dropdown: ['insertImage', 'base64'],
          ico: 'insertImage'
        }
      },
      // Redefine the button pane
      btns: [
        ['viewHTML'],
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['link'],
        ['image'], // Our fresh created dropdown
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
      ]
    });

  $("#mail-to,#reply-to,#reply-to2").select2({
    placeholder: "",
    dropdownCssClass: "mail-to",
  });

  /* Text Limit */
  $(".text-limit p span").text(function (index, currentText) {
    return currentText.substr(0, 30);
  });

  /* Active Composer */
  const btnCompose = document.querySelector(".btn-compose");
  const mailComposer = document.querySelector(".atbd-mailCompose");
  const closeCompose = document.querySelector(".compose-close");

  function showBox(e) {
    e.preventDefault();
    if (this.dataset.trigger == "label") lebelForm.classList.add("show");
    else if (this.dataset.trigger == "compose")
      mailComposer.classList.add("show");

    if ($(e.target).hasClass("label-close")) lebelForm.classList.remove("show");
  }

  function removeBox(e) {
    e.preventDefault();
    if (this.dataset.trigger == "label") lebelForm.classList.remove("show");
    else if (this.dataset.trigger == "compose")
      mailComposer.classList.remove("show");
  }

  if (btnCompose !== null && closeCompose !== null) {
    btnCompose.addEventListener("click", showBox);
  }

  if (closeCompose !== null && closelabel !== null) {
    closeCompose.addEventListener("click", removeBox);
  }

  //click to move specific page

  // Date Picker
  $(".date-picker__calendar").datepicker();
  

  //Modal Show
    var myModal = new bootstrap.Modal(document.getElementById('modal-form'), {show:true});

})(window.jQuery);