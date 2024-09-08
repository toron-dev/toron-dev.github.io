$(function () {

  
  // preloader
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


  // text-hover-effect
  var text = $('.hover-text').text(),
    textArr = text.split('');
  $('.hover-text').html('');
  $.each(textArr, function (i, v) {
    if (v == ' ') { $('.hover-text').append('<span class="space"></span>'); }
    $('.hover-text').append('<span>' + v + '</span>');
  })


  //animate jump text
  let textArr = document.querySelectorAll(".hover-text span");
  let textCounter = 0;
  let textWait = 0;

  function textJumpAnimation() {
    textArr.forEach(element => {
      element.classList.remove("active");
    });
    if (textWait > 100) {
      textArr[textCounter].classList.add("active");
      textCounter++
    }
    if (textCounter >= textArr.length) {
      textWait = 0;
      textCounter = 0;
    }
    textWait++;
  }
  setInterval(textJumpAnimation, 100);


  new fullpage('.wrapper__pages', {
    //options here
    anchors: ['page-1', 'page-3'],
  });

});


