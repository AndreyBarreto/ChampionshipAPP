import React from "react";
import { View, Text } from "react-native";
import { styles } from './style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from "../../screens/Login";
import { Championships } from "../../screens/Championships";
import { CreateChampionship } from "../../screens/CreateChampionship";

const Tab = createBottomTabNavigator();



function CustomTabBar(props) {
    return <View style={styles.backgroud}></View>

}


export default function FooterSelect() {
    return (
        <Tab.Navigator tabBar={props => <CustomTabBar{...props} />}>
            <Tab.Screen name="Campeonatos" component={Championships} />
            <Tab.Screen name="Criar" component={CreateChampionship} />
            <Tab.Screen name="Perfil" component={Login} />
        </Tab.Navigator >
    );

}