import photo from '../../img/artists/file-not-found.jpg';

export const loaderElem = document.querySelector('.artists-loader');
export const btnLoadMoreElem = document.querySelector('.js-load-more');
export let artistsList = document.querySelector('.artists-list');

export function createArtistsMarkup(arr) {
  const markup = arr

    .map(({ strArtist, strBiographyEN, strArtistThumb, _id, genres = [] }) => {
      const uniqueGenres = [...new Set(genres.map(genre => genre.trim()))];

      const genresMarkup = uniqueGenres.length
        ? uniqueGenres
            .map(genre => `<li class="artists-genre">${genre}</li>`)
            .join('')
        : `<li class="artists-genre">No genres</li>`;

      return `
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${_id}"
                src="${strArtistThumb ?? photo}"
                alt="${strArtist}"
                onerror="this.onerror=null; this.src='${photo}'"
                class="artists-img"
                loading="lazy"
                width="704" 
                height="432"
              />
            </div>

            <ul class="artists-box-genres">${genresMarkup}</ul>

            <div class="artists-content">
              <h4 class="artists-name">${
                strArtist || 'Information is lost or missing'
              }</h4>
              <p class="artists-descr">${
                strBiographyEN ||
                'We are very sorry, but unfortunately we were unable to find the information on the server.'
              }</p>
              <button
                type="button"
                class="artists-learn-more-btn"
                aria-label="button to learn more"
              >
                Learn More
                <svg class="icon-caret-right" width="24" height="24">
                  <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-caret-right"></use>
                </svg>
              </button>
            </div>
          </li>
    `;
    })
    .join('');

  artistsList.insertAdjacentHTML('beforeend', markup);
}

//---------------------------------------------------------------
export function showLoader() {
  loaderElem.classList.remove('hidden');
}
export function hideLoader() {
  loaderElem.classList.add('hidden');
}
export function showLoadMoreButton() {
  btnLoadMoreElem.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  btnLoadMoreElem.classList.add('hidden');
}
export function scrollWin(x, y) {
  window.scrollBy({
    top: y,
    left: x,
    behavior: 'smooth',
  });
}
