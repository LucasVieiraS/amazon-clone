import { StyleSheet, TextInput, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Searchbar from './searchbar';

export default function Navbar() {
  return (
    <View style={{ height: 70, width: "100%" }}>
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={["#85D8E0", "#A7E4D0"]}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Searchbar />
      </LinearGradient>
    </View>
  );
}
