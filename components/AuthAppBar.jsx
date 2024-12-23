import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AuthAppBar = ({name}) => (
  <View style={styles.appBarWrapper}>
    <Icon.Button
      backgroundColor="transparent"
      name="chevron-left"
      size={30}
      color="#ffff"
    />
    <Text style={styles.text}>{name}</Text>
  </View>
);

export default AuthAppBar;

const styles = StyleSheet.create({
  appBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 5,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
