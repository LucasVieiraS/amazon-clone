import { useEffect, useState } from "react";

import Icons from "@expo/vector-icons/MaterialCommunityIcons";

import { Text, View } from "react-native";
import { styles } from "./styles";

export default function LocationBanner() {
  const [postal, setPostal] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [city, setCity] = useState<string>();

  useEffect(() => {
    setPostal("12345-1234")
    setUsername("Lucas")
    setCity("São Paulo")
  }, [setPostal, setUsername, setCity])

  return (
    <View style={styles.textWithIcon}>
      <Icons name="map-marker-outline" size={28} style={{marginRight: 8}}/>
      <Text style={styles.title1}>
        {(postal && username && city) ? `Enviar para ${username} - ${city} ${postal}` : 'Carregando...'}
      </Text>
    </View>
  );
}

