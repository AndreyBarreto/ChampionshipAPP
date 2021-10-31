import React from "react";
import { View, Text, Image, TextInput, TextInputProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { styles } from './style'
// import Lock from "../../../assets/svgs/lock.svg"
import { Icon } from 'react-native-elements'


interface Props extends TextInputProps {
    icon: string
}

export default function TextField({
    icon, ...rest
}: Props) {
    return (
        <View style={styles.InputArea}>

            <Icon style={styles.Icon}
                name={icon}
                color='#517fa4' />
            <TextInput
                style={styles.Text}
                {...rest}
            />
        </View >

    )

}