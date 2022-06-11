import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../app/components/Card';
import Screen from '../app/components/Screen';
import colors from '../app/config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../app/assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../app/assets/couch.jpg'),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  }
})

export default ListingsScreen;
