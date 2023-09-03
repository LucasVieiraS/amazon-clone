import { View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Searchbar from '../Searchbar';
import { styles } from "./styles";

export default function Navbar() {
  return (
    <View style={{ height: 70, width: "100%" }}>
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={["#85D8E0", "#A7E4D0"]}
        style={styles.gradient}
      >
        <Searchbar />
      </LinearGradient>
    </View>
  );
}
