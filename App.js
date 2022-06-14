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
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import StylesPractice from './cubePractice';
import TextPractice from './textPractice';
import AppButton from './app/components/Button';
import Card from './app/components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './app/components/TextInput';
import { useEffect, useState } from 'react';
import AppPicker from './app/components/Picker';
import LoginScreen from './screens/LoginScreen';
import ListingEditScreen from './screens/ListingEditScreen';
import RegisterScreen from './screens/RegisterScreen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList'

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  
  return (
    <Screen>
      <ImageInputList
        imageUri={imageUris}
        onChangeImage={uri => setImageUris(uri)}
        />
    </Screen>
  );
}
