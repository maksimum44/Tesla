$(function(){
$('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true,
});

$('.header-btn').on('click', function(){
    $('.menu, .header-content, .header-top').addClass('active');
});

$('.close-btn').on('click', function(){
    $('.menu, .header-content, .header-top').removeClass('active');
});


});