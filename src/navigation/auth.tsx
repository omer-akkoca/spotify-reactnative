import React from "react";
import pages from "../constants/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";
import { ChooseModeScreen, GetStartedScreen, SignInScreen, SignupOrSignInScreen, SignupScreen, SplashScreen } from "../screens";

const Stack = createNativeStackNavigator<RootStackParamList, "AuthStack">();

const AuthStack = () => {
    return (
        <Stack.Navigator
            id="AuthStack"
            initialRouteName={pages.splash}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={pages.splash} component={SplashScreen} />
            <Stack.Screen name={pages.get_started} component={GetStartedScreen} />
            <Stack.Screen name={pages.choose_mode} component={ChooseModeScreen} />
            <Stack.Screen name={pages.sign_up_or_sign_in} component={SignupOrSignInScreen} />
            <Stack.Screen name={pages.sign_up} component={SignupScreen} />
            <Stack.Screen name={pages.sign_in} component={SignInScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;