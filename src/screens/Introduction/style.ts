import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";



export const styles = StyleSheet.create({
    img: {
        height: 220,
        width: 220,
        marginTop: 50,
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto"
    },
    container: {
        backgroundColor: theme.colors.background,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        marginTop:30
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        marginTop: -20
    },
    buttonContainer: {
        justifyContent: "space-around",
        flexDirection: "row",
        display: "flex",
    },
    button: {
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        padding: 10,
        width: 140,
        height: 45,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    buttonTitle: {
        color: "white",

    }
})