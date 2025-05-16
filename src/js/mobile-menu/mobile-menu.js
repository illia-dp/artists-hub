/* Mobile menu open */
document.querySelectorAll('.js-mobile-menu').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.mobile-menu').classList.toggle('is-open');
    });
  });