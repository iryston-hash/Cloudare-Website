$(function(){
    $('.header__slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        lazyLoad: 'progressive',
        responsive: true,
        dotsClass: 'header-dots',
    });
});