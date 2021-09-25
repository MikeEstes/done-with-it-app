import React, { useState } from 'react';
import { StyleSheet, Switch, TextInput, View } from 'react-native';

import AccountScreen from './src/screens/AccountScreen';
import ListingEditScreen from './src/screens/ListingEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import MessagesScreen from './src/screens/MessagesScreen';

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
