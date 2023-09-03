import { StyleSheet } from 'react-native';
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "70%",
        paddingHorizontal: 10,

        display: "flex",
        flexDirection: "row",
        paddingVertical: 6,
        alignItems: "center",

        backgroundColor: "white",
        borderRadius: 6,

        borderColor: "rgba(0, 0, 0, .2)",
        borderStyle: "solid",
        borderWidth: 1,

        shadowColor: "#00000",
        elevation: 5,
    },

    searchBar: {
        width: "85%",
        height: "100%",
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 6,

        shadowColor: "#00000",
        elevation: 5,
    },

    searchBarHolder: {
        height: "80%",
        width: "100%",
        paddingHorizontal: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    searchBarText: {
        fontSize: THEME.FONT_SIZE.MD,
        width: '100%',
        height: '100%',
        lineHeight: 0,
        marginVertical: 'auto',
    }
});
