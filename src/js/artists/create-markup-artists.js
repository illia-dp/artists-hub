import photo from '../../img/artists/file-not-found.jpg';

export const loaderElem = document.querySelector('.artists-loader');
export const btnLoadMoreElem = document.querySelector('.js-load-more');

export function createArtistsMarkup(arr) {
  const markup = arr
    .map(({ strArtist, strBiographyEN, strArtistThumb, _id, genres }) => {
      const flattenedGenres = genres
        .flatMap(genre => genre.split('/'))
        .map(gen => gen.trim());

      const uniqueGenres = [...new Set(flattenedGenres)];

      const genresMarkup = uniqueGenres
        .map(genre => `<span class="artists-genre">${genre}</span>`)
        .join('');

      return `
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${_id}"
                src="${strArtistThumb ?? photo}"
                alt="${strArtist}"
                class="artists-img"
                loading="lazy"
                width="704" 
                height="432"
              />
            </div>

            <div class="artists-box-genres">${genresMarkup}</div>

            <div class="artists-content">
              <h4 class="artists-name">${strArtist}</h4>
              <p class="artists-descr">${strBiographyEN}</p>
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

  const artistsList = document.querySelector('.artists-list');

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
