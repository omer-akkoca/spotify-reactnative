import React from "react";
import { View } from "react-native";
import { useTheme } from "../../providers";
import { ElevatedButton } from "../../components";
import { signOut } from "../../services";

const HomeScreen = () => {
 
    const { colors } = useTheme()

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
                <ElevatedButton
                    action={() => signOut()}
                    title="Sign Out"
                />
            </View>
        </View>
    )
}

export default HomeScreen;