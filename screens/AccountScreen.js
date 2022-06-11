import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import Icon from '../app/components/Icon';
import ListItem from '../app/components/ListItem';
import ListItemSeparatorComponent from '../app/components/ListItemSeparator';
import Screen from '../app/components/Screen';
import colors from '../app/config/colors';

const menuItems = [
  { 
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.black
    }
  },
  { 
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.black
    }
  },
  
]

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
      <ListItem
        title="Ezekiel Harvey"
        subTitle="zekeharvey@outlook.com"
        image={require('../app/assets/profile.jpeg')}
      />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({item}) => 
            <ListItem 
              title={item.title}
              IconComponent={
                <Icon 
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
            }/>    
      </View>
      <ListItem 
        title='Logout'
        IconComponent={
          <Icon name='logout' backgroundColor={colors.black}/>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
screen: {
  backgroundColor: colors.light
}  
})

export default AccountScreen;
