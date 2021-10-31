import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextField from "../../components/TextField"
import { styles } from './style'
import WavyHeader from '../../components/WaveTop'
import WavyHeaderbot from '../../components/WaveBot'
import { useNavigation } from '@react-navigation/native';


export function Login() {
    const navigation = useNavigation()

    const goToHome = () => {
        // @ts-ignore
        navigation.navigate("Home");
    }

    return (<>
        <WavyHeader />
        <View style={styles.Container}>
            <View style={styles.InputArea}>
                <TextField icon='email' placeholder='Digite seu e-mail' />
                <TextField icon="lock" placeholder='Digite sua senha ' />
                <TouchableOpacity
                    style={styles.CustomButton}
                    onPress={goToHome}
                >
                    <Text style={styles.CustomButtonText}>Login</Text>
                </TouchableOpacity>

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