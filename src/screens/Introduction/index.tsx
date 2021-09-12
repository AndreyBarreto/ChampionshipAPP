
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import WavyHeader from '../../components/Wave'
import { styles } from './style'



export function ScreenOne() {
    return (
        <View>
            <WavyHeader />
            <Image
                style={styles.img}
                source={require('../../../assets/futebolChar.png')}
            />
        </View>
    );
}
