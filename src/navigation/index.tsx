import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./app";
import { StatusBar } from "react-native";
import { useAuth, useTheme } from "../providers";
import AuthStack from "./auth";
import { LoadingScreen } from "../screens";

const RootNavigation = () => {

    const { theme } = useTheme()
    const { user, loading } = useAuth()

    if (loading) return <LoadingScreen/>

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