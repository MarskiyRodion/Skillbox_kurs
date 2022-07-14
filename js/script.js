// burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  menu.classList.add('header__nav--visible');
});
