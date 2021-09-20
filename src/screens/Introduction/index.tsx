
import React from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';
import WavyHeader from '../../components/WaveTop'
import WavyHeaderbot from '../../components/WaveBot'
import { styles } from './style'
import { theme } from "../../global/styles/theme";


interface IntroductionType {
    title: string,
    title2: string,
    subtitle: string,
    subtitle2: string,
}

export function Introduction(props: IntroductionType) {
    const onpress = () => {
        console.log('oxi')
    }
    return (
        <View style={styles.container}>
            <WavyHeader />
            <Image
                style={styles.img}
                source={require('../../../assets/futebolChar.png')}
            />
            <View >
                <Text style={styles.title}>
                    {`${props.title}\n`}
                    {`${props.title2}\n`}
                </Text>
                <Text style={styles.subtitle}>
                    {`${props.subtitle}\n`}
                    {`${props.subtitle2}\n`}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={onpress}
                >
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={onpress}
                >
                    <Text style={styles.buttonTitle}>Próximo</Text>
                </TouchableHighlight>
            </View>

            <WavyHeaderbot />



        </View>
    );
}
