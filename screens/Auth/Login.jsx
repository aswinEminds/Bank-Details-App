import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../utils/Colors';
import AuthAppBar from '../../components/AuthAppBar';
import MyInputBox from '../../components/MyInputBox';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../services/authServices';
import MyToast from '../../helpers/MyToast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      MyToast.showError('Please enter both email and password.');
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
      MyToast.showSuccess('Login Successful');
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Home');
    } catch (error) {
      MyToast.showError(
        error.message || 'An error occurred. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#0b030c', '#30123d', '#6e2067']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <ScrollView contentContainerStyle={styles.formWrapper}>
          <View style={styles.authWrapper}>
            <AuthAppBar name={'Login'} />
            <View style={styles.authForm}>
              <View style={styles.top}>
                <Text style={styles.heading}>Welcome Back</Text>
                <Text style={styles.subheading}>
                  Hello there, sign in to continue
                </Text>
              </View>
              <View style={styles.center}>
                <Image
                  source={require('../../assets/images/Illustration.png')}
                  style={styles.authImage}
                  resizeMode="contain"
                />
                <MyInputBox
                  iconName="envelope-o"
                  onChangeText={setEmail}
                  value={email}
                  placeholder={'Enter your Email'}
                />
                <MyInputBox
                  onChangeText={setPassword}
                  value={password}
                  iconName={'eye'}
                  placeholder={'Enter your Password'}
                  secureTextEntry // Mask the password input
                />
                <Text
                  onPress={() => {
                    MyToast.showInfo('Forgot password feature coming soon!');
                  }}
                  style={{color: colors.primary}}>
                  Forgot password?
                </Text>
                <MyButton
                  onPress={handleLogin}
                  buttonName={loading ? 'Logging in...' : 'Login'}
                  disabled={loading}
                />
              </View>
              <View style={styles.bottom}>
                <Text style={{color: 'white'}}>Don't have an account?</Text>
                <Text
                  onPress={() => {
                    navigation.replace('SignUp');
                  }}
                  style={{
                    color: colors.primary,
                    padding: 12,
                    fontWeight: 'bold',
                  }}>
                  Sign Up
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up full height
  },
  formWrapper: {
    flexGrow: 1, // Allow the content to grow and fill the screen
    justifyContent: 'space-between', // Ensures spacing between elements
  },
  authWrapper: {
    width: '100%',
    paddingTop: 24,
    flex: 1, // Ensure this takes full height available
  },
  authForm: {
    backgroundColor: colors.background,
    elevation: 9,
    flex: 1, // Ensure this takes full height available
    width: '100%',
    paddingHorizontal: 26,
    paddingVertical: 12,
    justifyContent: 'space-between',
    borderTopRightRadius: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subheading: {
    fontWeight: '500',
    color: 'white',
  },
  top: {},
  center: {
    justifyContent: 'center',
    gap: 20,
    alignItems: 'flex-end',
  },
  authImage: {
    width: '100%',
    marginBottom: 26,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 18,
  },
});
