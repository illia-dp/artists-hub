import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide-core.min.css';
import { getFeedbacksFromServer } from './feedback-api.js';
import { 
    showLoader, 
    hideLoader, 
    showSectionMessage, 
    createFeedbackCardHTML, 
    initializeSplide,
    renderModalStars as initialRenderModalStars  
} from './feedback-dom.js';
import { initializeFeedbackModal } from './feedback-modal.js';
import { showPushNotification } from './feedback-notifications.js';

document.addEventListener('DOMContentLoaded', () => {
  const feedbackSectionNode = document.querySelector('.feedback-section');
  if (!feedbackSectionNode) {
    return;
  }
 
  const splideElement = feedbackSectionNode.querySelector('.splide.feedback-slider-splide');
  const splideListElement = feedbackSectionNode.querySelector('.splide__list.feedback-list-splide');
  const splideArrows = feedbackSectionNode.querySelector('.splide__arrows');
  const splidePagination = feedbackSectionNode.querySelector('.splide__pagination.feedback-splide-pagination');
  const loaderBackdrop = feedbackSectionNode.querySelector('.loader-backdrop');

  if (!splideElement || !splideListElement) {
    if (loaderBackdrop) hideLoader(loaderBackdrop);
    return;
  }

  const MAX_FEEDBACKS_TO_DISPLAY = 15;
  let splideInstance = null; 
 
  const addFeedbackBtn = document.getElementById('addFeedbackBtn');
  const feedbackModalBackdrop = document.getElementById('feedbackModalBackdrop');
  const feedbackModal = document.getElementById('feedbackModal');
  const feedbackModalCloseBtn = document.getElementById('feedbackModalCloseBtn');
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackStarsContainer = document.getElementById('feedbackStarsContainer');
  const feedbackRatingInput = document.getElementById('feedbackRating');

 
  async function fetchAndDisplayFeedbacks() {
    showLoader(loaderBackdrop);     
    showSectionMessage(feedbackSectionNode, splideElement, splideArrows, splidePagination, splideListElement, 'clear'); 
    try {
      const feedbacks = await getFeedbacksFromServer();

      if (feedbacks.length === 0) {
        showSectionMessage(feedbackSectionNode, splideElement, splideArrows, splidePagination, splideListElement, 'no-feedback', 'There is no feedbacks yet!');
        hideLoader(loaderBackdrop);
        const addFeedbackBtnContainer = document.querySelector('.add-feedback-button-container');
        if (addFeedbackBtnContainer) addFeedbackBtnContainer.style.display = 'block';
        return;
      }
      
      showSectionMessage(feedbackSectionNode, splideElement, splideArrows, splidePagination, splideListElement, 'success'); 

      const feedbacksToRender = feedbacks.slice(0, MAX_FEEDBACKS_TO_DISPLAY);
      splideListElement.innerHTML = feedbacksToRender.map(createFeedbackCardHTML).join('');
       
      splideInstance = initializeSplide(Splide, splideElement, splideArrows, splidePagination, feedbacksToRender.length, 
        (type, message) => showSectionMessage(feedbackSectionNode, splideElement, splideArrows, splidePagination, splideListElement, type, message)
      );

    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || 'Unknown error.';
      showSectionMessage(feedbackSectionNode, splideElement, splideArrows, splidePagination, splideListElement, 'error', `Error: ${errorMsg}`);
      showPushNotification(`Unable to download reviews: ${errorMsg}`, 'error');
    } finally {
      hideLoader(loaderBackdrop);
    }
  }
 
  initializeFeedbackModal({
    addFeedbackBtn,
    feedbackModalBackdrop,
    feedbackModal,
    feedbackModalCloseBtn,
    feedbackForm,
    feedbackStarsContainer,
    feedbackRatingInput 
  });
   
  fetchAndDisplayFeedbacks(); 
  if (feedbackStarsContainer) {
    initialRenderModalStars(feedbackStarsContainer); 
  }
});
