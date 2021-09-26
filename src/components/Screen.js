import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;

// paddingTop: Constants.statusBarHeight,
