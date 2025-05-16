import axios from "axios";

const artist = document.querySelector('.art-modal');

async function getImagesByQuery() {   
    const response = await axios.get('https://sound-wave.b.goit.study/api/artists/65ada54daf9f6d155db47e29', {});
    return response.data;
}
//!==========================================================

try {
    const res = await getImagesByQuery();
    createArtist(res);
} catch (eror) {
    console.log(eror);
    
}
//!==========================================================
function createArtist(arr) {
    const { intDiedYear, intFormedYear, intMembers, strArtist, strArtistThumb, strBiographyEN, strCountry, strGender, tracksList } = arr;    

    const markup =  
       `<h2 class="art-modal-name">${strArtist}</h2>
          <img
            src="${strArtistThumb}"
            alt="${strArtist}"
            class="art-modal-img"
          />
          <p class="art-modal-live">
            Years active <br />
            <span>${intFormedYear}-${intDiedYear || "present"}</span>
          </p>
          <p class="art-modal-sex">
            Sex <br />
            <span>${strGender}</span>
          </p>
          <p class="art-modal-members">
            Members <br />
            <span>${intMembers}</span>
          </p>
          <p class="art-modal-country">
            Country <br />
            <span>${strCountry}</span>
          </p>
          <p class="art-modal-biography">
            Biography <br />
            <span>${strBiographyEN}</span>
          </p>
          <div class="art-modal-geners">
            <div class="art-modal-gener">
                <p>Alternative</p>
            </div>
            <div class="art-modal-gener">
                <p>Pop</p>
            </div>
            <div class="art-modal-gener">
                <p>Rock</p>
            </div>
            <div class="art-modal-gener">
                <p>Indie</p>
            </div>
          </div>
          <div class="art-modal-albums">
            <h3 class="art-modal-albums-title">Albums</h3>
            ${createAllbum(tracksList)}
            </div>
          </div>`
    ;

    artist.insertAdjacentHTML("beforeend", markup);
}

function createAllbum(arr) {
    const list = groupTracksByAlbum(arr);
    const albums = Object.keys(list);
  
    const markup = albums.map((albumName) =>
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
    ).join("");
  
    return markup;
  }
  
function createSongsList(songs, name) {
    return songs[name].map(({ strTrack, intDuration, movie }) =>
      `<div class="art-modal-albums-card-item">
          <p>${strTrack}</p>
          <p>${formatDuration(intDuration)}</p>
          <p><a href="${movie || ''}" target="_blank">
            <svg class="close-icon" width="24" height="25">
                <use href="./img/sprite.svg#icon-Youtube"></use>
            </svg>
          </a></p>
      </div>`
    ).join("");
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

