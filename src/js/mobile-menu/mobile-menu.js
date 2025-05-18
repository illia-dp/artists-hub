/* Mobile menu open */
document.addEventListener('DOMContentLoaded', () => {
  function initializeMobileMenu() {
    const openMenuBtn = document.querySelector('.js-mobile-menu');
    const closeMenuBtn = document.querySelector('.js-mobile-close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-mobile-overlay');
    const menuLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');

    if (!openMenuBtn || !closeMenuBtn || !mobileMenu || !overlay) {
      console.error('One or more mobile menu elements not found. Ensure selectors .js-mobile-menu, .js-mobile-close-menu, .mobile-menu, and .menu-mobile-overlay exist.');
      return;
    }

    const openMobileMenu = () => {
      mobileMenu.classList.add('is-open');
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      mobileMenu.removeAttribute('inert');
      mobileMenu.hidden = false;
    };

    const closeMobileMenu = () => {
      mobileMenu.classList.remove('is-open');
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
      mobileMenu.setAttribute('inert', '');
      mobileMenu.hidden = true;
    };

    openMenuBtn.addEventListener('click', openMobileMenu);

    closeMenuBtn.addEventListener('click', closeMobileMenu);

    overlay.addEventListener('click', closeMobileMenu);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    mobileMenu.setAttribute('inert', '');
    mobileMenu.hidden = true;
  }

  initializeMobileMenu();
});