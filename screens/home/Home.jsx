import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatingActionButton from '../../components/FloatingActionButton';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FloatingActionButton
        onPress={() => {
          navigation.navigate('AddBankDetails');
        }}
        iconName="add"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
