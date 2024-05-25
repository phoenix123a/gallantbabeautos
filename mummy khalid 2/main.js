let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

let menu = document.querySelector('.menu-box');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
}

//hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    
}

//header
let header = document.querySelector('header')

window.addEventListener('scroll' , () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});