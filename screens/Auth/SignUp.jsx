import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../utils/Colors';
import AuthAppBar from '../../components/AuthAppBar';
import MyInputBox from '../../components/MyInputBox';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {signUp} from '../../services/authServices';
import MyToast from '../../helpers/MyToast';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      console.log(name, email, password);
      await signUp(name, email.trim(), password);
      MyToast.showSuccess('Signed In Successfully');
      navigation.replace('Home');
    } catch (error) {
      console.error('Error signing up:', error);
      MyToast.showError('Error signing up');
    }
  };

  return (
    <SafeAreaView>
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
            <Text>Already have an account?</Text>
            <Text
              onPress={() => {
                navigation.replace('Login');
              }}
              style={{color: colors.primary, padding: 12, fontWeight: 'bold'}}>
              Login
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
    objectFit: 'contain',
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
