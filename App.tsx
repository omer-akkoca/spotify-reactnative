import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/providers";
import RootNavigation from "./src/navigation";

const App = () => {
    return(
        <SafeAreaProvider>
            <ThemeProvider>
                <RootNavigation/>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default App;