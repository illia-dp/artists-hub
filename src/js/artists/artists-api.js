import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const imagesOnPage = 8;

export async function getArtists(
  endpoint = 'artists',
  params = { limit: imagesOnPage }
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
