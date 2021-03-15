let form1 = document.querySelector("#resetPsw");
let form2 = document.querySelector("#createAccount");
let resetEmail = document.querySelector(".reset");
let createEmail = document.querySelector(".create");
let psw = document.querySelector("input[type='password']");

// console.log(resetEmail);


let errorMsg = document.createElement("p");
let secondErrorMsg = document.createElement("p");
let thirthErrorMsg = document.createElement("p");


errorMsg.style.color = "#E13F3F";
secondErrorMsg.style.color = "#E13F3F";
thirthErrorMsg.style.color = "#E13F3F";

errorMsg.style.marginTop = "10px";
secondErrorMsg.style.marginTop = "10px";
thirthErrorMsg.style.marginTop = "10px";

form1.addEventListener("submit",function(e){
    e.preventDefault();
    if(resetEmail.value === ""){
        resetEmail.style.borderColor = "#E13F3F"
        errorMsg.innerText = "You must write email address";
        resetEmail.after(errorMsg);
        resetEmail.addEventListener("keyup",function(){
        resetEmail.style.borderColor = "";
            errorMsg.remove();
        })
    }
})

form2.addEventListener("submit",function(e){
    e.preventDefault();
    if(createEmail.value === ""){
        createEmail.style.borderColor = "#E13F3F";
        secondErrorMsg.innerText = "You must write email address";
        createEmail.after(secondErrorMsg);
        createEmail.addEventListener("keyup",function(){
            createEmail.style.borderColor = "";
            secondErrorMsg.remove();
        })
    }
    if(psw.value === ""){
        psw.style.borderColor = "#E13F3F";
        thirthErrorMsg.innerText = "You must write password";
        psw.after(thirthErrorMsg);
        psw.addEventListener("keyup",function(){
            psw.style.borderColor = "";
            thirthErrorMsg.remove();
        })
    }
})