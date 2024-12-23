import {
  SafeAreaView,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AppBar from '../../components/AppBar';
import MyInputBox from '../../components/MyInputBox';
import MyButton from '../../components/MyButton';
import MyToast from '../../helpers/MyToast';
import CRUDService from '../../services/curd_operations_service';
import {firebase} from '@react-native-firebase/auth';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../utils/Colors';

const AddBankDetails = () => {
  const [form, setForm] = useState({
    name: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: '',
  });

  const handleChange = (field, value) => {
    setForm(prevState => ({...prevState, [field]: value}));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.accountNumber || !form.ifscCode) {
      MyToast.showError('All fields are required');
      return;
    }

    try {
      const user = firebase.auth().currentUser;
      if (!user) {
        throw new Error('User not authenticated');
      }

      form.userId = user.uid;
      console.log(user.uid);
      await CRUDService.create('BankDetails', form);
      MyToast.showSuccess('Bank Details added successfully');
    } catch (error) {
      console.error('Error signing up:', error);
      MyToast.showError('Failed to add bank details');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar name="Add Bank Details" />

      <ScrollView contentContainerStyle={styles.formWrapper}>
        <Image
          style={{marginBottom: 12}}
          source={require('../../assets/images/add_details.png')}
        />
        <MyInputBox
          placeholder="Full Name"
          iconName="user-o"
          value={form.name}
          onChangeText={value => handleChange('name', value)}
        />
        <MyInputBox
          placeholder="Account Number"
          iconName="credit-card"
          value={form.accountNumber}
          onChangeText={value => handleChange('accountNumber', value)}
          keyboardType="numeric"
        />
        <MyInputBox
          placeholder="IFSC Code"
          iconName="bank"
          value={form.ifscCode}
          onChangeText={value => handleChange('ifscCode', value)}
        />
        <MyInputBox
          placeholder="IFSC Code"
          iconName="bank"
          value={form.ifscCode}
          onChangeText={value => handleChange('ifscCode', value)}
        />
        <MyInputBox
          placeholder="Bank Name"
          iconName="building-o"
          value={form.bankName}
          onChangeText={value => handleChange('bankName', value)}
        />
        <MyInputBox
          placeholder="Branch Name"
          iconName="map-marker"
          value={form.branchName}
          onChangeText={value => handleChange('branchName', value)}
        />
        <MyButton buttonName="Submit" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddBankDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  formWrapper: {
    paddingHorizontal: 18,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
});
