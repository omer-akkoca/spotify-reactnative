import React from "react";
import pages from "../constants/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";
import { HomeScreen } from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList, "AppStack">();

const AppStack = () => {
    return (
        <Stack.Navigator
            id="AppStack"
            initialRouteName={pages.home}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={pages.home} component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default AppStack;