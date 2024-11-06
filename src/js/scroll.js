'use strict';

let lastScrollTop = 0;

const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  const scrollTop = this.window.pageYOffset;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-80px';
  } else {
    header.style.top = '25px';
  }
});