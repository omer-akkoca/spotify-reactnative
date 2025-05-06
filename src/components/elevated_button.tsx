import React from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { useTheme } from "../providers";
import P from "./p";

interface IElevatedButton {
    text: string,
    action: (event: GestureResponderEvent) => void,
    disabled?: boolean,
    style?: ViewStyle,
}

const ElevatedButton = ({
    text,
    action,
    disabled = false,
    style = {}
}: IElevatedButton) => {

    const { colors } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            disabled={disabled}
            onPress={action}
            style={[styles.container, { backgroundColor: colors.primary, shadowColor: colors.black, ...style, }, style]}
        >
            <P color="white" size={20} weight="bold" align="center">{text}</P>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 30,
        paddingVertical: 16,
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