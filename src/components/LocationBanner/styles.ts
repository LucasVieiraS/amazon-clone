import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    textWithIcon: {
      height: 40,
      backgroundColor: "#B4E6EB",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    root: {
      padding: 6,
      width: "100%",
    },
    title1: {
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      fontSize: 15,
      marginRight: 10,
    },
  });
  