import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../app/components/AppText';
import ListItem from '../app/components/ListItem';
import colors from '../app/config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../app/assets/jacket.jpg')}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
        <ListItem
          image={require('../app/assets/profile.jpeg')}
          title="Ezekiel Harvey"
          subTitle="5 Listings"
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
  }
});

export default ListingDetailsScreen;
