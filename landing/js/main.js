(function($) {
    "use strict";

    if ($.fn.classyNav) {
        $('#mainnav').classyNav();
    }

    // scrollspy
    // $('body').scrollspy({
    //     offset: 190,
    //     target: '.dtr-scrollspy'
    // });
    
    // nav scroll   
    var myoffset = $('#dtr-header-global').height();
    $('.navbar a[href^="#"]').click(function(){  
        event.preventDefault();  
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - myoffset
        }, "slow","easeInSine");
    });

    //stickyatTop
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 670) {
            $(".scrollheader").addClass("is-sticky");
            $('.scrollheader').css('position', 'fixed');
        } else {
            $(".scrollheader").removeClass("is-sticky");
            $(".scrollheader").css('position', 'relative');
        }
    });

    $('#bannermain').owlCarousel({
        items: 1,
        slideSpeed:6000,
        nav: false,
        autoplay: true, 
        dots:true,
        loop: true,
        responsiveRefreshRate: 200,
      })

    // What’s New Slides
    $('.card-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin:10,
        navText: [
                "<i class='icofont-rounded-left' aria-hidden='true'></i>",
                "<i class='icofont-rounded-right' aria-hidden='true'></i>",
            ],
        responsive: {
            0: {
                items: 1,
                dots:true,
            },
            576: {
                items: 2,
                dots:true,
            },
            768: {
                items: 2,
                dots:true,
            },
            992: {
                items: 3,
                dots:true,
            },
            1200: {
                items: 4,
            }
        }
    });

    // Clients Slides
    $('.client-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin:25,
        navText: [
                "<i class='icofont-rounded-left' aria-hidden='true'></i>",
                "<i class='icofont-rounded-right' aria-hidden='true'></i>",
            ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items:7,
            }
        }
    });

    //animated js
      AOS.init({
        easing: "ease-in-out",
        // default easing for AOS animations
        once: true,
        // whether animation should happen only once - while scrolling down
        duration: 500 // values from 0 to 3000, with step 50ms
      });

      $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
      });

})(window.jQuery);
