import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./app";
import { StatusBar } from "react-native";
import { useTheme } from "../providers";
import AuthStack from "./auth";

const RootNavigation = () => {

    const { theme } = useTheme()

    const user = null

    return(
        <NavigationContainer>
            <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"}/>
            {
                user ? <AppStack/> : <AuthStack/>
            }
        </NavigationContainer>
    )
}

export default RootNavigation;