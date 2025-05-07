import React, { useEffect } from "react";
import { View } from "react-native";
import { CImage } from "../components";
import { spotifyLogo } from "../../assets/images";
import { width } from "../constants/responsive";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types";

const SplashScreen = () => {

    const navigation = useNavigation<NavigationProp>()

    useEffect(() => {
        const navigate = setTimeout(() => {
            navigation.navigate("get_started")
        }, 2000);
        () => clearInterval(navigate);
    }, [])

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