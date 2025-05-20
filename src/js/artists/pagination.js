import { setCurrentPage } from './artists-api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import '../../css/pagination.css';

let pagination = null;
let onPageChangeCallback = null;

export function initPagination(
  totalItems,
  itemsPerPage,
  currentPage = 1,
  onPageChange
) {
  const container = document.getElementById('tui-pagination-container');
  onPageChangeCallback = onPageChange;

  if (pagination) {
    pagination.reset(totalItems);
    pagination.movePageTo(currentPage);
    return;
  }
  pagination = new Pagination(container, {
    totalItems,
    itemsPerPage,
    visiblePages: 3,
    centerAlign: true,
    page: currentPage,
    template: template,
  });

  pagination.on('afterMove', event => {
    const page = event.page;
    setCurrentPage(page);
    if (typeof onPageChange === 'function') {
      onPageChange(page);
    }
  });
}

export function resetPagination() {
  const container = document.getElementById('tui-pagination-container');
  if (pagination) {
    pagination.reset(0);
    container.innerHTML = '';
    pagination = null;
  }
}

const template = page => {
  if (page === 'prev') {
    return `<a href="#" class="tui-page-btn tui-prev">
              <svg width="24" heirht="24"><use href="../img/sprite.svg#icon-left-arrow-alt"></use></svg>
            </a>`;
  }
  if (page === 'next') {
    return `<a href="#" class="tui-page-btn tui-next">
              <svg width="24" heirht="24"><use href="../img/sprite.svg#icon-right-arrow-alt"></use></svg>
            </a>`;
  }
  if (page === 'ellipsis') {
    return `<span class="tui-ellipsis">...</span>`;
  }
  return `<a href="#" class="tui-page-btn">${page}</a>`;
};
