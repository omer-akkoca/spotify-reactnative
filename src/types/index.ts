import IP from "./views/p"
import IImage from "./views/image"
import IColors from "./models/color"
import { RootStackParamList, NavigationProp } from "./navigation"
import { IFontFamily } from "./models/font"
import { ISong, IFavoriteSong } from "./models/song"
import { IUser } from "./models/user"

type alignType = "auto" | "left" | "justify" | "right" | "center"
type transformType = "capitalize" | "lowercase" | "none" | "uppercase"
type fontWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal"

type colorsType = keyof IColors
type fontFamilyType = keyof IFontFamily
type stackTypes = keyof RootStackParamList

export * from "./request/auth"
export type {
    IP, IImage,
    alignType, transformType, fontWeight, colorsType, fontFamilyType,
    RootStackParamList, stackTypes, NavigationProp,
    IColors, IFontFamily, ISong, IFavoriteSong, IUser,
}