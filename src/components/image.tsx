import React, { useEffect, useRef, useState } from "react";
import { Image as RnImage, Alert, View } from "react-native";
import { IImage } from "../types";

const defaultImage = "https://waterstation.com.tr/img/default.jpg"

const CImage = ({
    url = defaultImage,
    local,
    width = 0,
    height = 0,
    mode = "stretch",
    radius = 0,
    customStyle,
}: IImage): React.JSX.Element => {

    const imageRef = useRef<View>(null)

    const [percantageWidth, setPercantageView] = useState(0)
    const [autoHeight, setAutoHeight] = useState(0)
    const [autoWidth, setAutoWidth] = useState(0)

    useEffect(() => {
        if (!local) {
            RnImage.getSize(url, (w, h) => {
                if (width === "auto" && height === "auto") {
                    Alert.alert("height and width must not be auto same time")
                }
                else if (width !== "auto" && height === "auto") {
                    if (width === "100%") {
                        const x = percantageWidth * h / w;
                        setAutoHeight(x)
                    } else {
                        const x = width * h / w;
                        setAutoHeight(x)
                    }
                }
                else if (height !== "auto" && width === "auto") {
                    const x = height * w / h;
                    setAutoWidth(x)
                }
            })
        } else if (width === "auto" || height === "auto") {
            Alert.alert("you must give a valid number for height and width at local images.")
        }
    }, [percantageWidth])

    return (
        <View
            ref={imageRef}
            style={[
                { width: width },
                customStyle
            ]}
            onLayout={(e) => {
                if (width === "100%") {
                    var { width: vWidth, } = e.nativeEvent.layout;
                    setPercantageView(vWidth)
                }
            }}
        >
            <RnImage
                source={local ? local : { uri: url }}
                style={[
                    {
                        width: width === "auto" ? autoWidth : width === "100%" ? percantageWidth : width,
                        height: height === "auto" ? autoHeight : height,
                        resizeMode: mode,
                        borderRadius: radius === "full" ? 999 : radius
                    }
                ]}
            />
        </View>
    )
}

export default CImage;