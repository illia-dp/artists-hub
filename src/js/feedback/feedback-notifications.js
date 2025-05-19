
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';  

export function showPushNotification(message, level = 'info', title = '') {
  const options = {
      message: message,
      position: 'topRight',
      timeout: 5000,
      title: title || level.charAt(0).toUpperCase() + level.slice(1)
  };
  if (iziToast[level]) {
      iziToast[level](options);
  } else {
      iziToast.info(options);
  }
}
