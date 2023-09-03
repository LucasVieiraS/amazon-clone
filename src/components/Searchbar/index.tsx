import { TextInput, View } from "react-native";

import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from './styles';

export default function Searchbar() {
  const showBackButton = false;
  return (
    <>
      <View
        style={styles.searchBarHolder}
      >
        { showBackButton && (<Icons name="arrow-left" size={28} style={{marginRight: 8}} />) }
        <View style={styles.root}>
          <Icons name="magnify" size={26} style={{marginRight: 6}}/>
          <TextInput
            placeholder="Pesquisar na Amazon"
            style={styles.searchBarText}
          />
        </View>
      </View>
    </>
  );
}