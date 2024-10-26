'use strict';

const menu = document.querySelector('.nav__menu');
const btn = document.querySelector('.burger');

btn.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('open');
  document.querySelector('.nav__menu').classList.toggle('active');
});
