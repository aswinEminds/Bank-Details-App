import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigators/AuthNavigator';
import MainNavigator from './navigators/MainNavigator';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {}, []);

  const getAuthStatus = async () => {
    const isloggedIn = AsyncStorage.getItem('isLoggedIn');
    setIsAuthenticated(isloggedIn);
  };

  useEffect(() => {
    getAuthStatus();
  });

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
      <Toast />
    </NavigationContainer>
  );
}
