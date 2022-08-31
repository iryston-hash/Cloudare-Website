const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn__close-modal');
const btnsOpenModal = document.querySelectorAll('.header__slider-btn');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie
const header = document.querySelector('.header');
const cookieMsg = document.createElement('div');
cookieMsg.classList.add('cookie-message');
cookieMsg.innerHTML = `Website is using cookies for User experience purposes. Personal information is not gathered.<button class="btn btn--close-cookie">Dismiss</button>`;
header.prepend(cookieMsg);
const cookieMsgClose = document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    cookieMsg.remove();
  });
cookieMsg.style.color = 'yellow';


// Jquery , Slider
$(function () {
  $('.header__slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'progressive',
    responsive: true,
    dotsClass: 'header-dots',
  });

  $('.menu__btn').on('click', function () {
    $('.header__menu-list').slideToggle();
  });
});
// Arrow :)
$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});
