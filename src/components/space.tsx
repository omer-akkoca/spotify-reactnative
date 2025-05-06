import React from "react";
import { View } from "react-native";

type spaceType = {
    height?: number,
    width?: number,
}

const Space = ({
    height= 0,
    width= 0,
}: spaceType) => {
    return(
        <View style={{ height, width }}/>
    )
}

export default Space;