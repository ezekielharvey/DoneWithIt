import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Text from '../components/Text';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
          <Progress.Bar progress={progress} color="#000" width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
