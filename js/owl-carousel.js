$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
  $(".owl-prev").html('<img src="img/index/arrow-prev.svg" alt="Previous">');
  $(".owl-next").html('<img src="img/index/arrow-next.svg" alt="Next">');
});