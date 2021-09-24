import React from 'react';
import { StyleSheet, View } from 'react-native';

import MessagesScreen from './src/screens/MessagesScreen';

export default function App() {
  return (
    <>
      <MessagesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
