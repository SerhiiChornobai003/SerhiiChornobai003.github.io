const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.left = '0';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.style.left = '-300px';
    menuOpen = false;
  }
});