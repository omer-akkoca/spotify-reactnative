import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { fonts } from "../constants/fonts";
import { useTheme } from "../providers";

interface IInput{
    placeholder: string,
    secureText?: boolean,
    value?: string,
    setValue: (value: string) => void,
}

const Input = ({
    placeholder= "placeholder",
    secureText= false,
    setValue,
    value
}: IInput) => {

    const { colors } = useTheme()

    return(
        <TextInput
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.inputText}
            secureTextEntry={secureText}
            onChangeText={(text) => setValue(text)}
            style={[
                styles.input, styles.text,
                { color: colors.inputText, borderColor: colors.inputBorder, backgroundColor: colors.transparent }
            ]}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts["satoshi-medium"]
    },
    input: {
        width: "100%",
        padding: 30,
        borderRadius: 30,
        borderWidth: 0.5,
    }
})

export default Input;