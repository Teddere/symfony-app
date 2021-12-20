let searchBtn=document.querySelector('#search');
let searchBar=document.querySelector('.search_bar_contenair');
let formBtn=document.querySelector('#user');
let loginForm=document.querySelector('.loginContenair');
let formClose=document.querySelector('#form_close');

let menuBtn=document.querySelector('#menu_bar');

let navBar=document.querySelector('.navbar');
let imgBten=document.querySelectorAll('.vid_btn');
// Important***
window.onscroll = ()=>{
    searchBtn.classList.remove('bx-x');
    searchBar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('bx-x');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});
menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
},false);
imgBten.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.carousels .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#img_slider').src=src;
    });
});
var commentaire = new Swiper(".itemCommit", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
});
var swiper = new Swiper(".patenair-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        }
    }
});

