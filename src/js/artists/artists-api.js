import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const imagesOnPage = 8;
let currentPage = 1;

export function getCurrentPage() {
  return currentPage;
}
export function setCurrentPage(newPage) {
  currentPage = newPage;
}

export async function getArtists(artistName) {
  const BASE_URL = 'https://sound-wave.b.goit.study/api/artists';
  try {
    const response = await axios.get(BASE_URL, {
      params: { limit: imagesOnPage, page: currentPage, name: artistName },
    });
    return response.data;
  } catch (error) {
    iziToast.warning({
      message: `Request error: ${error.message}`,
      position: 'center',
    });
    throw error;
  }
}

//---------------------------------------------------------------
