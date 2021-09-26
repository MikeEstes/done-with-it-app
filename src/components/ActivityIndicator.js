import React from 'react';
import { Text } from 'react-native';
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <>
      {/* TODO: Fix this loading Indicator */}
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
      <Text>This is loading</Text>
    </>
  );
};

export default ActivityIndicator;
