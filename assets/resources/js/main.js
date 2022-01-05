$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    $(".navbar li").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(window).scroll(function() {
        var ourWindow = $(window).scrollTop();

        if (ourWindow < 500) {
            $('.top').fadeOut(2000);
        } else {
            $('.top').fadeIn(2000);
        }

        /***Navbar-fixed-Start Here***/

        if (ourWindow > 100) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    });

    // toggle menu/navbar Scripts
    $('.menu-btn').click(function() {

        $('.nav_item').toggleClass("active");
        $('.navbar i').toggleClass("active");
    });



    //Typing Scripts
    var typed = new Typed(".tying", {
        strings: ["ready to give maximum service", "by your side in your service "],
        typeSpeed: 100,
        backSpeed: 10,
        loop: true
    });

    //Typing Scripts
    var typed = new Typed(".tying2", {
        strings: ["specialist", "CARDIOLOGY", "DENTAL UNIT"],
        typeSpeed: 150,
        backSpeed: 10,
        loop: true
    });
    //Typing Scripts
    var typed = new Typed(".tying3", {
        strings: ["CRITICAL CARE MEDICINE", "DERMATOLOGY", "DIABETOLOGY"],
        typeSpeed: 150,
        backSpeed: 10,
        loop: true
    });
    // Owl Coursel Js
    $('#slider-owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 20000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});