import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  category: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 70,
    height: 70,

    marginHorizontal: 3,

    backgroundColor: 'white',
    borderRadius: 70/2,
    aspectRatio: 1,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 3,
  }
});
