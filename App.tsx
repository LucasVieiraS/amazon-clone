import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import Home from './src/screens/Home';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    'RubikRegular': Rubik_400Regular,
    'RubikBold': Rubik_700Bold,
    'RubikMedium': Rubik_500Medium,
    'RubikSemibold': Rubik_600SemiBold,
  });
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}
