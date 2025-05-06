import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colorsType, NavigationProp } from "../types";
import { useTheme } from "../providers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { abh } from "../constants/responsive";
import HorizontalLayout from "./horizontal_layout";
import P from "./p";
import { useNavigation } from "@react-navigation/native";

type IAppBar = {
    title: string,
    titleColor?: colorsType,
    backIconColor?: colorsType,
    bgColor?: colorsType,
    leading?: React.JSX.Element,
    actions?: React.JSX.Element[]
}

const AppBar = ({
    title = "A Title",
    titleColor= "white",
    backIconColor= "white",
    bgColor = "white",
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
                            >
                                {/*<BackArrowIcon color={backIconColor} width={16} height={16} />*/}
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={styles.center}>
                    <P color={titleColor} size={18} align="center" weight="bold">{title}</P>
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