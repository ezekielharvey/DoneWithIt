import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/images/chair.jpg')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {},
  deleteIcon: {},
  header: {
    position: 'absolute',
    top: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 30,
    zIndex: 100,
    width: '100%',
  },
});

export default ViewImageScreen;
