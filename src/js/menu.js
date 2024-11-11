'use strict';

const menu = document.querySelector('.nav__menu');
const btn = document.querySelector('.burger-container');

btn.addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('active');
  menu.classList.toggle('open');
  document.querySelector('body').classList.toggle('no-scroll');
  document.querySelector('.nav__menu').classList.toggle('active');
  document.querySelector('.burger-container').classList.toggle('active');
});
