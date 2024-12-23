import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../utils/Colors';
import AuthAppBar from '../../components/AuthAppBar';
import MyInputBox from '../../components/MyInputBox';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../services/authServices';
import MyToast from '../../helpers/MyToast';

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
      await login(email, password); // Calling the `login` method from `authServices`
      MyToast.showSuccess('Login Successful');
      navigation.replace('Home'); // Navigate to Home or Dashboard
    } catch (error) {
      MyToast.showError(
        error.message || 'An error occurred. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
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
            <Text>Don't have an account?</Text>
            <Text
              onPress={() => {
                navigation.replace('SignUp');
              }}
              style={{color: colors.primary, padding: 12, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  authWrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primary,
    paddingTop: 24,
  },
  authForm: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 35,
    paddingHorizontal: 26,
    paddingVertical: 12,
    justifyContent: 'space-between',
    borderTopRightRadius: 35,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subheading: {
    fontWeight: '500',
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
