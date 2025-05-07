import React from "react";
import { View } from "react-native";

type spaceType = {
    height?: number | "100%",
    width?: number | "100%",
}

const Space = ({
    height= 0,
    width= 0,
}: spaceType) => {
    return(
        <View style={[
            { height: height === "100%" ? 0 : height },
            { width: width === "100%" ? 0 : width },
            height === "100%" || width === "100%" ? { flex: 1 } : {}
        ]}/>
    )
}

export default Space;