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

});