import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../utils/Colors';

const MyButton = ({buttonName, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
