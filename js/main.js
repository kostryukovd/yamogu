
	
	//$('.burger-button').click(function(){
		$('.hamburger').click(function(){
		console.log('click');
		//$('.burger-menu').slideDown();

		$('.hamburger').toggleClass('is-active');
		$('.burger-menu').toggleClass('burger-menu_show');
		$('.header-shadow').toggleClass('header-shadow_show');
		$('body').toggleClass('scroll-disable');
		/*if ($('.header-shadow').is(':visible')) { $('.header-shadow').fadeTo(2,0);

} else {
	$('.header-shadow').fadeTo(2,0.5);
}*/

});



var hidden;
var displayed;
var active_tab;
var inactive_tab;

$('.card-detail__switch-content').each(function(){

	if($(this).hasClass('card-detail__switch-content_hidden')) {
		hidden = $(this);
	} else { displayed = $(this)}

});

$('.card-detail__switch-item').each(function(){

	if($(this).hasClass('card-detail__switch-item_active')) {
		active_tab = $(this);
	} else { inactive_tab = $(this)}

});


	$('.card-detail__switch-item').click(function(){

		if (!($(this).hasClass('card-detail__switch-item_active'))){
			console.log('active');
			//displayed.css('display','none');
			//hidden.css('display','block');
			displayed.toggleClass('card-detail__switch-content_hidden');
			hidden.toggleClass('card-detail__switch-content_hidden');
			active_tab.toggleClass('card-detail__switch-item_active');
			inactive_tab.toggleClass('card-detail__switch-item_active');
		}

	});

