import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from "../screens/Home";
import { Introduction } from "../screens/Introduction";
import { Introduction2 } from "../screens/Introduction2";
import { Introduction3 } from "../screens/Introduction3";

const { Navigator, Screen } = createNativeStackNavigator();


export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Introduction"
                component={Introduction}

            />
            <Screen
                name="Introduction2"
                component={Introduction2}

            />
            <Screen
                name="Introduction3"
                component={Introduction3}

            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )

}