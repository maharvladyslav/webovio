'use strict';

const menu = document.querySelector('.nav__menu');
const btn = document.querySelector('.burger');

btn.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('open');
  document.querySelector('body').classList.toggle('no-scroll');
  document.querySelector('.nav__menu').classList.toggle('active');
  document.querySelector('.burger-container').classList.toggle('active');
});
