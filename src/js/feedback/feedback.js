import Splide from '@splidejs/splide';

import '@splidejs/splide/dist/css/splide-core.min.css';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const feedbackSectionNode = document.querySelector('.feedback-section');
  if (!feedbackSectionNode) {
    // console.error('Feedback section (.feedback-section) not found. Script terminated.');
    return;
  }

  const splideElement = feedbackSectionNode.querySelector(
    '.splide.feedback-slider-splide'
  );
  const splideListElement = feedbackSectionNode.querySelector(
    '.splide__list.feedback-list-splide'
  ); // Це UL

  const splideArrows = feedbackSectionNode.querySelector('.splide__arrows'); // Контейнер для стрілок
  const splidePagination = feedbackSectionNode.querySelector(
    '.splide__pagination.feedback-splide-pagination'
  ); // Контейнер для точок

  const loaderBackdrop = feedbackSectionNode.querySelector('.loader-backdrop');

  // Перевірка критичних елементів для Splide
  if (!splideElement) {
    // console.error('Splide main element (.splide.feedback-slider-splide) not found! Cannot initialize.');
    return;
  }
  if (!splideListElement) {
    // console.error('Splide list element (.splide__list.feedback-list-splide) not found! Cannot render slides.');
    return;
  }
  // Логування для опціональних, але важливих елементів керування
  // if (!splideArrows) console.warn('Splide arrows container (.splide__arrows) not found. Default arrows might not appear if not in HTML or if custom arrows are intended.');
  // if (!splidePagination) console.warn('Splide pagination container (.splide__pagination) not found. Default pagination dots will not appear.');
  // if (!loaderBackdrop) console.warn('Loader backdrop (.loader-backdrop) not found.');

  const API_URL = 'https://sound-wave.b.goit.study/api/feedbacks';
  const MAX_FEEDBACKS_TO_DISPLAY = 15;
  let splideInstance = null;

  function showLoader() {
    if (loaderBackdrop) loaderBackdrop.classList.remove('is-hidden');
  }

  function hideLoader() {
    if (loaderBackdrop) loaderBackdrop.classList.add('is-hidden');
  }

  function showPushNotification(message, level = 'error') {
    // console.log(`[PUSH NOTIFICATION - ${level.toUpperCase()}]: ${message}`);
    if (level === 'error') {
      iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
      });
    } else if (level === 'success') {
      iziToast.success({
        title: 'Success',
        message: message,
        position: 'topRight',
      });
    } else if (level === 'warning') {
      iziToast.warning({
        title: 'Warning',
        message: message,
        position: 'topRight',
      });
    } else {
      iziToast.info({
        title: 'Info',
        message: message,
        position: 'topRight',
      });
    }
  }

  function showSectionMessage(type, messageText = '') {
    const elementsToToggleDisplay = [splideElement];
    if (splideArrows) elementsToToggleDisplay.push(splideArrows);
    if (splidePagination) elementsToToggleDisplay.push(splidePagination);

    const existingCustomMsg = feedbackSectionNode.querySelector(
      '.custom-feedback-message'
    );
    if (existingCustomMsg) existingCustomMsg.remove();

    if (type === 'error' || type === 'no-feedback') {
      elementsToToggleDisplay.forEach(el => {
        if (el) el.style.display = 'none';
      });

      const msgContainer = feedbackSectionNode.querySelector(
        '.feedback-container'
      );
      if (msgContainer) {
        const p = document.createElement('p');
        p.className = 'custom-feedback-message';
        p.style.textAlign = 'center';
        p.style.padding = '20px';
        if (type === 'error') {
          p.style.color = 'red';
          p.textContent = messageText || 'Error loading feedbacks.';
        } else {
          // no-feedback
          p.textContent = messageText || 'There are no feedbacks yet.';
        }
        if (splideElement && splideElement.parentNode === msgContainer) {
          splideElement.insertAdjacentElement('afterend', p);
        } else if (msgContainer) {
          msgContainer.appendChild(p);
        }
      }
    } else {
      // 'success' або 'clear'
      elementsToToggleDisplay.forEach(el => {
        if (el) el.style.display = '';
      });
    }

    if (splideListElement && type === 'clear') {
      splideListElement.innerHTML = '';
    }
  }

  function renderStarsSVG(rating) {
    // console.log('[renderStarsSVG] Called with rating:', rating, `(type: ${typeof rating})`);
    const totalStars = 5;

    const numericRating = parseFloat(rating);
    if (isNaN(numericRating)) {
      // console.error('[renderStarsSVG] Invalid rating input, resulted in NaN. Original rating was:', rating);
      let errorStarsHTML = '';
      const errStarEmptySVG = `<svg class="feedback-card__star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
      for (let i = 0; i < totalStars; i++) {
        errorStarsHTML += errStarEmptySVG;
      }
      // console.log('[renderStarsSVG] Returning 5 empty stars due to invalid rating.');
      return errorStarsHTML;
    }

    const filledStars = Math.floor(numericRating);
    // console.log('[renderStarsSVG] Calculated filledStars:', filledStars);

    let starsHTML = '';
    const starFilledSVG = `<svg class="feedback-card__star feedback-card__star--filled" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07088 1.31791C9.41462 0.501451 10.5854 0.501452 10.9291 1.31791L12.9579 6.1368C13.1029 6.481 13.4306 6.71618 13.8067 6.74597L19.0727 7.16304C19.9649 7.23371 20.3267 8.3337 19.6469 8.90897L15.6348 12.3042C15.3482 12.5468 15.223 12.9273 15.3106 13.2899L16.5363 18.3666C16.744 19.2267 15.7969 19.9066 15.033 19.4457L10.5245 16.7251C10.2025 16.5308 9.7975 16.5308 9.47548 16.7251L4.96699 19.4457C4.20311 19.9066 3.25596 19.2267 3.46363 18.3666L4.68942 13.2899C4.77698 12.9273 4.65182 12.5468 4.36526 12.3042L0.353062 8.90897C-0.326718 8.3337 0.0350679 7.23371 0.927291 7.16304L6.19336 6.74597C6.5695 6.71618 6.89716 6.481 7.04207 6.1368L9.07088 1.31791Z" fill="#764191"/>
</svg>`;
    const starEmptySVG = `<svg class="feedback-card__star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07082 1.31791C9.41456 0.501451 10.5853 0.501452 10.9291 1.31791L12.9578 6.1368C13.1028 6.481 13.4305 6.71618 13.8066 6.74597L19.0726 7.16304C19.9648 7.23371 20.3266 8.3337 19.6468 8.90897L15.6347 12.3042C15.3482 12.5468 15.2229 12.9273 15.3105 13.2899L16.5363 18.3666C16.7439 19.2267 15.7968 19.9066 15.0329 19.4457L10.5245 16.7251C10.2024 16.5308 9.79744 16.5308 9.47542 16.7251L4.96693 19.4457C4.20305 19.9066 3.25589 19.2267 3.46357 18.3666L4.68936 13.2899C4.77692 12.9273 4.65176 12.5468 4.36519 12.3042L0.353001 8.90897C-0.326779 8.3337 0.0350068 7.23371 0.92723 7.16304L6.19329 6.74597C6.56944 6.71618 6.89709 6.481 7.04201 6.1368L9.07082 1.31791Z" fill="white"/>
</svg>`;

    for (let i = 0; i < totalStars; i++) {
      starsHTML += i < filledStars ? starFilledSVG : starEmptySVG;
    }
    // console.log('[renderStarsSVG] Generated HTML (first 100 chars):', starsHTML.substring(0,100) + "...");
    return starsHTML;
  }

  function createFeedbackCardHTML(feedback) {
    const authorName = feedback.name || 'Anonymous';
    const reviewText = feedback.descr || 'No feedback.';
    const ratingFromAPI = feedback.rating;

    // console.log('[createFeedbackCardHTML] Processing feedback item:', feedback);
    // console.log('[createFeedbackCardHTML] Raw rating from API:', ratingFromAPI, `(type: ${typeof ratingFromAPI})`);

    const starsRenderedHTML = renderStarsSVG(ratingFromAPI);

    // if (starsRenderedHTML === undefined) {
    // console.error("[createFeedbackCardHTML] renderStarsSVG returned undefined! Rating was:", ratingFromAPI);
    // }
    // console.log('[createFeedbackCardHTML] HTML for stars (first 100 chars):', starsRenderedHTML ? starsRenderedHTML.substring(0,100) + "..." : "undefined or empty");

    return `
            <li class="splide__slide feedback-card">
                <div class="feedback-card__stars">${
                  starsRenderedHTML !== undefined ? starsRenderedHTML : ''
                }</div>
                <p class="feedback-card__text">${reviewText}</p>
                <p class="feedback-card__author">${authorName}</p>
            </li>
        `;
  }

  function initializeSplide(numberOfSlides) {
    // console.log('Attempting to initialize Splide.js...');
    if (splideInstance) {
      try {
        splideInstance.destroy();
        // console.log('Previous Splide instance destroyed.');
      } catch (e) {
        // console.warn("Error destroying Splide:", e);
      }
      splideInstance = null;
    }

    if (!splideElement) {
      // console.error("Splide main element not found during initialization.");
      return;
    }
    if (numberOfSlides === 0) {
      // console.warn("No slides to initialize Splide with.");
      return;
    }

    const paginationContainerForSplide =
      splideElement.querySelector('[data-glide-el="controls[nav]"]') ||
      splideElement.querySelector('.splide__pagination');
    // if (paginationContainerForSplide) {
    // console.log('Splide pagination container (ul.splide__pagination or [data-glide-el]) FOUND:', paginationContainerForSplide);
    // } else {
    // console.warn('Splide pagination container (ul.splide__pagination) NOT FOUND. Dots will not be generated by default if HTML is missing.');
    // }

    try {
      splideInstance = new Splide(splideElement, {
        type: 'slide',
        perPage: 1,
        // gap: '1rem',
        arrows: !!splideArrows,
        pagination: !!splidePagination,
        drag: true,
        keyboard: 'global',
        // autoHeight: true,
      });

      splideInstance.on('mounted', () => {
        // console.log('Splide event: mounted. Total slides:', splideInstance.length, "Current index:", splideInstance.index);
        // if (splidePagination && splidePagination.children.length > 0) {
        // console.log(`Splide pagination bullets GENERATED: ${splidePagination.children.length}. First bullet:`, splidePagination.children[0]);
        // } else if (splidePagination) {
        // console.warn('Splide pagination container exists, but NO BULLETS were rendered inside after mount.');
        // }
      });
      splideInstance.on('move', (newIndex, oldIndex, destIndex) => {});

      splideInstance.mount();

      window.myTestSplide = splideInstance;
    } catch (error) {
      // console.error('ERROR DURING SPLIDE.JS INSTANTIATION:', error);
    }
  }

  async function fetchAndDisplayFeedbacks() {
    showLoader();
    showSectionMessage('clear');
    try {
      const response = await axios.get(API_URL);
      if (
        !response.data ||
        typeof response.data !== 'object' ||
        !Array.isArray(response.data.data)
      ) {
        throw new Error('Incorrect data type from server.');
      }
      let feedbacks = response.data.data;

      if (feedbacks.length === 0) {
        showSectionMessage('no-feedback', 'There is no feedbacks yet.');
        hideLoader();
        return;
      }

      showSectionMessage('success');

      const feedbacksToRender = feedbacks.slice(0, MAX_FEEDBACKS_TO_DISPLAY);

      if (splideListElement) {
        splideListElement.innerHTML = feedbacksToRender
          .map(createFeedbackCardHTML)
          .join('');
      } else {
        throw new Error('Show error: there is no .splide__list.');
      }

      initializeSplide(feedbacksToRender.length);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || 'Unknown error.';
      showSectionMessage('error', `Error: ${errorMsg}`);
      showPushNotification(
        `Failed to fetch or display feedbacks: ${errorMsg}`,
        'error'
      );
    } finally {
      hideLoader();
    }
  }

  // --- Ініціалізація виконання ---
  if (splideElement && splideListElement) {
    fetchAndDisplayFeedbacks();
  } else {
    if (loaderBackdrop) hideLoader();
  }
});
