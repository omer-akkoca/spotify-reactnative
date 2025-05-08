import React, { useEffect } from "react";
import { View } from "react-native";
import { CImage } from "../../components";
import { spotifyLogo } from "../../../assets/images";
import { width } from "../../constants/responsive";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types";
import { useTheme } from "../../providers";

const SplashScreen = () => {

    const navigation = useNavigation<NavigationProp>()
    const { colors } = useTheme()

    useEffect(() => {
        const navigate = setTimeout(() => {
            navigation.navigate("get_started")
        }, 2000);
        () => clearInterval(navigate);
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.pageBg }}>
            <CImage
                local={spotifyLogo}
                width={width * (3 / 5)}
                height={width * (3 / 5)}
                mode="contain"
            />
        </View>
    )
}

export default SplashScreen;