import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { gap, ProductData } from "../screens/Home/index";

export default function Card({
  productName,
  productPrice,
  productImage,
}: ProductData) {
  return (
    <View style={styles.card}>
      <Image source={productImage} style={styles.cardImage} />
      <View style={styles.cardTextHolder}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.productPrice}>R$ {productPrice}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "40%",
    height: 160,
    backgroundColor: "#202024",
    borderRadius: 6,
    padding: 8,
    marginHorizontal: gap / 2,

    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardImage: {
    width: "100%",
    height: "60%",
    borderRadius: 6,
  },
  cardTextHolder: {
    width: "100%",
    height: "100%",
  },
  productName: {
    fontWeight: "bold",
    color: 'white',
  },
  productPrice: {
    color: "green",
  },
});
