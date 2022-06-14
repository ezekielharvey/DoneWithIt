import React from 'react';

import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../app/components/Button';
import colors from '../app/config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../app/assets/background.jpg')}
      blurRadius={8}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../app/assets/logo-red.png')}
        />
        <Text style={styles.tagline}>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color='white' />
        <AppButton title="Register" color="black" textColor='white' />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.white,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.black,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: 25,
    fontStyle: 'italic',
  },
});

export default WelcomeScreen;
