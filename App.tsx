import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/providers";
import RootNavigation from "./src/navigation";
import SystemNavigationBar from "react-native-system-navigation-bar";

const App = () => {

    useEffect(() => {
        SystemNavigationBar.setNavigationColor('translucent');
    }, [])

    return(
        <SafeAreaProvider>
            <ThemeProvider>
                <RootNavigation/>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default App;