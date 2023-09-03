import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  backgroundHolder: {
    flex: 1,
    flexDirection: "column",
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    width: '100%',
    height: 205,
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
  },
  root: {
    padding: 10,
    paddingHorizontal: 8,
    width: "100%",
  },
  title1: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: "white",
  },
});
