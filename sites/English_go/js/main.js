$(function () {

    $('.teachers__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: ' <img class="slider-arrows slider-arrows__left" src="images/arrow-left.png"></img>',
        nextArrow: ' <img class="slider-arrows slider-arrows__rigth" src="images/arrow-right.png"></img>',
    });

    jQuery(window).trigger('resize').trigger('scroll');


    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 120,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').slideToggle();
      });


});
