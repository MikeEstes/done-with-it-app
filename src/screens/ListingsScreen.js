import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import Text from '../components/Text';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button title='Retry' onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
