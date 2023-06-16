import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

function MainButton({title, onPress, disabled, loading}) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.mainButton}
      disabled={disabled}>
      <Text style={styles.mainButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainButton: {
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    fontSize: 22,
    color: 'white',
  },
});

export default MainButton;
