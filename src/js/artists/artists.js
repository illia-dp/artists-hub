import {
  createArtistsMarkup,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
  btnLoadMoreElem,
} from './create-markup-artists';
import { getArtists, getCurrentPage, setCurrentPage } from './artists-api';
import iziToast from 'izitoast';

let totalArtists = 0;

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
  const page = getCurrentPage();
  setCurrentPage(page + 1);

  showLoader();

  await showArtistsOnPage();
  hideLoader();
});

//---------------------------------------------------------------
