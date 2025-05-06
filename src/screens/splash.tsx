import React from "react";
import { View } from "react-native";
import { CImage } from "../components";
import { spotifyLogo } from "../../assets/images";
import { width } from "../constants/responsive";

const SplashScreen = () => {
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <CImage
                local={spotifyLogo}
                width={width*(3/5)}
                height={width*(3/5)}
                mode="contain"
            />
        </View>
    )
}

export default SplashScreen;