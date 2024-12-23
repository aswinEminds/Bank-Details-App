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
import {signUp} from '../../services/authServices';
import MyToast from '../../helpers/MyToast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await signUp(name, email.trim(), password);
      MyToast.showSuccess('Signed Up Successfully');
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Home');
    } catch (error) {
      MyToast.showError('Error signing up');
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
            <AuthAppBar name={'SignUp'} />
            <View style={styles.authForm}>
              <View style={styles.top}>
                <Text style={styles.heading}>Welcome to us,</Text>
                <Text style={styles.subheading}>
                  Hello there, create New account
                </Text>
              </View>
              <View style={styles.center}>
                <Image
                  source={require('../../assets/images/Illustration.png')}
                  style={styles.authImage}
                  resizeMode="contain"
                />
                <MyInputBox
                  placeholder={'Name'}
                  value={name}
                  onChangeText={setName}
                />
                <MyInputBox
                  placeholder={'Enter your Email'}
                  value={email}
                  onChangeText={setEmail}
                />
                <MyInputBox
                  placeholder={'Enter your Password'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                <Text onPress={() => {}} style={{color: colors.primary}}>
                  Forgot password?
                </Text>
                <MyButton onPress={handleSignup} buttonName={'Sign Up'} />
              </View>
              <View style={styles.bottom}>
                <Text style={{color: 'white'}}>Already have an account?</Text>
                <Text
                  onPress={() => {
                    navigation.replace('Login');
                  }}
                  style={{
                    color: colors.primary,
                    padding: 12,
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;

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
