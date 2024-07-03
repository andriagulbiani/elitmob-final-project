window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector(".scroll-button").classList.add('is-scrolling');
		} else {
			document.querySelector(".scroll-button").classList.remove('is-scrolling');
		}
	});


	

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
	const header_btn = document.querySelector('.header')


	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
		header_btn.classList.toggle('is-active');
	});

	document.querySelectorAll('.price-btn').forEach((btn) => {
		btn.addEventListener('click', () => {
		  document.querySelectorAll('.price-btn').forEach((btn) => btn.classList.remove('clicked'));
		  btn.classList.add('clicked');
		});
	  });



	  

}