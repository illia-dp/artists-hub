const menu = document.querySelector('.mobile-menu');
const open = document.querySelector('.js-mobile-menu');
const close = document.querySelector('.js-mobile-close-menu');
const backdrop = document.querySelector('.js-mobile-backdrop');

function openMenu() {
  menu.classList.add('is-open');
  backdrop.classList.add('is-active');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  menu.classList.remove('is-open');
  backdrop.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
}

open.onclick = openMenu;
close.onclick = closeMenu;
backdrop.onclick = closeMenu;

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

menu.querySelectorAll('a[href^="#"]').forEach(link => {
  link.onclick = closeMenu;
});
