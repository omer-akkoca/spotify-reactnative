import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./app";
import { StatusBar } from "react-native";
import { useTheme } from "../providers";

const RootNavigation = () => {

    const { theme } = useTheme()

    return(
        <NavigationContainer>
            <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"}/>
            <AppStack/>
        </NavigationContainer>
    )
}

export default RootNavigation;