import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import WavyHeader from '../../components/WaveTop'
import WavyHeaderbot from '../../components/WaveBot'
import FooterSelect from "../../components/FooterSelect";

export function Home() {
    return (
        <View>
            <WavyHeader />
            <FooterSelect />
        </View>

    )

}