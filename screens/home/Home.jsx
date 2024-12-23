import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import FloatingActionButton from '../../components/FloatingActionButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/Colors';
import BankDetailsCard from '../../components/BankDetailsCard';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {});
  return (
    <View style={styles.container}>
      <FloatingActionButton
        onPress={() => {
          navigation.navigate('AddBankDetails');
        }}
        iconName="add"
      />
      <View>
        <View style={styles.profileHeader}>
          <View>
            <Text style={styles.text}>Hi, Aswin G</Text>
            <Text style={styles.subText}>Good Morning</Text>
          </View>
          <View style={styles.icon}>
            <Icon name="user" color={'white'} size={18} />
          </View>
        </View>
        <BankDetailsCard />
        <BankDetailsCard />
        <BankDetailsCard />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 18,
    paddingTop: 18,
    backgroundColor: '#0b030c',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  subText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  icon: {
    borderWidth: 1,
    backgroundColor: colors.primary,
    borderRadius: '50%',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
