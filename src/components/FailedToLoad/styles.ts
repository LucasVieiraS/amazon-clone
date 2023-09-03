import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 7,

    width: '100%',
    height: 300,
    paddingHorizontal: 20,
  },
  dog: {
    width: '80%',
    height: '90%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  message: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },

});
