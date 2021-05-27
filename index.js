
document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    document.querySelector('.topline').classList.toggle('active');
})

document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    document.querySelector('.bottomline').classList.toggle('active');
})

document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    document.querySelector('.mobile').classList.toggle('active');
})

document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    document.querySelector('.mobile-applebag').classList.toggle('active');
})

document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    document.querySelector('.nav-mobile').classList.toggle('active');
})

/* document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    document.querySelector('.tricont').classList.toggle('active');
})

document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    document.querySelector('.aside').classList.toggle('active');
}) */

const acc = document.querySelectorAll(".accordianbutton");

acc.forEach((acc) => {
    acc.addEventListener('click',()=>
        acc.classList.toggle('active'));
    })


acc.forEach((acc) => {
    acc.addEventListener('click',()=>
    acc.nextElementSibling.classList.toggle('active'));
})

const cart = document.querySelector("aside");
const toggle = document.querySelector(".sbagtoggle");
const tricart= document.querySelector(".tricont");
const menu = document.querySelector(".mobile");
const classesmenu = menu.classList;
const result = classesmenu.contains("active");
const answer = cart.classList.remove("toggle");


toggle.addEventListener('click',()=>{
    cart.classList.toggle("toggle");
})

toggle.addEventListener('click',()=>{
    tricart.classList.toggle("toggle");
})














/* if(result && toggle){
    cart.style.display="none";
} else {
    cart.style.display="none";
}

if(result && toggle){
    tricart.style.display="none";
} else {
    tricart.style.display="none";
} */

/* if(cart.classList.contains("toggle")){
    cart.style.display="none";
} else {
    cart.style.display="block"
}

if(cart.classList.contains("toggle")){
    tricart.style.display="none";
} else {
    tricart.style.display="block";
} */



