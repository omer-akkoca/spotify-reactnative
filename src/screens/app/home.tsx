import React from "react";
import { View } from "react-native";
import { useTheme } from "../../providers";

const HomeScreen = () => {

    const { colors } = useTheme()

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>

        </View>
    )
}

export default HomeScreen;