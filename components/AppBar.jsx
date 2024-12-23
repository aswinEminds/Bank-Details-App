import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const AppBar = ({name}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.appBarWrapper}>
      <Icon.Button
        backgroundColor="transparent"
        onPress={() => {
          navigation.goBack();
        }}
        name="chevron-left"
        size={30}
        color="#313638"
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 5,
    width: '100%',
  },
  text: {
    color: '#313638',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
