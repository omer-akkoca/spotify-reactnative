import React from "react";
import pages from "../constants/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList, "AppStack">();

const AppStack = () => {
    return (
        <Stack.Navigator
            id="AppStack"
            initialRouteName={pages.x}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen  name={pages.x} component={() => <></>}/>
        </Stack.Navigator>
    )
}

export default AppStack;