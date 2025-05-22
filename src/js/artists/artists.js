import {
  createArtistsMarkup,
  hideLoader,
  showLoader,
  artistsList,
  renderGenres,
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
const btnOpenGenres = document.querySelector('.js-open-genres-list');
const genresTitleWrapper = document.querySelector('.genres-title-wrapper');
const genreListElem = document.querySelector('.artists-genre-list');

let totalArtists = 0;
let limit = 1;
let maxPage = 1;
let inputData = '';
let currentPage = 1;
let currentOption = '';
let currentGenre = '';

let data;

//! THE MAIN FUNCTION FOR GETTING AND RENDERING ARTISTS
async function showArtistsOnPage(pageFromPagination) {
  try {
    showLoader();

    if (pageFromPagination) {
      currentPage = pageFromPagination;
      setCurrentPage(currentPage);
    }

    //query parameters
    const params = {
      name: inputData || undefined,
      sortName: currentOption || undefined,
      genre: currentGenre || undefined,
    };

    data = await getArtists(params.name, params.sortName, params.genre);

    if (!data.artists.length) {
      searchFormElem.reset();
      iziToast.warning({
        message: 'Sorry, but no artist was found for your query',
        position: 'center',
      });
      return;
    }

    //for pagination
    totalArtists = data.totalArtists;
    limit = data.limit;
    maxPage = Math.ceil(totalArtists / limit);

    artistsList.innerHTML = '';
    createArtistsMarkup(data.artists);

    // !!----------Scroll----------!!

    resetCustomPagination();

    paginationContainer.style.display = totalArtists > limit ? 'flex' : 'none';
    if (totalArtists > limit) {
      initCustomPagination(totalArtists, limit, currentPage, showArtistsOnPage);
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'center',
    });
  } finally {
    hideLoader();
  }
}

//todo START PAGE LOADING
window.addEventListener('DOMContentLoaded', () => {
  handleResponsiveView();
  requestIdleCallback(() => showArtistsOnPage());
});

//-------------------SEARCH BY NAME--------------------------
searchFormElem.addEventListener('submit', async event => {
  event.preventDefault();
  setCurrentPage(1);
  currentPage = 1;

  inputData = event.target.elements.search.value.trim().toLowerCase();
  currentOption = getSelectedSortOption();
  currentGenre = getSelectedGenre();

  if (!inputData && !currentOption && !currentGenre) {
    iziToast.warning({
      message: 'The input field is empty. Try again',
      position: 'center',
    });
    return;
  }

  artistsList.innerHTML = '';
  showArtistsOnPage(currentPage);
  searchFormElem.reset();
  clickOnSearchBtn();
});

// click on search btn to hide search panel
function clickOnSearchBtn() {
  const isSortingOpen = sortingOptionsElem.classList.contains('is-open');
  const isGenresListOpen = genreListElem.classList.contains('is-open');

  btnOpenGenres.classList.remove('up-btn');
  btnOpenSorting.classList.remove('up-btn');

  if (isSortingOpen) {
    sortingOptionsElem.classList.remove('is-open');
    document.querySelector('.sorting-wrap').classList.remove('is-open');
  }

  if (isGenresListOpen) {
    genreListElem.classList.remove('is-open');
    genresTitleWrapper.classList.remove('border-bottom');
  }

  if (window.innerWidth < 1440) {
    overflowBoxElem.classList.remove('is-open');
  }
}

//--------------- SELECTED OPTIONS -----------------------
function getSelectedSortOption() {
  return document.querySelector('input[name="sort"]:checked')?.value || '';
}

function getSelectedGenre() {
  return document.querySelector('input[name="genre"]:checked')?.value || '';
}

//open filter
btnOpenFilter.addEventListener('click', () => {
  toggleClass(btnOpenFilter, 'up-btn');
  overflowBoxElem.classList.toggle('is-open');
});

//open sorting
btnOpenSorting.addEventListener('click', () => {
  toggleClass(btnOpenSorting, 'up-btn');
  sortingOptionsElem.classList.toggle('is-open');
  document.querySelector('.sorting-wrap').classList.toggle('is-open');
});

// open genres
btnOpenGenres.addEventListener('click', async () => {
  btnOpenGenres.classList.toggle('up-btn');
  toggleClass(genreListElem, 'is-open');

  genresTitleWrapper.classList.toggle(
    'border-bottom',
    btnOpenGenres.classList.contains('up-btn')
  );

  if (btnOpenGenres.classList.contains('up-btn')) {
    await renderGenres();
  }
});

// change class
function toggleClass(element, jsClass) {
  element.classList.toggle(jsClass);
}

window.addEventListener('resize', handleResponsiveView);

function handleResponsiveView() {
  overflowBoxElem.classList.toggle('is-open', window.innerWidth >= 1440);
}
