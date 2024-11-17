import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';

export default function CustomButton({text, onPress, style, button}) {
  return (
    <View style={[styles.container, {...style}]}>
      <TouchableOpacity onPress={onPress} style={[styles.button, {...button}]}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    width: '90%',
    backgroundColor: COLORS.main,
    alignSelf: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  image: {
    height: 60,
    objectFit: 'contain',
    position: 'absolute',
    right: -20,
  },
});
