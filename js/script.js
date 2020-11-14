$(function(){
  $('.reviews_list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*--------------------burger JS----------------*/
$(document).ready(function(){
  $('.icon_menu').click(function(event) {
    $(".icon_menu,.meny_header_container").toggleClass('аctive');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function(){
  $('.container-footer-title').click(function(event) {
    $(".container-footer-list").toggleClass('аctive');
  });
});

