$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    loop:true,
   
    nav:true,
    items:1,
    navText:['<img src = "img/arrow_prev.svg">','<img src = "img/arrow_next.svg">']
});

$('.card-detail__carousel').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{enabled:true},
  closeBtnInside: false,
  modal: true
  // other options
});

});


