$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

        items:2,
        margin:25,
        loop:true,
        nav:true,
         
    });
  });


  $('.owl-theme').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    startPosition:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})