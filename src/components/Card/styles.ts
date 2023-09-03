import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 200,

    borderRadius: 6,
    padding: 8,

    backgroundColor: 'white',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    marginHorizontal: 4

  },
  cardImage: {
    width: "100%",
    height: "60%",
    borderRadius: 6,
    resizeMode: 'contain'
  },
  cardTextHolder: {
    width: "100%",
    height: "100%",
  },
  productName: {
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    maxHeight: 50,
    minHeight: 50,
  },
  productPrice: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginTop: 2,
  },
});
