import React from 'react';
import { StyleSheet } from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';

export default function App() {
  return (
    <>
      <ViewImageScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
