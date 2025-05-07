import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { chooseModeBg, spotifyLogo } from "../../assets/images";
import { CImage, ElevatedButton, HorizontalLayout, P, Space } from "../components";
import { width } from "../constants/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MoonIcon, SunIcon } from "../../assets/icons";
import { useTheme } from "../providers";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types";

const ChooseModeScreen = () => {

    const { navigate } = useNavigation<NavigationProp>()
    const { colors, setTheme } = useTheme()
    const { bottom } = useSafeAreaInsets()

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <ImageBackground
                source={chooseModeBg}
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
                    <P size={25} font="satoshi-bold" color="white" align="center">Choose Mode</P>
                    <Space height={21} />
                    <HorizontalLayout gap={50}>
                        <View style={styles.themeContainer}>
                            <TouchableOpacity
                                activeOpacity={0.75}
                                style={styles.iconWrapper}
                                onPress={() => setTheme("dark")}
                            >
                                <MoonIcon color={colors.white} width={30} height={30}/>
                            </TouchableOpacity>
                            <P size={17} color="grey">Dark Mode</P>
                        </View>
                        <View style={styles.themeContainer}>
                            <TouchableOpacity
                                activeOpacity={0.75}
                                style={styles.iconWrapper}
                                onPress={() => setTheme("light")}
                            >
                                <SunIcon color={colors.white} width={30} height={30}/>
                            </TouchableOpacity>
                            <P size={17} color="grey">Light Mode</P>
                        </View>
                    </HorizontalLayout>
                    <Space height={50} />
                    <ElevatedButton
                        action={() => navigate("sign_up_or_sign_in")}
                        title="Continue"
                    />
                    <Space height={bottom + 32} />

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    themeContainer: {
        gap: 15,
        alignItems: "center",
    },
    iconWrapper: {
        backgroundColor: "#30393c",
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 75
    }
})

export default ChooseModeScreen;