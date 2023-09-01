import { StyleSheet, TextInput, View } from "react-native";

import Icons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Searchbar() {
  return (
    <>
      <View
        style={{
          height: "80%",
        }}
      >
        <View style={styles.searchBar}>
          <Icons name="arrow-left" size={28} />
          <TextInput
            style={styles.searchBar}
            placeholder="Some product you might like..."
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: "85%",
    height: "100%",
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 6,

    display: "flex",
    flexDirection: "row",
    paddingVertical: 6,
    alignItems: "center",

    shadowColor: "#00000",
    elevation: 5,
  },
});
