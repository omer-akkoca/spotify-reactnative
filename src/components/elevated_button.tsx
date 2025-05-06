import React from "react";
import { GestureResponderEvent, TouchableOpacity, ViewStyle } from "react-native";
import { useTheme } from "../providers";
import P from "./p";

interface IElevatedButton{
    text: string,
    action: (event: GestureResponderEvent) => void,
    disabled?: boolean,
    style?: ViewStyle,
}

const ElevatedButton = ({
    text,
    action,
    disabled= false,
    style= {}
}: IElevatedButton) => {

    const { colors } = useTheme()

    return(
        <TouchableOpacity
            activeOpacity={0.75}
            disabled={disabled}
            onPress={action}
            style={{ backgroundColor: colors.primary, borderRadius: 30, paddingVertical: 12, ...style, }}
        >
            <P color="white" size={20} weight="bold">{text}</P>
        </TouchableOpacity>
    )
}

export default ElevatedButton;