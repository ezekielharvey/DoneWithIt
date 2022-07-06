import React from 'react';
import Lottie from 'lottie-react-native'

function ActivityIndicator({ visible = false}) {
  if (!visible) return null;

  return <Lottie source={require('../assets/animations/loading.json')} autoplay loop />
}



export default ActivityIndicator;