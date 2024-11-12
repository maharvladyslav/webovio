'use strict';

let lastScrollTop = 0;

const logo = document.querySelector('.header');
const container = document.querySelector('.header__container');
const menu = document.querySelector('.nav-container');
const rect = menu.getBoundingClientRect();

window.addEventListener('scroll', function () {
  const scrollTop = this.window.scrollY;

  if (scrollTop > lastScrollTop) {
    logo.style.top = '-80px';
    container.style.flexDirection = 'row-reverse';
    menu.style.position = 'fixed';
    menu.style.top = '25px';
  } else {
    logo.style.top = '25px';
    container.style.flexDirection = 'row';
    menu.style.position = 'relative';
    menu.style.top = '0';
  }
});
