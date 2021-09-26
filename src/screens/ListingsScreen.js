import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import Text from '../components/Text';

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button title='Retry' onPress={loadListings} />
        </>
      )}
      <ActivityIndicator animating={loading} size='large' color='#000' />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate('ListingDetails', item)}
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
