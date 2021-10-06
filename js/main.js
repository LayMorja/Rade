const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
const arrow = document.querySelectorAll('.arrow');

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

if(isMobile.any()){
		body.classList.add('touch');
	for(i = 0; i < arrow.length; i++){
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];
			thisLink.classList.add('parent');

		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

$(document).ready(function(){
   $('.slider').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      pauseOnHover: false
   });
});


iconMenu.addEventListener('click', function() {
   iconMenu.classList.toggle('active');
   menuBody.classList.toggle('active');
   body.classList.toggle('lock');
})