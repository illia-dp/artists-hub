import photo from '../../img/artists/file-not-found.jpg';

const artist = document.querySelector('.art-modal');

export function createArtist(arr, genres) {
  const {
    intDiedYear,
    intFormedYear,
    intMembers,
    strArtist,
    strArtistThumb,
    strBiographyEN,
    strCountry,
    strGender,
    tracksList,
  } = arr;

  const genresMarkup = genres
  .map(genre => `<li class="art-modal-gener"><p>${genre}</p></li>`)
  .join('');

  const markup = `
            <button class="modal-close-btn" type="button">
              <svg class="close-icon" width="32" height="32">
                <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-Close"></use>
              </svg>
            </button>
            <h2 class="art-modal-name" tabindex="0">${strArtist}</h2>
            <div class="art-modal-wrapper">
              <div class="art-modal-wrapper-item">
                <div class="art-modal-item-img">
                  <img
                    src="${strArtistThumb ?? photo}"
                    alt="${strArtist}"
                    class="art-modal-img"
                  />
                </div>
              </div>
              <div class="art-modal-wrapper-item">
                <div class="art-modal-titles">
                  <p class="art-modal-live">
                    Years active <br />
                    <span>${intFormedYear || "—"} - ${intDiedYear || 'present'}</span>
                  </p>
                  <p class="art-modal-sex">
                    Sex <br />
                    <span>${strGender || "—"}</span>
                  </p>
                  <p class="art-modal-members">
                    Members <br />
                    <span>${intMembers || "—"}</span>
                  </p>
                  <p class="art-modal-country">
                    Country <br />
                    <span>${strCountry || "—"}</span>
                  </p>
                  <p class="art-modal-biography">
                    Biography <br />
                    <span>${strBiographyEN || "We don't have this information"}</span>
                  </p>
                </div>
                <ul class="art-modal-geners">
                   ${genresMarkup}
                </ul>
              </div>
            </div>
            <div class="art-modal-albums">
              <h3 class="art-modal-albums-title">Albums</h3>
              <div class="art-modal-albums-cards">
                ${createAllbum(tracksList)}
              </div>
              </div>
            `;
  artist.insertAdjacentHTML('beforeend', markup);
}

function createAllbum(arr) {
  const list = groupTracksByAlbum(arr);
  const albums = Object.keys(list);

  const markup = albums
    .map(
      albumName =>
        `<div class="art-modal-albums-card">
            <h4 class="art-modal-albums-card-title">${albumName}</h4>
            <div class="art-modal-albums-card-names">
              <p>Track</p>
              <p>Time</p>
              <p>Link</p>
            </div>
            <div class="art-modal-albums-card-block">
              ${createSongsList(list, albumName)}
            </div>
        </div>`
    )
    .join('');

  return markup;
}

function createSongsList(songs, name) {
  return songs[name]
    .map(({ strTrack, intDuration, movie, strArtist  }) => {
      const duration = formatDuration(intDuration);

      const videoUrl = movie?.startsWith('http')
      ? movie
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(`${strArtist} ${strTrack}`)}`;

    const youtubeLink = `
      <a href="${videoUrl}" target="_blank">
        <svg class="close-icon" width="24" height="25">
          <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-Youtube"></use>
        </svg>
      </a>`;

      return `
          <div class="art-modal-albums-card-item">
            <p class="art-modal-albums-card-track">${strTrack}</p>
            <p class="art-modal-albums-card-duration">${duration}</p>
            <p class="art-modal-albums-card-link">${youtubeLink}</p>
          </div>`;
    })
    .join('');
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function groupTracksByAlbum(tracksList) {
  const albums = {};

  tracksList.forEach(track => {
    const albumName = track.strAlbum;

    if (!albums[albumName]) {
      albums[albumName] = [];
    }

    albums[albumName].push(track);
  });

  return albums;
}
