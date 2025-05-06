import { PropsWithChildren } from "react";
import { alignType, colorsType, fontFamilyType, fontWeight, transformType } from "..";
import { GestureResponderEvent, TextStyle } from "react-native";

interface IP extends PropsWithChildren {
    color?: colorsType,
    size?: number,
    weight?: fontWeight,
    lines?: number,
    align?: alignType,
    font?: fontFamilyType,
    lineHeight?: number,
    onPress?: (e: GestureResponderEvent) => void,
    transform?: transformType,
    spacing?: number,
    customStyle?: TextStyle,
}

export default IP;