import Toast from 'react-native-toast-message';

class MyToast {
  static showSuccess(message) {
    Toast.show({
      type: 'success',
      position: 'top', // Optional: Position of the toast, 'top', 'bottom', or 'center'
      text1: 'Success', // Title
      text2: message, // Message body
      visibilityTime: 3000, // Toast duration in milliseconds (optional)
      autoHide: true, // Automatically hide the toast (optional)
    });
  }

  static showError(message) {
    console.log('hello');
    Toast.show({
      type: 'error',
      position: 'top', // Optional: Position of the toast, 'top', 'bottom', or 'center'
      text1: 'Error', // Title
      text2: message, // Message body
      visibilityTime: 3000, // Toast duration in milliseconds (optional)
      autoHide: true, // Automatically hide the toast (optional)
    });
  }

  static showInfo(message) {
    Toast.show({
      type: 'info',
      position: 'top', // Optional: Position of the toast, 'top', 'bottom', or 'center'
      text1: 'Info', // Title
      text2: message, // Message body
      visibilityTime: 3000, // Toast duration in milliseconds (optional)
      autoHide: true, // Automatically hide the toast (optional)
    });
  }
}

export default MyToast;
