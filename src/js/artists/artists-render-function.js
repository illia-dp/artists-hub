const artistsList = document.querySelector('.artists-list');
const artLoader = document.querySelector('.art-loader');
const artLoadMoreBtn = document.querySelector('.art-load-more-btn');

function truncateText(text, wordLimit) {
  const words = text.split(' '); // Разбиваем строку на слова
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...'; // Обрезаем текст и добавляем "..."
  }
  return text; // Если слов меньше лимита, возвращаем текст как есть
}

export function createArtistsList(artists) {
  const markup = artists
    .map(
      ({ strArtist, strBiographyEN, strArtistThumb, genres }) => `
  <li class="art-item">
        <div class="art-img-wrapper">
        <img class="art-img" src="${strArtistThumb}" alt="${strArtist} photo" /></div>
        <ul class="art-ganres-list">
          ${genres
            .map(genre => `<li class="art-ganre-list-item">${genre}</li>`)
            .join('')}
        </ul>
        <p class="art-name">${strArtist}</p>
        <p class="art-descr">${truncateText(strBiographyEN, 10)}</p>
        <button class="art-learn-more-btn">
          Learn more
          <svg class="art-learn-more-icon" width="24" height="24">
            <use href="../img/sprite.svg#icon-caret-right"></use>
          </svg>
        </button>
      </li>`
    )
    .join('');
  artistsList.insertAdjacentHTML('beforeend', markup);
}

export function showLoader() {
  artLoader.classList.remove('hidden');
}

export function hideLoader() {
  artLoader.classList.add('hidden');
}

export function showArtLoadMoreBtn() {
  artLoadMoreBtn.classList.remove('hidden');
}

export function hideArtLoadMoreBtn() {
  artLoadMoreBtn.classList.add('hidden');
}
