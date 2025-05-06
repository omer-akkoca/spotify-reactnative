import React from "react";
import { Text } from "react-native";
import { useTheme } from "../providers";
import { IP } from "../types";

const P = ({
    color = "white",
    size = 14,
    align = "left",
    weight = "normal",
    transform = "none",
    lineHeight,
    spacing = 0,
    lines,
    customStyle,
    children,
    onPress
}: IP): React.JSX.Element => {

    const { colors } = useTheme()

    return (
        <Text
            style={[
                {
                    color: colors[color],
                    fontSize: size,
                    fontWeight: weight,
                    textAlign: align,
                    textTransform: transform,
                    letterSpacing: spacing
                },
                lineHeight ? { lineHeight } : {},
                customStyle
            ]}
            numberOfLines={lines}
            onPress={onPress}
        >
            {children}
        </Text>
    )
}

export default P;