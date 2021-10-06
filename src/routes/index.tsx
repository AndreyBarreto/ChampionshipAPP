import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./routes";

export function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )

}