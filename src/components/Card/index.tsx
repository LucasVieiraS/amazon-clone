import React from "react";
import { Text, View, Image, Pressable } from "react-native";

import { styles } from "./styles";
import { ProductData } from "../../interfaces/ProductData";

import Icons from "@expo/vector-icons/MaterialCommunityIcons";

import { formatCurrency } from "react-native-format-currency";

export default function Card({ productData, key }: { productData: ProductData, key: number }) {
  const [_, valueFormattedWithoutSymbol] = formatCurrency({ amount: productData.price, code: "BRL" })
  return (
    <Pressable android_ripple>
      <View style={styles.card}>
        <Image source={{ uri: productData.image }} style={styles.cardImage} />
        <View style={styles.cardTextHolder}>
          <Text style={styles.productName}>{productData.title}</Text>
          <Text style={styles.productPrice}><Icons name="currency-brl" size={12} /> {valueFormattedWithoutSymbol}</Text>
        </View>
      </View>
    </Pressable>
  );
}
