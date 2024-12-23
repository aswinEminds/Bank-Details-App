// authService.js
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const signUp = async (name, email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await userCredential.user.updateProfile({
      displayName: name,
    });
    console.log('User signed up:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    console.log('User logged in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const logout = async () => {
  try {
    await auth().signOut();
    console.log('User logged out');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

export {signUp, login, logout};
