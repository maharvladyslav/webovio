'use strict';

let lastScrollTop = 0;

const logo = document.querySelector('.header__logo');

window.addEventListener('scroll', function () {
  const scrollTop = this.window.scrollY;

  if (scrollTop > lastScrollTop) {
    logo.style.top = '-80px';
  } else {
    logo.style.top = '0';
  }
});
