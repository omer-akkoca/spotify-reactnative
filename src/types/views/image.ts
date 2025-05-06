import { ImageResizeMode, ImageSourcePropType, ImageStyle } from "react-native";

interface IImage {
    url?: string,
    local?: ImageSourcePropType,
    width: number | "auto" | "100%",
    height: number | "auto",
    mode?: ImageResizeMode,
    radius?: number | "full",
    customStyle?: ImageStyle,
}

export default IImage;