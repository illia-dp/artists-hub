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

export async function getArtists(
  endpoint = 'artists',
  params = { limit: imagesOnPage, page: currentPage }
) {
  const BASE_URL = 'https://sound-wave.b.goit.study/api/';
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    iziToast.warning({
      message: `Request error: ${error.message}`,
      position: 'center',
    });
    throw error;
  }
}
