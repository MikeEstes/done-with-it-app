import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigatior = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      headerShown: false,
      presentation: 'modal',
    }}>
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigatior;
