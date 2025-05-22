import React from "react";
import pages from "../constants/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types";
import { HomeScreen, ProfileScreen, RootScreen, SongPlayerScreen } from "../screens";
import { useFavoriteSongs } from "../hooks";

const Stack = createNativeStackNavigator<RootStackParamList, "AppStack">();

const AppStack = () => {

    const _ = useFavoriteSongs()

    return (
        <Stack.Navigator
            id="AppStack"
            initialRouteName={pages.home}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={pages.root} component={RootScreen} />
            <Stack.Screen name={pages.home} component={HomeScreen} />
            <Stack.Screen name={pages.song_player} component={SongPlayerScreen} />
            <Stack.Screen name={pages.profile} component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default AppStack;