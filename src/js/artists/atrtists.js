import { createArtistsMarkup } from '../artists/create-markup-artists';
import { getArtists } from '../artists/artists-api';
import iziToast from 'izitoast';

async function showArtistsOnPage() {
  const artistList = await getArtists();

  if (artistList.artists.length === 0) {
    iziToast.warning({
      message: 'Sorry, but no artists were found',
      position: 'center',
    });
  }

  createArtistsMarkup(artistList.artists);
}

showArtistsOnPage();
