import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";



export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    InputArea: {
        width: "100%",
        padding: 40
    },
    CustomButton: {
        height: 60,
        backgroundColor: theme.colors.button,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    CustomButtonText: {
        fontSize: 16,
        color: "#FFF"
    },
    SignMessageButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 20
    },
    SignMessageButtonText: {
        fontSize: 16,
        color: theme.colors.button,
    },
    SignMessageButtonTextBold: {
        fontSize: 16,
        color: theme.colors.button,
        fontWeight: "bold",
        marginLeft: 5
    }
})