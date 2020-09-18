$(function () {

    function preloader() {
       $(() => {

           setInterval(() => {

        let p = $('.preloader');

        p.css('opacity', 0);

        setInterval(
          () => p.remove(),
          parseInt(p.css('--duration')) * 1000
        );

           }, 1000);

       }); 
    }
    preloader();

    $('.btn-menu').on('click', function(){
        $('.menu').slideToggle();
        $('.btn-menu').toggleClass('active');
      });

    $('.tec__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true
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

    $('.btn-summary')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });

    $('.btn-summary-details').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.btn-contacts').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

        $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.parallax-wrapper').css('top',(0-(scrolled*.25))+'px');
        $('.parallax-wrapper-2').css('top',(0-(scrolled*.5))+'px');
        // $('.parallax-wrapper-3').css('top',(0-(scrolled*.75))+'px');
    } 

    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    
});
