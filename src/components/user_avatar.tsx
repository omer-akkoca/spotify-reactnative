import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useAuth } from "../providers";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types";

interface IUserAvatar{
    size?: number,
    disabled?: boolean
}

const UserAvatar = ({
    size= 25,
    disabled= true,
}: IUserAvatar) => {
    
    const { navigate } = useNavigation<NavigationProp>()
    const { user } = useAuth()

    return(
        <TouchableOpacity
            activeOpacity={disabled ? 1 : 0.75}
            disabled={disabled}
            onPress={() => navigate("profile")}
        >
            <Image
                source={{ uri: user?.photoURL }}
                style={{ width: size, height: size, borderRadius: 99 }}
                resizeMode="cover"
            />
        </TouchableOpacity>
    )
}

export default UserAvatar;