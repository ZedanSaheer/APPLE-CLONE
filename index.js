
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
const menu = document.querySelector(".nav-mobile");
const classesmenu = menu.classList;
const result = classesmenu.contains("active");
const answer = cart.classList.remove("toggle");


toggle.addEventListener('click',()=>{
    cart.classList.toggle("toggle");
})

toggle.addEventListener('click',()=>{
    tricart.classList.toggle("toggle");
})

document.querySelector('.menuforresponsive').addEventListener('click',()=>{
    cart.classList.remove("toggle");
})

 var searchfortablet = document.querySelector(".searchnav").addEventListener;
var searchtargetclass= document.querySelector(".searchbarsmallmenu");
var closesearchbutton = document.querySelector(".cbf").addEventListener;

 function search(){
      searchtargetclass.classList.toggle('active');
       document.querySelector(".textf").classList.toggle('active');
        document.querySelector(".cbf").classList.toggle('active');
        document.querySelector(".whitecont").classList.toggle('active');
        document.querySelector(".searchpagecont").classList.toggle("active");
        document.querySelector(".opp").classList.toggle("active");
        document.querySelector(".parasp").classList.toggle("active");
        let list=document.querySelectorAll('.searchpageul li');
        for(i=0;i<list.length;i++){
            list[i].classList.toggle('active');
        }
 }






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

