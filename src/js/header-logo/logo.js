document.querySelectorAll('.logo-icon').forEach(logo => {
    logo.addEventListener('click', event => {
      const currentPage = window.location.pathname;
      const isIndexPage = currentPage.endsWith('index.html') || currentPage === '/' || currentPage === '';
      if (isIndexPage) {
        event.preventDefault();
      }
    });
  });