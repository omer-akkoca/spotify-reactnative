import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { useTheme } from "../providers";
import { AppBar, CImage, ElevatedButton, HorizontalLayout, Input, P, Space } from "../components";
import { spotifyLogo } from "../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpScreen = () => {

    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar
                center={<CImage local={spotifyLogo} width={100} height={35} mode="contain"/>}
            />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 40 }}>
                <P size={25} color="text" font="satoshi-bold" align="center">Register</P>
                <Space height={50}/>
                <Input
                    placeholder="Full Name"
                    setValue={setFullName}
                />
                <Space height={20}/>
                <Input
                    placeholder="Enter Email"
                    setValue={setEmail}
                />
                <Space height={20}/>
                <Input
                    placeholder="Password"
                    setValue={setPassword}
                    secureText
                />
                <Space height={20}/>
                <ElevatedButton
                    action={() => null}
                    title="Create Account"
                />
            </View>
            <HorizontalLayout gap={4} justify="center">
                <P size={14} color="text" align="center">Do you have an account?</P>
                <Pressable onPress={() => null}> 
                    <P color="primary" font="satoshi-bold">Sign In!</P>
                </Pressable>
            </HorizontalLayout>
            <Space height={bottom + 20}/>
        </View>
    )
}

export default SignUpScreen;