import React from "react";
import { View, Text } from "react-native";
import SignIn from "../../components/SignInput"
import { styles } from './style'
import WavyHeader from '../../components/WaveTop'
import WavyHeaderbot from '../../components/WaveBot'

export function Login() {
    return (<>
        <WavyHeader />
        <View style={styles.Container}>
            <View style={styles.InputArea}>
                <SignIn icon='email' title="Oi" />
                <SignIn icon="lock" title="Oi" />
                <View style={styles.CustomButton}>
                    <Text style={styles.CustomButtonText}>LOGIN</Text>
                </View>
            </View>
            <View style={styles.SignMessageButton}>
                <Text style={styles.SignMessageButtonText}>Ainda não possui uma conta?</Text>
                <Text style={styles.SignMessageButtonTextBold}>Cadastre-se</Text>
            </View>
        </View>
        <WavyHeaderbot />
    </>
    )

}