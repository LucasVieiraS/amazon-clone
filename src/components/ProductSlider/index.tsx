import React, { useEffect, useState } from "react";

import { View, ScrollView } from "react-native";

import Card from "../../components/Card";

import axios, { AxiosResponse } from "axios";
import { ProductData } from "../../interfaces/ProductData";
import { styles } from "./styles";
import FailedToLoad from "../FailedToLoad";

interface ProductSliderProps {
  params?: string
}

const fetchProducts = async (params: string = '') => {
  const endpoint = "https://fakestoreapi.com/products";
  const configurationObject = {
    method: "get",
    url: `${endpoint}${params}`,
  };
  return await axios(configurationObject);
};

export default function ProductSlider({ params }: ProductSliderProps) {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    fetchProducts(params)
      .then((response: AxiosResponse) => response.data)
      .then((productData: ProductData[]) => setProducts(productData));
  }, [fetchProducts]);

  return (
    <View style={styles.root}>
      {products.length > 0 && (
        <ScrollView horizontal style={styles.scrollView}>
          {products.map((productData: ProductData) => {
            return <Card key={productData.id} productData={productData} />;
          })}
        </ScrollView>
      )
      }
      {products.length == 0 && (
        <FailedToLoad message="Oops, não encontramos esses produtos!" />
      )}
    </View>
  );
}
