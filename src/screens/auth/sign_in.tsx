import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { AppBar, CImage, ElevatedButton, HorizontalLayout, Input, P, Space } from "../../components";
import { spotifyLogo } from "../../../assets/images";
import { useTheme } from "../../providers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types";

const SignInScreen = () => {

    const { replace } = useNavigation<NavigationProp>()
    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
        <AppBar
            center={<CImage local={spotifyLogo} width={100} height={35} mode="contain"/>}
        />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 40 }}>
            <P size={25} color="text" font="satoshi-bold" align="center">Sign In</P>
            <Space height={50}/>
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
                title="Sign In"
            />
        </View>
        <HorizontalLayout gap={4} justify="center">
            <P size={14} color="text" align="center">Not a member?</P>
            <Pressable onPress={() => replace("sign_up")}> 
                <P color="primary" font="satoshi-bold">Register Now!</P>
            </Pressable>
        </HorizontalLayout>
        <Space height={bottom + 20}/>
    </View>
    )
}

export default SignInScreen;