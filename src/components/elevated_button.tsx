import React from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { useTheme } from "../providers";
import P from "./p";
import { colorsType } from "../types";

interface IElevatedButton {
    title: string,
    titleColor?: colorsType,
    action: (event: GestureResponderEvent) => void,
    disabled?: boolean,
    height?: number,
    bgColor?: colorsType,
    elevation?: boolean,
    style?: ViewStyle,
}

const ElevatedButton = ({
    title,
    titleColor= "white",
    action,
    disabled = false,
    height= 80,
    bgColor= "primary",
    elevation= true,
    style = {}
}: IElevatedButton) => {

    const { colors } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            disabled={disabled}
            onPress={action}
            style={[
                styles.container,
                { backgroundColor: colors[bgColor], height: height },
                elevation ? { ...styles.shadow, shadowColor: colors.black, } : {},
                style
            ]}
        >
            <P color={titleColor} size={16} weight="bold" align="center">{title}</P>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    shadow: {
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7
    }
})

export default ElevatedButton;