const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');

$(document).ready(function(){
   $('.slider').slick({
      // autoplay: true,
      // arrows: false,
      dots: true,
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