import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firebase from '@react-native-firebase/app';
import Login from './screens/Auth/Login.jsx';
import SignUp from './screens/Auth/SignUp';
import Home from './screens/home/Home.jsx';
import AddBankDetails from './screens/home/AddBankDetails.jsx';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp({
    // Your Firebase Config Object
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
    measurementId: 'YOUR_MEASUREMENT_ID',
  });
} else {
  firebase.app(); // Use existing app instance
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddBankDetails" component={AddBankDetails} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
