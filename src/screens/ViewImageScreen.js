import React from 'react';
import { Image, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='#FFF' size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='#FFF'
          size={35}
        />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
