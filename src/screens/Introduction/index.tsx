
import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import WavyHeader from '../../components/WaveTop'
import WavyHeaderbot from '../../components/WaveBot'
import { styles } from './style'
import { theme } from "../../global/styles/theme";
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import batata from "../../../assets/tennisChar.png"


interface Islide {
    key: string,
    title: string,
    title2: string,
    subtitle: string,
    subtitle2: string,
    image: string
}

const slides: Array<Islide> = [{
    key: "Soccer",
    title: "Organize seus",
    title2: "campeonatos",
    subtitle: "Jogue campeonato",
    subtitle2: "e faça amizade",
    image: require("../../../assets/futebolChar.png")
},
{
    key: "voley",
    title: "Organize seus",
    title2: "campeonatos",
    subtitle: "Jogue campeonato",
    subtitle2: "e faça amizade",
    image: require("../../../assets/tennisChar.png")
}, {
    key: "basket",
    title: "Organize seus",
    title2: "campeonatos",
    subtitle: "Jogue campeonato",
    subtitle2: "e faça amizade",
    image: require("../../../assets/volleyChar.png")
}]

export function Introduction() {

    function renderSlides({ item }) {
        return (<>
            <Image
                style={styles.img}
                source={item.image}
            />
            <Text style={styles.title}>
                {`${item.title}\n`}
                {`${item.title2}\n`}
            </Text>
            <Text style={styles.subtitle}>
                {`${item.subtitle}\n`}
                {`${item.subtitle2}\n`}
            </Text>
        </>
        )
    }

    return (<>
        <WavyHeader />
        <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
                backgroundColor: "#009CFF",
                width: 40
            }}
        />
        <WavyHeaderbot />
    </>
    )
}
