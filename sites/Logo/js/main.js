$(function () {
  
  $('.burger-btn').on('click', function(){
    $('.menu').slideToggle();
  });
  $('.burger-btn').on('click', function(){
    $('.burger-btn').toggleClass('active');
    $('.menu').toggleClass('active')
  });

  $('.looking__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 961,
        settings: {
          autoplay: true,
          arrows: false
        }
      }
    ]
  });

  $('.partners__inner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  $(".input").change(function () {
    if ($(this).val().trim().length) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $('.arrow-btn').click(function () {
    if ($(this).parent('.questions__tab-item').hasClass('active')) {
      $(this).parent('.questions__tab-item').removeClass('active')
    } else {
      $('.questions__tab-item').removeClass('active')
      $(this).parent('.questions__tab-item').addClass('active') 
    }
  });


//yar coding
  var allColumns = {};

$(".jTable tr").each((i, tr)=> {
	$(tr).find(".table").each((ind, td)=> {
  	var index = ind;// +1;//1st column is text
  	if(!allColumns[index]) allColumns[index] = [];
    allColumns[index].push($(td));
  })
})

var currentIndex = 0;

$(".jBtn").on("click", e=> {
	var currentActive = $(".table.active");
  var tds= $(".jTable tr").eq(0).find(".table");
	//var currentIndex  = tds.index($(".jTable tr").eq(0).find(".table.active"));
  currentIndex++;
  if(currentIndex >= tds.length) currentIndex = 0;
  
	for(let index in allColumns){
  allColumns[index].forEach(x => {
   x.removeClass("active");
  });
    
  }
   allColumns[currentIndex].forEach(x => {
   x.addClass("active");
  });
  
})


});

