import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Dimensions,
  Button,
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import StylesPractice from './cubePractice';
import TextPractice from './textPractice';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder='Username' icon='email'/>
    </Screen>
  );
}
