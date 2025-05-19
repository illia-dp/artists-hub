
export const starFilledSVG = `<svg class="feedback-card__star feedback-card__star--filled" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M9.07088 1.31791C9.41462 0.501451 10.5854 0.501452 10.9291 1.31791L12.9579 6.1368C13.1029 6.481 13.4306 6.71618 13.8067 6.74597L19.0727 7.16304C19.9649 7.23371 20.3267 8.3337 19.6469 8.90897L15.6348 12.3042C15.3482 12.5468 15.223 12.9273 15.3106 13.2899L16.5363 18.3666C16.744 19.2267 15.7969 19.9066 15.033 19.4457L10.5245 16.7251C10.2025 16.5308 9.7975 16.5308 9.47548 16.7251L4.96699 19.4457C4.20311 19.9066 3.25596 19.2267 3.46363 18.3666L4.68942 13.2899C4.77698 12.9273 4.65182 12.5468 4.36526 12.3042L0.353062 8.90897C-0.326718 8.3337 0.0350679 7.23371 0.927291 7.16304L6.19336 6.74597C6.5695 6.71618 6.89716 6.481 7.04207 6.1368L9.07088 1.31791Z" fill="#764191"/></svg>`;
export const starEmptySVG = `<svg class="feedback-card__star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M9.07082 1.31791C9.41456 0.501451 10.5853 0.501452 10.9291 1.31791L12.9578 6.1368C13.1028 6.481 13.4305 6.71618 13.8066 6.74597L19.0726 7.16304C19.9648 7.23371 20.3266 8.3337 19.6468 8.90897L15.6347 12.3042C15.3482 12.5468 15.2229 12.9273 15.3105 13.2899L16.5363 18.3666C16.7439 19.2267 15.7968 19.9066 15.0329 19.4457L10.5245 16.7251C10.2024 16.5308 9.79744 16.5308 9.47542 16.7251L4.96693 19.4457C4.20305 19.9066 3.25589 19.2267 3.46357 18.3666L4.68936 13.2899C4.77692 12.9273 4.65176 12.5468 4.36519 12.3042L0.353001 8.90897C-0.326779 8.3337 0.0350068 7.23371 0.92723 7.16304L6.19329 6.74597C6.56944 6.71618 6.89709 6.481 7.04201 6.1368L9.07082 1.31791Z" fill="#ccc"/></svg>`; // Порожні зірки сірі
export const modalStarEmptySVG = `<svg class="feedback-modal__star-icon feedback-modal__star-icon--empty" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path d="M9.07082 1.31791C9.41456 0.501451 10.5853 0.501452 10.9291 1.31791L12.9578 6.1368C13.1028 6.481 13.4305 6.71618 13.8066 6.74597L19.0726 7.16304C19.9648 7.23371 20.3266 8.3337 19.6468 8.90897L15.6347 12.3042C15.3482 12.5468 15.2229 12.9273 15.3105 13.2899L16.5363 18.3666C16.7439 19.2267 15.7968 19.9066 15.0329 19.4457L10.5245 16.7251C10.2024 16.5308 9.79744 16.5308 9.47542 16.7251L4.96693 19.4457C4.20305 19.9066 3.25589 19.2267 3.46357 18.3666L4.68936 13.2899C4.77692 12.9273 4.65176 12.5468 4.36519 12.3042L0.353001 8.90897C-0.326779 8.3337 0.0350068 7.23371 0.92723 7.16304L6.19329 6.74597C6.56944 6.71618 6.89709 6.481 7.04201 6.1368L9.07082 1.31791Z" fill="#555"/></svg>`;
export const modalStarFilledSVG = `<svg class="feedback-modal__star-icon feedback-modal__star-icon--filled" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path d="M9.07088 1.31791C9.41462 0.501451 10.5854 0.501452 10.9291 1.31791L12.9579 6.1368C13.1029 6.481 13.4306 6.71618 13.8067 6.74597L19.0727 7.16304C19.9649 7.23371 20.3267 8.3337 19.6469 8.90897L15.6348 12.3042C15.3482 12.5468 15.223 12.9273 15.3106 13.2899L16.5363 18.3666C16.744 19.2267 15.7969 19.9066 15.033 19.4457L10.5245 16.7251C10.2025 16.5308 9.7975 16.5308 9.47548 16.7251L4.96699 19.4457C4.20311 19.9066 3.25596 19.2267 3.46363 18.3666L4.68942 13.2899C4.77698 12.9273 4.65182 12.5468 4.36526 12.3042L0.353062 8.90897C-0.326718 8.3337 0.0350679 7.23371 0.927291 7.16304L6.19336 6.74597C6.5695 6.71618 6.89716 6.481 7.04207 6.1368L9.07088 1.31791Z" fill="#764191"/></svg>`;


export function renderStarsSVG(rating) {
  const totalStars = 5;
  const numericRating = parseFloat(rating);
  if (isNaN(numericRating)) {
    return Array(totalStars).fill(starEmptySVG).join('');
  }
  const filledStars = Math.max(0, Math.min(totalStars, Math.floor(numericRating)));
  let starsHTML = '';
  for (let i = 0; i < totalStars; i++) {
    starsHTML += i < filledStars ? starFilledSVG : starEmptySVG;
  }
  return starsHTML;
}
 
export function createFeedbackCardHTML(feedback) {
  const authorName = feedback.name || 'Anonymous';
  const reviewText = feedback.descr || 'No review text.';
  const ratingFromAPI = feedback.rating;
  const starsRenderedHTML = renderStarsSVG(ratingFromAPI);

  return `
    <li class="splide__slide feedback-card">
        <div class="feedback-card__stars" role="img" aria-label="Rating: ${ratingFromAPI} з 5">${starsRenderedHTML}</div>
        <p class="feedback-card__text">${reviewText}</p>
        <p class="feedback-card__author">${authorName}</p>
    </li>`;
}
 
export function showLoader(loaderBackdrop) {
  if (loaderBackdrop) {
      loaderBackdrop.classList.remove('is-hidden');
      loaderBackdrop.setAttribute('aria-busy', 'true');
  }
}

export function hideLoader(loaderBackdrop) {
  if (loaderBackdrop) {
      loaderBackdrop.classList.add('is-hidden');
      loaderBackdrop.setAttribute('aria-busy', 'false');
  }
}
 
export function showSectionMessage(feedbackSectionNode, splideElement, splideArrows, splidePagination, splideListElement, type, messageText = '') {
  const elementsToToggleDisplay = [splideElement];
  if (splideArrows) elementsToToggleDisplay.push(splideArrows);
  if (splidePagination) elementsToToggleDisplay.push(splidePagination);

  const existingCustomMsg = feedbackSectionNode.querySelector('.custom-feedback-message');
  if (existingCustomMsg) existingCustomMsg.remove();

  const msgContainer = feedbackSectionNode.querySelector('.feedback-container');
  const noFeedbackMsgEl = feedbackSectionNode.querySelector('#noFeedbackMessage');
  const errorFeedbackMsgEl = feedbackSectionNode.querySelector('#errorFeedbackMessage');

  if(noFeedbackMsgEl) noFeedbackMsgEl.classList.add('is-hidden');
  if(errorFeedbackMsgEl) errorFeedbackMsgEl.classList.add('is-hidden');

  if (type === 'error' || type === 'no-feedback') {
    elementsToToggleDisplay.forEach(el => {
      if (el) el.style.display = 'none';
    });
    
    let targetMessageEl = type === 'error' ? errorFeedbackMsgEl : noFeedbackMsgEl;
    if (targetMessageEl) {
        targetMessageEl.textContent = messageText || (type === 'error' ? 'Error loading feedbacks.' : 'No feedbacks yet.');
        targetMessageEl.classList.remove('is-hidden');
    } else if (msgContainer) {
      const p = document.createElement('p');
      p.className = `custom-feedback-message ${type === 'error' ? 'error' : ''}`;
      p.setAttribute('role', 'status');
      p.textContent = messageText || (type === 'error' ? 'Error loading feedbacks.' : 'No feedbacks yet.');
      if (splideElement && splideElement.parentNode === msgContainer) {
        splideElement.insertAdjacentElement('afterend', p);
      } else {
        msgContainer.appendChild(p);
      }
    }
  } else { 
    elementsToToggleDisplay.forEach(el => {
      if (el) el.style.display = '';
    });
  }

  if (splideListElement && type === 'clear') {
    splideListElement.innerHTML = '';
  }
}
 
export function initializeSplide(Splide, splideElement, splideArrows, splidePagination, numberOfSlides, showSectionMessageHandler) {
  let splideInstance = null;  
  if (splideInstance) {
    try {
      splideInstance.destroy(true); 
    } catch (e) { /* console.warn("Error destroying Splide:", e); */ }
    splideInstance = null;
  }

  if (!splideElement || numberOfSlides === 0) {
    return null;
  }
  
  try {
    splideInstance = new Splide(splideElement, {
      type: 'slide',
      perPage: 1,
      arrows: !!splideArrows, 
      pagination: !!splidePagination,
      drag: true,
      keyboard: 'global',
      classes: {
          arrows: 'splide__arrows feedback-splide-arrows-container',
          arrow : 'splide__arrow feedback-splide-arrow',
          prev  : 'splide__arrow--prev feedback-splide-arrow--prev',
          next  : 'splide__arrow--next feedback-splide-arrow--next',
          pagination: 'splide__pagination feedback-splide-pagination-container',
          page      : 'splide__pagination__page feedback-splide-page',
      },
    });
    splideInstance.mount();
    return splideInstance;
  } catch (error) {
    showSectionMessageHandler('error', 'Unable to initialize.');
    return null;
  }
}
 
export function renderModalStars(feedbackStarsContainer, currentRating = 0) {
    if (!feedbackStarsContainer) return;
    feedbackStarsContainer.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const starButton = document.createElement('button');
        starButton.type = 'button';
        starButton.classList.add('feedback-modal__star-btn');
        starButton.dataset.value = i;
        starButton.setAttribute('aria-label', `Rating ${i} from 5`);
        starButton.setAttribute('role', 'radio');
        starButton.setAttribute('aria-checked', i <= currentRating ? 'true' : 'false');
        starButton.innerHTML = i <= currentRating ? modalStarFilledSVG : modalStarEmptySVG;
        feedbackStarsContainer.appendChild(starButton);
    }
  }