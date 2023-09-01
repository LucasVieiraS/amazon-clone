import React from "react";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
} from "react-native";

import Card from "../../components/card";
import LocationBanner from "../../components/location-banner";
import Navbar from "../../components/navbar";

export interface ProductData {
  id?: number;
  productName: string;
  productImage: ImageSourcePropType;
  productPrice: number;
}

export default function Home() {
  const products: ProductData[] = [
    {
      id: 1,
      productName: "Guitarra Tagima T403",
      productPrice: 1200,
      productImage: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJsAzhFFHWBA_kTp6M6cmuv6bysC2qcbmeQ&usqp=CAU",
      },
    },
    {
      id: 2,
      productName: "Guitarra Tagima T403",
      productPrice: 1200,
      productImage: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJsAzhFFHWBA_kTp6M6cmuv6bysC2qcbmeQ&usqp=CAU",
      },
    },
  ];

  return (
    <>
      <View>
        <Navbar />
        <LocationBanner />
        <View style={styles.root}>
          <ScrollView horizontal style={styles.scrollView}>
            {products.map((productData: ProductData) => {
              return (
                <Card
                  productName={productData.productName}
                  productPrice={productData.productPrice}
                  productImage={productData.productImage}
                  key={productData.id}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export const gap = 8;

const styles = StyleSheet.create({
  backgroundHolder: {
    flex: 1,
    flexDirection: "column",
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: gap / -2,
    marginTop: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textWithIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    gap: 6,
  },
  root: {
    padding: 6,
    width: "100%",
  },
  title1: {
    fontWeight: "bold",
    color: "white",
  },
});
