import React from "react";
import pages from "../constants/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";
import { ChooseModeScreen, GetStartedScreen, SignupOrSignInScreen, SplashScreen } from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList, "AppStack">();

const AppStack = () => {
    return (
        <Stack.Navigator
            id="AppStack"
            initialRouteName={pages.splash}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={pages.splash} component={SplashScreen} />
            <Stack.Screen name={pages.get_started} component={GetStartedScreen} />
            <Stack.Screen name={pages.choose_mode} component={ChooseModeScreen} />
            <Stack.Screen name={pages.sign_up_or_sign_in} component={SignupOrSignInScreen} />
        </Stack.Navigator>
    )
}

export default AppStack;