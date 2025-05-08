import React from "react";
import { ImageBackground, View } from "react-native";
import { getStartedBg, spotifyLogo } from "../../../assets/images";
import { CImage, ElevatedButton, P, Space } from "../../components";
import { width } from "../../constants/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types";
import { useTheme } from "../../providers";

const GetStartedScreen = () => {

    const { navigate } = useNavigation<NavigationProp>()
    const { bottom } = useSafeAreaInsets()
    const { colors } = useTheme()

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <ImageBackground
                source={getStartedBg}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.25)", alignItems: "center", paddingHorizontal: 40 }}>
                    <CImage
                        local={spotifyLogo}
                        width={width * (3 / 5)}
                        height={width * (3 / 5)}
                        mode="contain"
                    />
                    <Space height={"100%"} />
                    <P size={25} font="satoshi-bold" color="white" align="center">Enjoy Listening To Music</P>
                    <Space height={21} />
                    <P size={13} font="satoshi-medium" color="grey" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </P>
                    <Space height={21} />
                    <ElevatedButton
                        action={() => navigate("choose_mode")}
                        title="Get Started"
                    />
                    <Space height={bottom + 32} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default GetStartedScreen;