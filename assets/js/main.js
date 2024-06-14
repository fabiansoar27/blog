// FILTRO PARA POSTS
$(document).ready(function(){
	$('.filter-item').click(function(){
		const value = $(this).attr('data-filter');
		if (value == 'todo') {
			$('.post-box').show('1000');
		} else {
			$('.post-box')
				.not('.' + value)
				.hide('1000');
			$('.post-box')
			.filter('.' + value)
			.show('1000');
		}
	});
	//AÑADIR ACTIVO A BOTÓN
	$(".filter-item").click(function () {
		$(this).addClass("active-filter").siblings().removeClass("active-filter");
	});
});
//FONDO DE ENCABEZADO
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
	header.classList.toggle("shadow", window.scrollY > 0);
});