$(function(){
    
  $('.hotels__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1171,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $(document).ready(function(){
    $("#contacts-scroll").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
  
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
  
      //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
      
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });

  $(document).ready(function(){
    $("#features-scroll").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
  
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
  
      //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
      
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });
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

});
