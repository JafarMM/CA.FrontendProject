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

let contactForm = document.querySelector("#contact-form");
let emailInp = document.querySelector("input[type='email']");
let textarea = document.querySelector("textarea");

console.log(checkBox);

let errorMsg = document.createElement("p");
let secondErrorMsg = document.createElement("p");

errorMsg.style.color = "#E13F3F";
secondErrorMsg.style.color = "#E13F3F";
errorMsg.style.marginTop = "10px";
secondErrorMsg.style.marginTop = "10px";



contactForm.addEventListener("submit",function(e){
  e.preventDefault();

  if(emailInp.value === ""){
    emailInp.style.borderColor = "#E13F3F";
    errorMsg.innerText = "You must write email address";
    emailInp.after(errorMsg);
    emailInp.addEventListener("keyup",function(){
      emailInp.style.borderColor = "";
      errorMsg.remove();
    })
  }
  if(textarea.value === ""){
    textarea.style.borderColor = "#E13F3F";
    secondErrorMsg.innerText = "You must write email address";
    textarea.after(secondErrorMsg);
    textarea.addEventListener("keyup",function(){
      textarea.style.borderColor = "";
      secondErrorMsg.remove();
    })
  }
})