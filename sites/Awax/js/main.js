$(function () {

    $('.design__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.team__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1141,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 761,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });

      $('.clients__inner, .premium__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
      });
    
    $('.open-popup-link-phone, .popup-projects__item-link-1, .popup-projects__item-link-2, .popup-projects__item-link-3, .popup-projects__item-link-4, .popup-projects__item-link-5, .popup-projects__item-link-6, .popup-projects__item-link-7, .popup-projects__item-link-8, .popup-projects__item-link-9, .popup-projects__item-link-10, .popup-projects__item-link-11, .popup-projects__item-link-12').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
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
        $('.header__menu').slideToggle();
      });
      $('.header__menu-btn').on('click', function(){
        $('.header__menu-btn').toggleClass("active");
      });

      

      var mixer = mixitup('.projects__inner')
});
