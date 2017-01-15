// Can also be used with $(document).ready()
$(window).load(function() {

    /*-- header slider --*/
    $('#header-slider').flexslider({
        animation: "fade",
        pauseOnHover: true
    });



    /*-- featured items slider --*/
    $('#featured-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true,
        itemWidth: 220,
        itemMargin: 15,
        controlNav: false,
        customDirectionNav: $(".bladify-featured-custom-navigation a")
    });

    /*-- popular items slider --*/
    $('#popular-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true,
        itemWidth: 220,
        itemMargin: 15,
        controlNav: false,
        customDirectionNav: $(".bladify-popular-custom-navigation a")
    });

    /*-- bestseller items slider --*/
    $('#bestseller-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true,
        itemWidth: 220,
        itemMargin: 15,
        controlNav: false,
        customDirectionNav: $(".bladify-bestseller-custom-navigation a")
    });

    /*-- special items slider --*/
    $('#special-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true,
        itemWidth: 220,
        itemMargin: 15,
        controlNav: false,
        customDirectionNav: $(".bladify-special-custom-navigation a")
    });

    /*-- latest items slider --*/
    $('#latest-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true,
        itemWidth: 220,
        itemMargin: 15,
        controlNav: false,
        customDirectionNav: $(".bladify-latest-custom-navigation a")
    });

    /*-- Brands items slider --*/
    $('#brands-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true,
        itemWidth: 90,
        itemMargin: 50,
        controlNav: false,
        customDirectionNav: $(".bladify-brands-custom-navigation a")
    });



    /*----  Sticky main menu   -----------------*/
    var stickyMenuTop = $('#bladify-main-menu').offset().top;

    var stickyMenu = function(){
        var scrollTop = $(window).scrollTop();


        if (scrollTop > stickyMenuTop) {
            $('#bladify-main-menu nav.navbar').addClass('navbar-fixed-top animate-main-menu-fixed sticky-menu-shadow');
        } else {
            $('#bladify-main-menu nav.navbar').removeClass('navbar-fixed-top animate-main-menu-fixed sticky-menu-shadow');
        }
    };

    $(window).scroll(function() {
      stickyMenu();
    });
    /*----  Sticky main menu End  -----------------*/



});

/*-- show the tab contents for the 2nd and up tabs ---*/
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
    $('#latest-slider').resize();
    $('#special-slider').resize();
    $('#bestseller-slider').resize();
});


