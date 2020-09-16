$(function () {
    $('.call-request').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.home__inner').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

    var slickInited = false;
    $(".tab").click(function () {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).show();
        if (!slickInited && $(this).index() == 1) {
            sliderBig.asNavFor = '.jSliderSmall-2';
            sliderSmall.asNavFor = '.jSliderBig-2';
            $('.jSliderSmall-2').slick(sliderSmall);
            $('.jSliderBig-2').slick(sliderBig);
            slickInited = true;
        }
    }).eq(0).addClass("active");

    const sliderBig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        asNavFor: '.jSliderSmall-1'
    };

    const sliderSmall = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.jSliderBig-1',
        dots: false,
        focusOnSelect: true,
        centerMode: true,
    };

    $('.jSliderBig-1').slick(sliderBig);
    $('.jSliderSmall-1').slick(sliderSmall);


    $(".tab-layout").click(function () {
        $(".tab-layout").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-layout__item").hide().eq($(this).index()).show();
    }).eq(0).addClass("active");

    var roomInnerSlickInited = false;
    $('.tab-layout__item').each(function (i, e) {
        const roomSizeTabs = $(e).find(".tab-layout__size");
        const roomSizeBlocks = $(e).find(".tab-layout__size-item");
        roomSizeTabs.click(function () {
            const currentTabIndex = $(this).index();
            roomSizeTabs.removeClass("active").eq(currentTabIndex).addClass("active");
            roomSizeBlocks.removeClass("active").hide().eq(currentTabIndex).show().addClass("active");
            if (!roomInnerSlickInited && true) {
                console.log($(".tab-layout__size-item.active").find('.layout__inner-content'));
                $(".tab-layout__size-item.active").find('.layout__inner-content').slick(roomSliderOptions);
                roomInnerSlickInited = true;
            }
        }).eq(0).addClass("active");

    });

    const roomSliderOptions = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    $('.layout__inner-content').slick(roomSliderOptions);


    $('.documents__inner').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
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

    // $('.header__menu-btn').on('click', function(){
    //     $('.header__menu-list').slideToggle();
    //   });



});
