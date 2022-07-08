import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Dimensions,
  Button,
  Switch,
  Image,
  Text,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import StylesPractice from './cubePractice';
import TextPractice from './textPractice';
import AppButton from './app/components/Button';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/TextInput';
import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={()=> console.log('error')}/>
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

  // const Stack = createStackNavigator();

  // const Link = ({ navigation }) => {
  //   return <Button title="Click" onPress={() => navigation.navigate('Tweets')} />;
  // };

  // const Tweets = ({ navigation }) => (
  //   <Screen>
  //     <Text>Tweets</Text>
  //     <Button
  //       title="Go to Tweet Details"
  //       onPress={() => navigation.navigate('TweetDetails')}
  //     />
  //   </Screen>
  // );
  // const TweetDetails = ({ navigation }) => (
  //   <Screen>
  //     <Text>Tweet Details</Text>
  //     <Button title="Button" onPress={() => navigation.navigate('Tweets')} />
  //   </Screen>
  // );

  // const StackNavigator = () => (
  //   <Stack.Navigator screenOptions={{ headerShown: false }}>
  //     <Stack.Screen
  //       name="Tweets"
  //       component={Tweets}
  //       options={{
  //         headerStyle: {
  //           backgroundColor: '#444',
  //           activeTintColor: '#fff',
  //           inactiveTintColor: '#000',
  //           inactiveBackgroundColor: '#fff',
  //         },
  //         headerTintColor: 'white',
  //       }}
  //     />
  //     <Stack.Screen name="TweetDetails" component={TweetDetails} />
  //   </Stack.Navigator>
  // );

  // const Account = () => (
  //   <Screen>
  //     <Text>Account</Text>
  //   </Screen>
  // );

  // const Tab = createBottomTabNavigator();
  // const TabNavigator = () => (
  //   <Tab.Navigator tabBarOptions={{ activeBackgroundColor: '#e6e6e6' }}>
  //     <Tab.Screen
  //       name="Feed"
  //       component={StackNavigator}
  //       options={{
  //         tabBarIcon: ({size, color}) => <Ionicons name="home" color="#000" size={size}/>,
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Account"
  //       component={Account}
  //       options={{
  //         tabBarIcon: ({size, color}) => <Ionicons name="person" color="#000" size={size} />,
  //       }}
  //     />
  //   </Tab.Navigator>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingBottom: 15,
//   }
// })
