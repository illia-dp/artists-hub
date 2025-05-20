import {
  createArtistsMarkup,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
  btnLoadMoreElem,
  scrollWin,
  artistsList,
} from './create-markup-artists';
import { getArtists, getCurrentPage, setCurrentPage } from './artists-api';
import iziToast from 'izitoast';

const btnOpenFilter = document.querySelector('.js-open-filter');
const btnOpenSorting = document.querySelector('.js-open-sorting');
const overflowBoxElem = document.querySelector('.js-overflow-box');
const sortingOptionsElem = document.querySelector('.sorting-options-wrap');

const searchFormElem = document.querySelector('.js-search-form');

let totalArtists = 0;
let limit = 1;
let maxPage;
let liElem;
let heightScroll = 0;
let inputData = '';
let currentPage = 1;
let currentOption = '';
let data;

// the main function for getting and rendering artists
async function showArtistsOnPage() {
  try {
    showLoader();
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

    createArtistsMarkup(data.artists);

    //don't show button if the last page
    if (currentPage === maxPage) {
      return;
    } else {
      showLoadMoreButton();
    }

    liElem = document.querySelector('.artists-item');
    heightScroll = liElem.getBoundingClientRect().height;
  } catch (error) {
    throw new Error();
  } finally {
    hideLoader();
  }
}
// START PAGE LOADING
handleResponsiveView();
showArtistsOnPage();

//-------------------  LOAD MORE -----------------------------

btnLoadMoreElem.addEventListener('click', async () => {
  if (currentPage === maxPage) {
    hideLoadMoreButton();
    return;
  }

  hideLoadMoreButton();
  showLoader();

  const page = getCurrentPage();
  setCurrentPage(page + 1);
  currentPage += 1;

  await showArtistsOnPage();
  hideLoader();
  scrollWin(0, heightScroll); //Scroll down
});

//-------------------SEARCH BY NAME--------------------------
searchFormElem.addEventListener('submit', async event => {
  event.preventDefault();
  hideLoadMoreButton();
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
  showArtistsOnPage();
  searchFormElem.reset();
});

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
});

// CHANGE CLASS

function toggleClass(element, jsClass) {
  element.classList.toggle(jsClass);
}

//---------------------------------------------------------------

window.addEventListener('resize', handleResponsiveView);

function handleResponsiveView() {
  if (window.innerWidth === 1440) {
    overflowBoxElem.classList.add('is-open');
  } else {
    overflowBoxElem.classList.remove('is-open');
  }
}
