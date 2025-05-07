import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../providers";
import { BottomPatternIcon, TopPatternIcon } from "../../assets/icons";
import { AppBar, CImage, ElevatedButton, HorizontalLayout, P, Space } from "../components";
import { authBg, spotifyLogo } from "../../assets/images";

const SignUpOrSignInScreen = () => {

    const { colors } = useTheme()

    return (
        <View style={{ flex: 1, position: "relative", backgroundColor: colors.pageBg }}>
            <View style={styles.appBar}>
                <AppBar />
            </View>
            <View style={styles.container}>
                <CImage
                    local={spotifyLogo}
                    width={300}
                    height={100}
                    mode="contain"
                />
                <Space height={55} />
                <P size={26} color="text" font="satoshi-bold" align="center">Enjoy Listening To Music</P>
                <Space height={11} />
                <P size={17} color="grey" align="center">
                    Spotify is a proprietary Swedish audio streaming and media services provider
                </P>
                <Space height={30} />
                <HorizontalLayout gap={20}>
                    <ElevatedButton
                        action={() => null}
                        title="Register"
                        style={{ flex: 1 }}
                    />
                    <ElevatedButton
                        action={() => null}
                        title="Sign In"
                        titleColor="text"
                        bgColor="transparent"
                        elevation={false}
                        style={{ flex: 1 }}
                    />
                </HorizontalLayout>
            </View>
            <View style={styles.topPattern}>
                <TopPatternIcon />
            </View>
            <View style={styles.bottomPattern}>
                <BottomPatternIcon />
            </View>
            <View style={styles.authBg}>
                <CImage
                    local={authBg}
                    width={350}
                    height={350}
                    mode="cover"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
        zIndex: 2
    },
    appBar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3,
    },
    topPattern: {
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
    },
    bottomPattern: {
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 1,
    },
    authBg: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 1,
    },
})

export default SignUpOrSignInScreen;