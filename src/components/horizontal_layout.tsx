import { PropsWithChildren } from "react"
import React, { FlexAlignType, View, ViewStyle } from "react-native"

interface IHorizontalLayout extends PropsWithChildren{
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",
    align?: FlexAlignType,
    gap?: number,
    customStyle?: ViewStyle | ViewStyle[]
}

const HorizontalLayout = ({
    justify= "flex-start",
    align= "center",
    gap= 0,
    customStyle = {},
    children= <></>
}: IHorizontalLayout)=> {
    return(
        <View
            style={[
                { flexDirection: "row", alignItems: align, justifyContent: justify, gap: gap},
                customStyle
            ]}
        >
            {children}
        </View>
    )
}

export default HorizontalLayout;