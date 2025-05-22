import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider, ThemeProvider } from "./src/providers";
import RootNavigation from "./src/navigation";
import SystemNavigationBar from "react-native-system-navigation-bar";
import TrackPlayer from 'react-native-track-player';
import { Provider } from 'react-redux'
import store from "./src/store";

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
            <Provider store={store}>
                <ThemeProvider>
                    <AuthProvider>
                        <RootNavigation />
                    </AuthProvider>
                </ThemeProvider>
            </Provider>
        </SafeAreaProvider>
    )
}

export default App;