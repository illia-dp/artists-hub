import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function getImagesByQuery(id) {
  const BASE_URL = 'https://sound-wave.b.goit.study/api/artists/';
  const url = `${BASE_URL}${id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    iziToast.warning({
      message: `Request error: ${error.message}`,
      position: 'center',
    });
    throw error;
  }
}
