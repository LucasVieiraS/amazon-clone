import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../theme'

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    scroll: {
        width: '100%',
        height: 76,
        marginTop: 6,
        paddingHorizontal: 4,
    },
    errorMessage: {
        height: '100%',
        width: screenWidth - 40,
        marginTop: '5%',
        textAlign: 'center',
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    }
});