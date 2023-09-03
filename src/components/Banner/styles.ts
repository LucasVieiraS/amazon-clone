import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    card: {
      width: 120,
      height: 160,
      backgroundColor: "#202024",
      borderRadius: 6,
      padding: 8,
  
      shadowColor: "#171717",
      elevation: 5,
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
      fontFamily: THEME.FONT_FAMILY.BOLD,
      color: 'white',
    },
    productPrice: {
      color: "green",
    },
  });
  