import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from "../screens/Home";
import { Introduction } from "../screens/Introduction";
import { Championships } from "../screens/Championships"
import { Login } from "../screens/Login"
import { CreateChampionship } from "../screens/CreateChampionship";
import FooterSelect from "../components/FooterSelect";
const { Navigator, Screen } = createNativeStackNavigator();


export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="FooterSelect"
                component={FooterSelect}

            />

            <Screen
                name="CreateChampionship"
                component={CreateChampionship}

            />
            <Screen
                name="Introduction"
                component={Introduction}

            />
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="Championships"
                component={Championships}
            />

            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )

}