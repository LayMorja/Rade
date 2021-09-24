const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
const menuItem = document.querySelector('.menu__item');
const menuList = document.querySelector('.menu__list');

$(document).ready(function(){
   $('.slider').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: false,
      pauseOnHover: false,
      slidesToShow: 1,
      draggable: false
   });
});


iconMenu.addEventListener('click', function() {
   iconMenu.classList.toggle('active');
   menuBody.classList.toggle('active');
   body.classList.toggle('lock');
})

menuItem.addEventListener('click', function() {
   menuList.classList.toggle('active');
})