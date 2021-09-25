import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import MessagesScreen from './src/screens/MessagesScreen';
import Screen from './src/components/Screen';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import AccountScreen from './src/screens/AccountScreen';
import ListingsScreen from './src/screens/ListingsScreen';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <TextInput
        maxLength={10}
        keyboardType='numeric'
        onChangeText={(text) => setFirstName(text)}
        placeholder='First Name'
        style={{ borderBottomColor: '#CCC', borderBottomWidth: 1 }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
