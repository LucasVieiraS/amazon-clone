import React from "react";

import { Text, View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <>
      <View style={styles.nav}>
        <Text style={styles.header}>INSTRUMENTAL</Text>
      </View>
      <View style={styles.root}>
        <View style={styles.textWithIcon}>
          <Text>
            <Ionicons name="ios-cart" size={32} color="gray" />
          </Text>
          <Text style={styles.title1}>PRODUTOS</Text>
          <View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: "flex",
    justifyContent: "flex-end",

    padding: 1,
    paddingBottom: 8,
    paddingHorizontal: 15,

    width: "100%",
    height: 70,
    backgroundColor: "red",
  },
  header: {
    fontFamily: "RubikSemibold",
    fontSize: 26,
  },
  textWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  root: {
    padding: 6,
  },
  title1: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#454f5e',
  },
});
