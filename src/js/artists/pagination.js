import { setCurrentPage } from './artists-api';
import '../../css/pagination.css';

let currentPage = 1;
let totalPages = 1;
let onPageChangeCallback = null;

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
}

export function resetCustomPagination() {
  const container = document.getElementById('custom-pagination');
  container.innerHTML = '';
}

function renderPagination(container) {
  container.innerHTML = '';

  const pegesList = document.createElement('div');
  pegesList.className = 'pagination-wrapper';

  pegesList.appendChild(createArrow('prev'));

  const isMobile = window.innerWidth < 768;
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

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }
  // Mobile
  if (isMobile) {
    const page2 = current + 2;
    const page6 = current + 6;

    pages.push(current);

    if (page2 <= total) {
      if (page2 - current > 1) {
        pages.push('...');
      }
      pages.push(page2);
    }

    if (page6 <= total) {
      if (page6 - page2 > 1) {
        pages.push('...');
      }
      pages.push(page6);
    }
  } else {
    // PC
    pages.push(current);

    if (current + 1 <= total) pages.push(current + 1);
    if (current + 2 <= total) pages.push(current + 2);

    if (current + 3 < current + 6 && current + 3 < total) {
      pages.push('...');
    }

    if (current + 6 <= total) {
      pages.push(current + 6);
    } else if (current + 3 <= total) {
      pages.push(total);
    }
  }

  return [...new Set(pages)]
    .filter(p => (typeof p === 'number' ? p >= 1 && p <= total : true))
    .sort((a, b) =>
      typeof a === 'number' && typeof b === 'number' ? a - b : 0
    );
}
