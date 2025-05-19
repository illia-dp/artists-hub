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
    prevArrow: `
    <button class="tui-prev custom-btn" type="button">
      <svg class="icon-next" width="24" height="24">
        <use href="/sprite.svg#icon-left-arrow-alt"></use>
      </svg>
    </button>
  `,
    nextArrow: `
    <button class="tui-next custom-btn" type="button">
      <svg class="icon-next" width="24" height="24">
        <use href="/sprite.svg#icon-right-arrow-alt"></use>
      </svg>
    </button>
  `,
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
