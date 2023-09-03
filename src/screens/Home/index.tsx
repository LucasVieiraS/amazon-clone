import React from "react";

import {
  View,
  Text
} from "react-native";

import LocationBanner from "../../components/LocationBanner";
import Navbar from "../../components/Navbar";
import ProductSlider from "../../components/ProductSlider";
import ScreenDivider from "../../components/ScreenDivider";
import SectionTitle from "../../components/SectionTitle";
import CategoriesSlider from "../../components/CategoriesSlider";

export default function Home() {
  return (
    <>
      <View>
        <Navbar />
        <LocationBanner />
        <CategoriesSlider />
        <ScreenDivider />
        <SectionTitle>
          Mais Vendidos
        </SectionTitle>
        <ProductSlider params="?limit=15" />
        <ScreenDivider />
        <SectionTitle>
          Ofertas do Dia
        </SectionTitle>
        <ProductSlider params="?sort=desc" />
      </View>
    </>
  );
}