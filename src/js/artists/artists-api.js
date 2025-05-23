import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const imagesOnPage = 8;
let currentPage = 1;

export function setCurrentPage(newPage) {
  currentPage = newPage;
}

// export async function getArtists(artistName, option, strGenre) {
//   const BASE_URL = 'https://sound-wave.b.goit.study/api/artists';
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         limit: imagesOnPage,
//         page: currentPage,
//         name: artistName,
//         sortName: option,
//         genre: strGenre,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     iziToast.warning({
//       message: `Request error: ${error.message}`,
//       position: 'center',
//     });
//     throw error;
//   }
// }
export async function getArtists(artistName, option, strGenre) {
  const BASE_URL = 'https://sound-wave.b.goit.study/api/artists';

  const params = {
    limit: imagesOnPage,
    page: currentPage,
  };

  if (artistName) params.name = artistName;
  if (option) params.sortName = option;
  if (strGenre) params.genre = strGenre;

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    iziToast.warning({
      message: `Request error: ${error.message}`,
      position: 'center',
    });
    throw error;
  }
}

//------------------Query of genres----------------------------
export async function getGenres() {
  try {
    const response = await axios.get(
      `https://sound-wave.b.goit.study/api/genres`
    );
    return response.data;
  } catch (error) {
    iziToast.warning({
      message: `Request error: ${error.message}`,
      position: 'center',
    });
    throw error;
  }
}
