// Can also be used with $(document).ready()
$(window).load(function() {

    /*---  variables   ------*/
    var stickyMenuTop = $('#bladify-main-menu').offset().top;
    var windowsize = $(window).width();
    var collapseBtn = $('#bladify-top-menu .collapse-btn');
    var button_cbtn = $('#bladify-top-menu .collapse-btn button');
    var span_cbtn = $('#bladify-top-menu .collapse-btn button span');
    var top_header_wrapper = $('#top-header-wrapper');

    /*-- header slider --*/
    $('#header-slider').flexslider({
        animation: "fade",
        pauseOnHover: true
    });

    /*-- services slider --*/
    $('#services-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 280,
        itemMargin: 15,
        controlNav: false,
        directionNav: false
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

    /*---- For responsive footer layout -------------------------*/
    footerResponsive('#myaccount', 768);
    footerResponsive('#contact', 768);
    footerResponsive('#aboutus', 768);
    footerResponsive('#contactus', 768);
    footerResponsive('#newsletter', 768);

    /*----  Top menu ----------------------*/
    if (windowsize < 992) {
        collapseBtn.addClass('display-block');
        $('#top-header-wrapper').addClass('collapse');

        if (button_cbtn.hasClass('collapsed') === false) {
            span_cbtn.removeClass('fa-plus').addClass('fa-minus');
        }

    } else {
        if (collapseBtn.hasClass('display-block')) {
            collapseBtn.removeClass('display-block');
        }

        if (top_header_wrapper.hasClass('collapse')) {
            top_header_wrapper.removeClass('collapse');
        }
    }

});

/*-- show the tab contents for the 2nd and up tabs ---*/
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
    $('#latest-slider').resize();
    $('#special-slider').resize();
    $('#bestseller-slider').resize();
});

/*--- footer responsive blocks collapse ---------------*/
function footerResponsive(id, windowWidth) {

    var windowsize = $(window).width();
    //console.log(windowsize);
    if (windowsize < windowWidth) {
        $(id).addClass("collapse");
        $('h3[data-target="' + id + '"]').addClass("plus collapsed").attr("data-toggle", "collapse");
    }
    else {
        if ($(id).hasClass("collapse")) {
            $(id).removeClass("collapse").removeAttr("class");
            $('h3[data-target="' + id + '"]').removeClass("plus").removeAttr("class").removeAttr("data-toggle");
        }
    }
}



