import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        setTimeout(() => {
          if (isLoggedIn === 'true') {
            console.log('User is logged in');
            navigation.replace('Home');
          } else {
            console.log('User is logged out');
            navigation.replace('Login');
          }
        }, 3000); // Wait for 3 seconds
      } catch (error) {
        navigation.replace('Login');
      }
    };

    checkAuthStatus();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b030c', // Background color
  },
  text: {
    fontSize: 24,
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
});
