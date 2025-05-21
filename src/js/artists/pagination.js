import { setCurrentPage } from './artists-api';
import '../../css/pagination.css';

let currentPage = 1;
let totalPages = 1;
let onPageChangeCallback = null;
let isMobile = window.innerWidth < 768;

export function initCustomPagination(
  totalItems,
  itemsPerPage,
  startPage = 1,
  onPageChange
) {
  const container = document.getElementById('custom-pagination');
  container.innerHTML = '';
  totalPages = Math.ceil(totalItems / itemsPerPage);
  currentPage = startPage;
  onPageChangeCallback = onPageChange;

  renderPagination(container);
  window.addEventListener('resize', handleResize);
}

function handleResize() {
  const newIsMobile = window.innerWidth < 768;

  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    renderPagination(document.getElementById('custom-pagination'));
  }
}

export function resetCustomPagination() {
  const container = document.getElementById('custom-pagination');
  container.innerHTML = '';
}

function renderPagination(container) {
  container.innerHTML = '';

  const pegesList = document.createElement('div');
  pegesList.setAttribute('role', 'navigation');
  pegesList.setAttribute('aria-label', 'Pagination');
  pegesList.className = 'pagination-wrapper';

  pegesList.appendChild(createArrow('prev'));

  const pages = getVisiblePages(currentPage, totalPages, isMobile);

  pages.forEach(p => {
    if (p === '...') {
      const dots = document.createElement('span');
      dots.className = 'pagination-dots';
      dots.textContent = '...';
      pegesList.appendChild(dots);
    } else {
      const btn = document.createElement('button');
      btn.textContent = p;
      btn.className = 'pagination-btn';
      btn.setAttribute('aria-label', `Go to page ${p}`);

      if (isMobile || p !== currentPage) {
        btn.setAttribute('tabindex', '-1');
      } else {
        btn.setAttribute('tabindex', '0');
      }

      if (p === currentPage) {
        btn.classList.add('active');
      }
      btn.addEventListener('click', () => {
        currentPage = p;
        setCurrentPage(currentPage);
        renderPagination(container);
        onPageChangeCallback(currentPage);
      });
      pegesList.appendChild(btn);
    }
  });

  pegesList.appendChild(createArrow('next'));

  container.appendChild(pegesList);
}

function createArrow(direction) {
  const btn = document.createElement('button');
  btn.className = `pagination-arrow ${direction}`;
  const iconId =
    direction === 'prev'
      ? '/artists-hub/assets/sprite-c2qr3u0C.svg#icon-left-arrow-alt'
      : '/artists-hub/assets/sprite-c2qr3u0C.svg#icon-right-arrow-alt';

  btn.innerHTML = `
      <svg class="pagination-icon" width="24" height="24" aria-hidden="true">
        <use href="${iconId}"></use>
      </svg>
    `;

  btn.setAttribute(
    'aria-label',
    direction === 'prev' ? 'Previous page' : 'Next page'
  );

  btn.disabled =
    (direction === 'prev' && currentPage === 1) ||
    (direction === 'next' && currentPage === totalPages);

  btn.addEventListener('click', () => {
    currentPage += direction === 'prev' ? -1 : 1;
    setCurrentPage(currentPage);
    renderPagination(document.getElementById('custom-pagination'));
    onPageChangeCallback(currentPage);
  });

  return btn;
}

function getVisiblePages(current, total, isMobile) {
  const pages = [];

  if (total <= 3) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  if (isMobile) {
    if (total === 4) {
      pages.push(current === 1 || current === 2 ? current : current - 2);
      pages.push('...');
      pages.push(
        current === 1
          ? current + 2
          : current === 2
          ? current + 1
          : current === 3
          ? current
          : current - 1
      );
      pages.push(
        current === 1
          ? current + 3
          : current === 2
          ? current + 2
          : current === 3
          ? current + 1
          : current
      );
    } else if (total === 5) {
      pages.push(current === 1 || current === 2 ? current : current - 2);
      pages.push('...');
      pages.push(
        current === 1
          ? current + 2
          : current === 2
          ? current + 1
          : current === 3
          ? current
          : current === 4
          ? current
          : current - 1
      );
      pages.push('...');
      pages.push(
        current === 1
          ? current + 4
          : current === 2
          ? current + 3
          : current === 3
          ? current + 2
          : current === 4
          ? current + 1
          : current
      );
    } else {
      // Mobile
      pages.push(current === 1 || current === 2 ? current : current - 2);
      if (current + 2 <= total) pages.push('...');
      pages.push(
        current === 1 ? current + 2 : current === 2 ? current + 1 : current
      );
      if (current + 6 <= total) pages.push('...');
      pages.push(
        current === 1 ? current + 6 : current === 2 ? current + 5 : current + 4
      );
    }
    return pages;
  } else {
    // PC
    pages.push(
      current === 1 ? current : current === 2 ? current - 1 : current - 2
    );
    pages.push(
      current === 1 ? current + 1 : current === 2 ? current : current - 1
    );
    pages.push(
      current === 1 ? current + 2 : current === 2 ? current + 1 : current
    );
    if (current + 3 <= total) pages.push('...');
    pages.push(
      current === 1 ? current + 6 : current === 2 ? current + 5 : current + 4
    );
  }

  return [...new Set(pages)]
    .filter(p => (typeof p === 'number' ? p >= 1 && p <= total : true))
    .sort((a, b) =>
      typeof a === 'number' && typeof b === 'number' ? a - b : 0
    );
}
