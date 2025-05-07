import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colorsType, NavigationProp } from "../types";
import { useTheme } from "../providers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { abh } from "../constants/responsive";
import HorizontalLayout from "./horizontal_layout";
import { useNavigation } from "@react-navigation/native";
import { LeftChevronIcon } from "../../assets/icons";

type IAppBar = {
    center?: React.JSX.Element,
    bgColor?: colorsType,
    leading?: React.JSX.Element,
    actions?: React.JSX.Element[]
}

const AppBar = ({
    center= <></>,
    bgColor = "transparent",
    leading = undefined,
    actions = [],
}: IAppBar): React.JSX.Element => {

    const { goBack } = useNavigation<NavigationProp>()
    const { colors } = useTheme()
    const { top } = useSafeAreaInsets()

    return (
        <View style={{ ...styles.container, backgroundColor: colors[bgColor], paddingTop: top, shadowColor: colors.black }}>
            <HorizontalLayout justify="center" customStyle={styles.inner}>
                <View style={styles.leading}>
                    {
                        leading ?? (
                            <TouchableOpacity
                                onPress={() => goBack()}
                                activeOpacity={0.75}
                                style={[styles.leadingButton, { backgroundColor: colors.backButtonBg }]}
                            >
                                <LeftChevronIcon color={colors.backIconBg} width={16} height={16} />
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={styles.center}>
                    {center}
                </View>
                <View style={styles.actions}>
                    {
                        actions.map((e, i) => (
                            <View
                                key={i.toString()}
                                style={{ marginRight: i == actions.length - 1 ? 0 : 8 }}
                            >
                                {e}
                            </View>
                        ))
                    }
                </View>
            </HorizontalLayout>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    inner: {
        height: abh,
        paddingHorizontal: 16,
    },
    leading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    leadingButton:{
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 99,
    },
    center: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    actions: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
    },
})

export default AppBar;