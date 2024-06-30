window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');


	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
		price_btn.classList.toggle('is-active');
	});

	document.querySelectorAll('.price-btn').forEach((btn) => {
		btn.addEventListener('click', () => {
		  document.querySelectorAll('.price-btn').forEach((btn) => btn.classList.remove('clicked'));
		  btn.classList.add('clicked');
		});
	  });

	// const price_btn = document.querySelector('.price-btn');


	// price_btn.addEventListener('click', function () {
	// 	price_btn.classList.toggle('is-active');
	// });

	// const price_btn2 = document.querySelector('.price-btn2'); 


	// price_btn2.addEventListener('click', function () {
	// 	price_btn2.classList.toggle('is-active');
	// });

	// const price_btn3 = document.querySelector('.price-btn3');


	// price_btn3.addEventListener('click', function () {
	// 	price_btn3.classList.toggle('is-active');
	// });


}