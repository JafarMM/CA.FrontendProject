let navbar = document.querySelector(".navbarm");
let checkBox = document.querySelector("input[type='checkbox']");
let buy = document.querySelector(".buy-btn");
let productPage = document.querySelector("#productpage");
let firstZoomImg = document.querySelector(".first-zoom-img");
let secondZoomImg = document.querySelector(".second-zoom-img");
let smallImg1 = document.querySelector(".first-small-img");
let smallImg2 = document.querySelector(".second-small-img");






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

  checkBox.addEventListener("click",function(){
  if(checkBox.getAttribute("checked")){
    checkBox.removeAttribute("checked");
    buy.style.pointerEvents = "none";
  }else{
    checkBox.setAttribute("checked","checked");
    buy.style.pointerEvents = "visible";
    buy.style.cursor = "pointer";
  }
})

productPage.addEventListener("click",function(e){
    // console.log(e.target);
    if(e.target.className === "first-small-img"){
        firstZoomImg.style.display = "block";
        smallImg1.classList.add("active");
        smallImg2.classList.remove("active");
        secondZoomImg.style.display = "none";
    }else if(e.target.className === "second-small-img"){
        firstZoomImg.style.display = "none";
        secondZoomImg.style.display = "block";
        smallImg2.classList.add("active");
        smallImg1.classList.remove("active");
    }
})

