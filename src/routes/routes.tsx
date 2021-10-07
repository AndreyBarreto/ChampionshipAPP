import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from "../screens/Home";
import { Introduction } from "../screens/Introduction";

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
                name="Home"
                component={Home}
            />
        </Navigator>
    )

}