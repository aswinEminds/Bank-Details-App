import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyInputBox = ({
  placeholder,
  placeholderTextColor = 'lightgrey',
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  iconName,
  iconColor = 'grey',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          color={iconColor}
          style={styles.iconStyle}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

MyInputBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.object,
};

export default MyInputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(156, 155, 155, 0.5)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    width: '100%',
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
  },
  iconStyle: {
    marginRight: 8,
  },
});
