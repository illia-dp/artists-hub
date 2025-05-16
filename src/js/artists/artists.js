import {
  createArtistsMarkup,
  hideLoader,
  showLoader,
} from './create-markup-artists';
import { getArtists, getCurrentPage, setCurrentPage } from './artists-api';
import iziToast from 'izitoast';

const btnLoadMoreElem = document.querySelector('.js-load-more');

async function showArtistsOnPage() {
  showLoader();
  const artistList = await getArtists();

  if (artistList.artists.length === 0) {
    iziToast.warning({
      message: 'Sorry, but no artists were found',
      position: 'center',
    });
  }

  createArtistsMarkup(artistList.artists);
}

await showArtistsOnPage();
hideLoader();

btnLoadMoreElem.addEventListener('click', async () => {
  showLoader();
  const page = getCurrentPage();
  setCurrentPage(page + 1);

  await showArtistsOnPage();
  hideLoader();
});

//---------------------------------------------------------------
