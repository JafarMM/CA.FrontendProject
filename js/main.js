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

 
 
 
 
 
 
 
let navbar = document.querySelector(".navbarm");
 


window.addEventListener("scroll", function () {
    navbar.style.transition = "all 0.5s";
    if (window.pageYOffset > "100") {
      navbar.style.position = "fixed";
      navbar.style.width = "100%";
      navbar.style.top = "0";
     
    } else {
      navbar.style.position = "";
    
    }
  });