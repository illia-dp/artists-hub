import { createArtist } from './create-markup-modal';
import { getImagesByQuery } from './artist-api';
import iziToast from 'izitoast';
import axios from 'axios';

const artistModal = document.querySelector('.art-modal');
const modalBackdrop = document.querySelector('.backdrop');
const loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded', () => {
  const artistsList = document.querySelector('.artists-list');

  if (artistsList) {
    artistsList.addEventListener('click', event => {
      const learnMoreBtn = event.target.closest('.artists-learn-more-btn');
      if (learnMoreBtn) {
        showArtist(event);
      }
    });
  }
});

async function showArtist(event) {
  event.preventDefault();
  const clickedButton = event.target.closest('.artists-learn-more-btn');

  const artistCard = clickedButton.closest('.artists-item');
  const artistImage = artistCard.querySelector('.artists-img');
  const artistId = artistImage?.dataset.id;

  if (!artistId) return;

  try {
    const genres = Array.from(artistCard.querySelectorAll('.artists-box-genres .artists-genre')).map(el => el.textContent);
    showLoader();

    const artistData = await getImagesByQuery(artistId);

    hideLoader();

    if (!artistData || !artistData.strArtist) {
      iziToast.warning({
        message: 'Sorry, but no artist was found',
        position: 'center',
      });
      return;
    }

    artistModal.innerHTML = '';
    createArtist(artistData, genres);

    openModal();
  } catch (error) {
    iziToast.error({
      message: 'Failed to load artist data',
      position: 'center',
    });
  }
}

function openModal() {
  modalBackdrop.classList.add('is-visible');
  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown', onEscPress);
}

function closeModal() {
  modalBackdrop.classList.remove('is-visible');
  document.body.style.overflow = '';

  window.removeEventListener('keydown', onEscPress);
}

function onEscPress(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop || e.target.closest('.modal-close-btn')) {
    closeModal();
  }
});

function showLoader() {
  loader.hidden = false;
}

function hideLoader() {
  loader.hidden = true;
}
