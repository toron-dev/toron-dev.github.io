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
  let myTextArr = document.querySelectorAll(".hover-text span");
  let textCounter = 0;
  let textWait = 0;

  function textJumpAnimation() {
    myTextArr.forEach(element => {
      element.classList.remove("active");
    });
    if (textWait > 100) {
      myTextArr[textCounter].classList.add("active");
      textCounter++
    }
    if (textCounter >= myTextArr.length) {
      textWait = 0;
      textCounter = 0;
    }
    textWait++;
  }
  setInterval(textJumpAnimation, 100);






  // if (screen.width < 480) {
  //   // do any 480 width stuff here, or simply do nothing
  //   return;
  // } else {
  //   // do all your cool stuff here for larger screens

  //   //fullPage plagin
  //   new fullpage('.wrapper__pages', {
  //     //options here
  //     anchors: ['page-1', 'page-3'],
  //   });
  // }

  // var isPhoneDevice = "ontouchstart" in document.documentElement;
  // $(document).ready(function () {
  //   if (isPhoneDevice) {
  //     //mobile
  //   }
  //   else {
  //     //desktop               
  //     new fullpage('.wrapper__pages', {
  //       //options here
  //       anchors: ['page-1', 'page-3'],
  //     });
  //   }
  // });

  new fullpage('.wrapper__pages', {
    //options here
    anchors: ['page-1', 'page-3'],
  });

});
