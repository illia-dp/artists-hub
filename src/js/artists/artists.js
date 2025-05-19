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

const searchFormElem = document.querySelector('.js-search-form');

let totalArtists = 0;
let limit = 1;
let maxPage;
let liElem;
let heightScroll = 0;
let inputData = '';
let currentPage = 1;

async function showArtistsOnPage() {
  let data;
  try {
    showLoader();
    if (!inputData) {
      data = await getArtists();
    } else {
      data = await getArtists(inputData);
    }

    if (data.artists.length === 0) {
      searchFormElem.reset();
      iziToast.warning({
        message: 'Sorry, but no artists were found',
        position: 'center',
      });
      data = await getArtists();
    }

    totalArtists = data.totalArtists;
    limit = data.limit;
    maxPage = Math.ceil(totalArtists / limit);

    createArtistsMarkup(data.artists);

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

showArtistsOnPage();

//-------------------  LOAD MORE -----------------------------

btnLoadMoreElem.addEventListener('click', async () => {
  if (currentPage === maxPage) {
    console.log('ok');
    hideLoadMoreButton();
    return;
  } else {
    showLoadMoreButton();
  }

  hideLoadMoreButton();
  showLoader();

  const page = getCurrentPage();
  setCurrentPage(page + 1);
  currentPage += 1;

  await showArtistsOnPage();
  hideLoader();
  scrollWin(0, heightScroll);
});

//-------------------SEARCH BY NAME--------------------------
searchFormElem.addEventListener('submit', async event => {
  hideLoadMoreButton();
  event.preventDefault();
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
