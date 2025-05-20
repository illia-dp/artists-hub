import { renderModalStars } from './feedback-dom.js';
import { showLoader, hideLoader } from './feedback-dom.js';
import { postFeedbackToServer } from './feedback-api.js';
import { showPushNotification } from './feedback-notifications.js';

let currentFeedbackForm = null;
let currentFeedbackModalBackdrop = null;
let currentFeedbackModal = null;
let currentFeedbackRatingInput = null;
let currentFeedbackStarsContainer = null;
let elementThatTriggeredModal = null;

function onEscKeyPressModal(event) {
  if (event.key === 'Escape') {
    closeFeedbackModal();
  }
}

export function openFeedbackModal() {
  if (!currentFeedbackModalBackdrop || !currentFeedbackModal || !currentFeedbackForm || !currentFeedbackRatingInput || !currentFeedbackStarsContainer) return;

  elementThatTriggeredModal = document.activeElement;

  currentFeedbackModalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  currentFeedbackModal.removeAttribute('aria-hidden');
 
  currentFeedbackForm.reset();
  currentFeedbackRatingInput.value = "0";  
  renderModalStars(currentFeedbackStarsContainer, 0);  

  const closeButton = currentFeedbackModal.querySelector('.feedback-modal__close-btn');
  if (closeButton) {
    closeButton.focus();
  } else {
    currentFeedbackForm.querySelector('input[type="text"]')?.focus();
  }

  window.addEventListener('keydown', onEscKeyPressModal);
}

export function closeFeedbackModal() {
  if (!currentFeedbackModalBackdrop || !currentFeedbackModal) return;

  currentFeedbackModalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  currentFeedbackModal.setAttribute('aria-hidden', 'true');

  window.removeEventListener('keydown', onEscKeyPressModal);

  if (elementThatTriggeredModal) {
    elementThatTriggeredModal.focus();
    elementThatTriggeredModal = null;
  }
}

async function handleFeedbackFormSubmit(event) {
  event.preventDefault();
  if (!currentFeedbackForm || !currentFeedbackRatingInput) return;

  const submitButton = currentFeedbackForm.querySelector('.feedback-modal__submit-btn');
  submitButton.disabled = true;
  const loaderBackdrop = document.querySelector('.loader-backdrop');  
  if(loaderBackdrop) showLoader(loaderBackdrop);


  const formData = new FormData(currentFeedbackForm);
  const name = formData.get('name');
  const reviewText = formData.get('reviewText');  
  const rating = parseInt(currentFeedbackRatingInput.value, 10);  
 
  if (!name || !reviewText || rating < 1 || rating > 5) {
    showPushNotification('Please fill in all fields and select a rating between 1 and 5.', 'error', 'Validation Error');
    submitButton.disabled = false;
    if(loaderBackdrop) hideLoader(loaderBackdrop);
    return;
  }

  const feedbackData = {
    name: name, 
    descr: reviewText,  
    rating: rating,
  };

  try {
    const result = await postFeedbackToServer(feedbackData);  
    showPushNotification(result.message || 'Your feedback has been successfully added!', 'success', 'Thank you!');
    currentFeedbackForm.reset();
    currentFeedbackRatingInput.value = "0";  
    if(currentFeedbackStarsContainer) renderModalStars(currentFeedbackStarsContainer, 0);  
    closeFeedbackModal();  
  } catch (error) {
     
    showPushNotification(error.message || 'Unable to send feedback.', 'error', 'Error');
  } finally {
    if(loaderBackdrop) hideLoader(loaderBackdrop);
    submitButton.disabled = false;
     
  }
}

export function initializeFeedbackModal({
    addFeedbackBtn,
    feedbackModalBackdrop,
    feedbackModal,
    feedbackModalCloseBtn,
    feedbackForm,
    feedbackStarsContainer,
    feedbackRatingInput
}) {
    currentFeedbackForm = feedbackForm;
    currentFeedbackModalBackdrop = feedbackModalBackdrop;
    currentFeedbackModal = feedbackModal;
    currentFeedbackRatingInput = feedbackRatingInput;
    currentFeedbackStarsContainer = feedbackStarsContainer;

    if (addFeedbackBtn) {
        addFeedbackBtn.addEventListener('click', openFeedbackModal);
    }
    if (feedbackModalCloseBtn) {
        feedbackModalCloseBtn.addEventListener('click', closeFeedbackModal);
    }
    if (feedbackModalBackdrop) {
        feedbackModalBackdrop.addEventListener('click', (event) => {
        if (event.target === feedbackModalBackdrop) {
            closeFeedbackModal();
        }
        });
    }
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackFormSubmit);
    }

    if (feedbackStarsContainer && feedbackRatingInput) {  
        feedbackStarsContainer.addEventListener('click', (event) => {
            const starButton = event.target.closest('.feedback-modal__star-btn');
            if (starButton) {
                const rating = parseInt(starButton.dataset.value, 10);
                currentFeedbackRatingInput.value = rating;  
                renderModalStars(feedbackStarsContainer, rating);  
                feedbackStarsContainer.querySelectorAll('.feedback-modal__star-btn').forEach(btn => {
                    btn.setAttribute('aria-checked', parseInt(btn.dataset.value, 10) <= rating ? 'true' : 'false');
                });
            }
        });
    }
    
    if (currentFeedbackModal) {
        currentFeedbackModal.setAttribute('aria-hidden', 'true');
    }
     
    if(feedbackStarsContainer) renderModalStars(feedbackStarsContainer, 0);
}
