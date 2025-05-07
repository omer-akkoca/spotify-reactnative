import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { getAsyncData, setAsyncData } from "../../utils/storage";
import { darkTheme, lightTheme } from "../../constants/colors";
import { IColors } from "../../types";

type themeTypes = "light" | "dark"

type ThemeProviderProps = PropsWithChildren<{}>

type ThemeContextType = {
    theme: themeTypes,
    setTheme: (x: themeTypes) => void,
    colors: IColors,
    toggleTheme: () => void
  };

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: Function,
    colors: lightTheme,
    toggleTheme: Function
})

const ThemeProvider = ({ children }: ThemeProviderProps): React.JSX.Element => {

    const [theme, setTheme] = useState<themeTypes>("light")

    const colors = useMemo(() => theme === "light" ? lightTheme : darkTheme, [theme])

    const toggleTheme = () => {
        setTheme(curr => curr === "light" ? "dark" : "light")
    }

    useEffect(() => {
        const boot = async () => {
            const storedTheme = await getAsyncData<themeTypes>({ key: "theme" })
            storedTheme ? setTheme(storedTheme) : setTheme("light")
        }
        boot();
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            setAsyncData<themeTypes>({ key: "theme", data: "dark"})
        } else {
            setAsyncData<themeTypes>({ key: "theme", data: "light" })
        }
    }, [theme])

    return(
        <ThemeContext.Provider value={{ theme, setTheme, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };