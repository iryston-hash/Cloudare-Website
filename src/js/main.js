$(function(){
    $('.header__slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        // autoplay: true,
        lazyLoad: 'progressive',
        responsive: true,
        dotsClass: 'header-dots',
    });

    $('.menu__btn').on('click', function(){
        $('.header__menu-list').slideToggle();
    });
});