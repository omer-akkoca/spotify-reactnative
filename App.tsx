import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider, ThemeProvider } from "./src/providers";
import RootNavigation from "./src/navigation";
import SystemNavigationBar from "react-native-system-navigation-bar";
import TrackPlayer from 'react-native-track-player';

const App = () => {

    useEffect(() => {
        SystemNavigationBar.setNavigationColor('translucent');
        setupTrackPlayer()
    }, [])

    const setupTrackPlayer = async () => {
        await TrackPlayer.setupPlayer()
    }

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <AuthProvider>
                    <RootNavigation />
                </AuthProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default App;