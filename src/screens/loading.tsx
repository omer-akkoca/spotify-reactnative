import React from "react";
import LottieView from 'lottie-react-native';
import { View } from "react-native";
import { useTheme } from "../providers";

const LoadingScreen = () => {

    const { colors } = useTheme()

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg, justifyContent: "center", alignItems: "center" }}>
            <LottieView
                source={require('../../assets/loading-lottie.json')}
                autoPlay
                loop
                style={{ width: 250, height: 250 }}
                
            />
        </View>
    )
}

export default LoadingScreen;