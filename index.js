
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

const acc = document.querySelectorAll(".accordianbutton");

acc.forEach((acc) => {
    acc.addEventListener('click',()=>
    acc.nextElementSibling.classList.toggle('active'));
})

