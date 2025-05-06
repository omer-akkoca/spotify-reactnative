import IP from "./views/p"
import IImage from "./views/image"
import IColors from "./models/color"
import { RootStackParamList, NavigationProp } from "./navigation"

type alignType = "auto" | "left" | "justify" | "right" | "center"
type transformType = "capitalize" | "lowercase" | "none" | "uppercase"
type fontWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal"

type colorsType = keyof IColors
type stackTypes = keyof RootStackParamList

export type { IP, IColors, IImage, alignType, transformType, fontWeight, colorsType, RootStackParamList, stackTypes, NavigationProp }