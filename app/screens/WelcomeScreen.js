import React from 'react';

import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/Button';
import colors from '../config/colors';
import routes from '../navigation/routes';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={8}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}
        />
        <Text style={styles.tagline}>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color='white' onPress={() => navigation.navigate(routes.LOGIN)}/>
        <AppButton title="Register" color="black" textColor='white' onPress={() => navigation.navigate(routes.REGISTER)}/>
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
