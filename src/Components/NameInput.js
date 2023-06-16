import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

function NameInput({placeholder, onChange, value}) {
  return (
    <TextInput
      style={styles.nameInput}
      onChangeText={text => onChange(text)}
      placeholder={placeholder}
      placeholderTextColor={'gray'}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  nameInput: {
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15
  },
});

export default NameInput;
