
import React from 'react';
import { Text, Image } from 'react-native';
import WavyHeader from '../../components/WaveTop'
import WavyHeaderbot from '../../components/WaveBot'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';


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

    const navigation = useNavigation()

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

    const print = () => {
        // @ts-ignore
        navigation.navigate("Login");
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
            onDone={print}
        />
        <WavyHeaderbot />
    </>
    )
}
