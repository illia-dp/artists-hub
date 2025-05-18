import {
  createArtistsMarkup,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
  btnLoadMoreElem,
  scrollWin,
} from './create-markup-artists';
import { getArtists, getCurrentPage, setCurrentPage } from './artists-api';
import iziToast from 'izitoast';

const searchFormElem = document.querySelector('.js-search-form');

let totalArtists = 0;
let liElem;
let heightScroll = 0;

async function showArtistsOnPage() {
  try {
    showLoader();
    const data = await getArtists();
    totalArtists = data.totalArtists;

    if (data.artists.length === 0) {
      iziToast.warning({
        message: 'Sorry, but no artists were found',
        position: 'center',
      });
    }

    createArtistsMarkup(data.artists);
    liElem = document.querySelector('.artists-item');
    heightScroll = liElem.getBoundingClientRect().height;

    const page = getCurrentPage();
    let maxPage = Math.ceil(totalArtists / page);

    if (page === maxPage) {
      hideLoadMoreButton();
      return;
    }

    showLoadMoreButton();
  } catch (error) {
    iziToast.warning({
      message: 'Sorry, but no artists were found',
      position: 'center',
    });
  } finally {
    hideLoader();
  }
}

showArtistsOnPage();

btnLoadMoreElem.addEventListener('click', async () => {
  hideLoadMoreButton();
  const page = getCurrentPage();
  setCurrentPage(page + 1);

  showLoader();

  await showArtistsOnPage();
  hideLoader();
  scrollWin(0, heightScroll);
});

//---------------------------------------------------------------
searchFormElem.addEventListener('submit', e => {
  e.preventDefault();
  const inputData = e.target.elements.search.value.trim().toLowerCase();
  console.log(inputData);
});
