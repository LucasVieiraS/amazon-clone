import { useState } from "react";

import Icons from "@expo/vector-icons/MaterialCommunityIcons";

import { Text, View, StyleSheet } from "react-native";

export default function LocationBanner() {
  const [postal, setPostal] = useState("12456-1234");
  const [username, setUsername] = useState("Lucas");
  const [city, setCity] = useState("São Paulo");

  return (
    <View style={styles.textWithIcon}>
      <Icons name="map-marker-outline" size={28} style={{marginRight: 8}}/>
      <Text style={styles.title1}>
        Enviar para {username} - {city} {postal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textWithIcon: {
    height: 40,
    backgroundColor: "#B4E6EB",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    padding: 6,
    width: "100%",
  },
  title1: {
    fontWeight: "500",
    fontSize: 15,
    marginRight: 10,
  },
});
