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
                src="${strArtistThumb}"
                alt="${strArtist}"
                class="artists-img"
              />
            </div>

            <div class="artists-box-genres">
            ${genresMarkup}
            </div>

            <div class="artists-content">
              <h4 class="artists-name">${strArtist}</h4>
              <p class="artists-descr">${strBiographyEN}</p>
              <button type="button" class="artists-learn-more-btn">
                Learn More
              </button>
            </div>
          </li>
    `;
    })
    .join('');

  const artistsList = document.querySelector('.artists-list');

  artistsList.insertAdjacentHTML('beforeend', markup);
}
