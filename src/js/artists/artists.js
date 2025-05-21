import {
  createArtistsMarkup,
  hideLoader,
  showLoader,
  artistsList,
  scrollToArtistsList,
} from './create-markup-artists';
import { getArtists, setCurrentPage } from './artists-api';
import { initCustomPagination, resetCustomPagination } from './pagination';
import iziToast from 'izitoast';

const btnOpenFilter = document.querySelector('.js-open-filter');
const btnOpenSorting = document.querySelector('.js-open-sorting');
const overflowBoxElem = document.querySelector('.js-overflow-box');
const sortingOptionsElem = document.querySelector('.sorting-options-wrap');
const paginationContainer = document.getElementById('custom-pagination');
const searchFormElem = document.querySelector('.js-search-form');

let totalArtists = 0;
let limit = 1;
let maxPage = 1;
let inputData = '';
let currentPage = 1;
let currentOption = '';
let data;

// the main function for getting and rendering artists
async function showArtistsOnPage(pageFromPagination) {
  try {
    showLoader();

    if (pageFromPagination) {
      currentPage = pageFromPagination;
      setCurrentPage(currentPage);
    }

    if (!inputData) {
      data = await getArtists(); // all
    } else if (!currentOption) {
      data = await getArtists(inputData); // without sorting
    } else {
      data = await getArtists(inputData, currentOption); // with sorting
    }

    if (data.artists.length === 0) {
      searchFormElem.reset();
      iziToast.warning({
        message: 'Sorry, but no artist was found for your query',
        position: 'center',
      });
      inputData = '';
      data = await getArtists();
    }

    //for pagination
    totalArtists = data.totalArtists;
    limit = data.limit;
    maxPage = Math.ceil(totalArtists / limit);

    artistsList.innerHTML = '';

    createArtistsMarkup(data.artists);

    // !!----------Scroll----------!!
    scrollToArtistsList();

    resetCustomPagination();

    if (totalArtists > limit) {
      paginationContainer.style.display = 'flex';
      initCustomPagination(totalArtists, limit, currentPage, showArtistsOnPage);
    } else {
      paginationContainer.style.display = 'none';
    }
  } catch (error) {
    throw new Error();
  } finally {
    hideLoader();
  }
}
// START PAGE LOADING
handleResponsiveView();
showArtistsOnPage();

// ---------------------Lazy loading------------------------
// window.addEventListener('DOMContentLoaded', () => {
//   handleResponsiveView();

//   requestIdleCallback(() => {
//     showArtistsOnPage();
//   });
// });

//-------------------SEARCH BY NAME--------------------------
searchFormElem.addEventListener('submit', async event => {
  event.preventDefault();
  setCurrentPage(1);
  currentPage = 1;

  currentOption = getSelectedSortOption();

  inputData = event.target.elements.search.value.trim().toLowerCase();
  if (!inputData) {
    iziToast.warning({
      message: 'The input field is empty. Try again',
      position: 'center',
    });
    return;
  }
  artistsList.innerHTML = '';
  setCurrentPage(currentPage);
  showArtistsOnPage(currentPage);
  searchFormElem.reset();

  clickOnSearchBtn();
});

// click on search btn to hide search panel
function clickOnSearchBtn() {
  const isSortingOpen = sortingOptionsElem.classList.contains('is-open');

  if (isSortingOpen) {
    sortingOptionsElem.classList.toggle('is-open');
    document.querySelector('.sorting-wrap').classList.toggle('is-open');
  }

  if (window.innerWidth < 1440) {
    overflowBoxElem.classList.remove('is-open');
  }
}

//--------------- SELECTED OPTIONS -----------------------
function getSelectedSortOption() {
  const selectedOption = document.querySelector('input[name="sort"]:checked');
  return selectedOption?.value || '';
}

// OPEN FILTER

btnOpenFilter.addEventListener('click', () => {
  toggleClass(btnOpenFilter, 'up-btn');
  overflowBoxElem.classList.toggle('is-open');
});

// OPEN SORTING
btnOpenSorting.addEventListener('click', () => {
  toggleClass(btnOpenSorting, 'up-btn');
  sortingOptionsElem.classList.toggle('is-open');
  document.querySelector('.sorting-wrap').classList.toggle('is-open');
});

// CHANGE CLASS

function toggleClass(element, jsClass) {
  element.classList.toggle(jsClass);
}

//---------------------------------------------------------------

window.addEventListener('resize', handleResponsiveView);

function handleResponsiveView() {
  if (window.innerWidth >= 1440) {
    overflowBoxElem.classList.add('is-open');
  } else {
    overflowBoxElem.classList.remove('is-open');
  }
}
