$(document).ready(function(){
    $('header nav').meanmenu({
        meanMenuOpen:'<span></span><span></span><span></span>',
        meanScreenWidth:'780',
    });
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
    });
  });