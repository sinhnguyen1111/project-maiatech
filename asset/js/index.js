
var btn = document.querySelector('.mobile-nav');
var nav = document.querySelector('.header-nav');
var btn_close=document.querySelector('.btn-close');
var overlay = document.querySelector('.overlay-mobile');

btn.onclick = function(){
    nav.style.display='block';
    overlay.style.display='block';
};

btn_close.onclick = function (){
    nav.style.display='none';
    overlay.style.display='none';
}
