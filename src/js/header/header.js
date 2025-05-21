let lastScrollTop = 0;
const header = document.querySelector('.page-header');

window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
