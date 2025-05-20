import axios from 'axios';

const API_BASE_URL = 'https://sound-wave.b.goit.study/api';
const FEEDBACKS_API_URL = `${API_BASE_URL}/feedbacks`;

export const getFeedbacksFromServer = async () => {
  try {
    const response = await axios.get(FEEDBACKS_API_URL);
     
    if (!response.data || typeof response.data !== 'object' || !Array.isArray(response.data.data)) {
       
      throw new Error('Wrong type data from server.');
    }
    return response.data.data;
  } catch (error) {
     
    console.error('Error fetching feedbacks:', error.response || error);
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred while fetching feedbacks.';
    throw new Error(errorMessage);
  }
};
 
export const postFeedbackToServer = async (feedbackData) => {
  try {
    
    const response = await axios.post(FEEDBACKS_API_URL, feedbackData);
     
    return response.data;
  } catch (error) {
    
    console.error('Error posting feedback:', error.response || error);
    
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred while sending feedback.';
     
    throw new Error(errorMessage);
  }
};
