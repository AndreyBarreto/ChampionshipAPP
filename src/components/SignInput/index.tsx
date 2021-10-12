import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { styles } from './style'
// import Lock from "../../../assets/svgs/lock.svg"
import { Icon } from 'react-native-elements'




type Props = RectButtonProps & {
    title: string
    icon: string
}

export default function SignIn({
    title, icon, ...rest
}: Props) {
    return (
        <View style={styles.InputArea}>

            <Icon style={styles.Icon}
                name={icon}
                color='#517fa4' />
            <TextInput style={styles.Text}
                underlineColorAndroid='transparent'></TextInput>
        </View >

    )

}