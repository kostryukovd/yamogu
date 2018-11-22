
	
	//$('.burger-button').click(function(){
		$('.hamburger').click(function(){
		console.log('click');
		//$('.burger-menu').slideDown();

		$('.hamburger').toggleClass('is-active');
		$('.burger-menu').toggleClass('burger-menu_show');
		$('.header-shadow').toggleClass('header-shadow_show');
		/*if ($('.header-shadow').is(':visible')) { $('.header-shadow').fadeTo(2,0);

} else {
	$('.header-shadow').fadeTo(2,0.5);
}*/

});
