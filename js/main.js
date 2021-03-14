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
// let firstBadge = document.querySelector(".first-badge");
// let secondBadge = document.querySelector(".second-badge");
// let lastBadge = document.querySelector(".last-list-item");


window.addEventListener("scroll", function () {
    navbar.style.transition = "all 0.5s";
    if (window.pageYOffset > "100") {
      navbar.style.position = "fixed";
      navbar.style.width = "100%";
      navbar.style.top = "0";
    //   firstBadge.classList.add("first-badge-1");
    //   secondBadge.classList.add("second-badge-1");
    //   lastBadge.classList.add("last-list-item-1");
    } else {
      navbar.style.position = "";
    //   firstBadge.classList.remove("first-badge-1");
    //   secondBadge.classList.remove("second-badge-1");
    //   lastBadge.classList.remove("last-list-item-1");
    }
  });