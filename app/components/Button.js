import colors from '../config/colors';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react-native';

function AppButton({ title, onPress, color='black', textColor }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor]}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    marginVertical: 5,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
