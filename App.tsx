import React from "react";

import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
import Home from "./src/screens/Home";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    UbuntuRegular: Ubuntu_400Regular,
    UbuntuBold: Ubuntu_700Bold,
    UbuntuMedium: Ubuntu_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          minHeight: "100%",
        }}
      >
        <StatusBar />
        <Home />
      </SafeAreaView>
    </ScrollView>
  );
}
