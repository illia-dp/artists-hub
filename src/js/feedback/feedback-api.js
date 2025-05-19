
import axios from 'axios';

const API_BASE_URL = 'https://sound-wave.b.goit.study/api';
const FEEDBACKS_API_URL = `${API_BASE_URL}/feedbacks`;

export const getFeedbacksFromServer = async () => {
  const response = await axios.get(FEEDBACKS_API_URL);
  if (!response.data || typeof response.data !== 'object' || !Array.isArray(response.data.data)) {
    throw new Error('Wrong type data from server.');
  }
  return response.data.data;
};

export const postFeedbackToServer = async (feedbackData) => {
  
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (feedbackData.name && feedbackData.reviewText && feedbackData.rating > 0) {
              
              resolve({ message: 'Feedback successfully added!', data: feedbackData });
          } else {
              reject(new Error('Unable to add feedback. Check data.'));
          }
      }, 1000);
  });
};