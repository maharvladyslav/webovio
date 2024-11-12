'use strict';

document.addEventListener('scroll', function () {
  // WORK

  const work = document.querySelectorAll('.work');

  work.forEach(work => {
    const workTop = work.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (workTop < windowHeight - 50) {
      work.classList.add('visible');
    }
  });

  //   PROJECTS

  const project = document.querySelectorAll('.projects ');

  project.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (projectTop < windowHeight - 50) {
      project.classList.add('visible');
    }
  });

  //   START

  const start = document.querySelectorAll('.start ');

  start.forEach(start => {
    const startTop = start.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (startTop < windowHeight - 50) {
      start.classList.add('visible');
    }
  });
});
