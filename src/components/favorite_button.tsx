import React from "react";
import { TouchableOpacity } from "react-native";
import { BorderedHeartIcon, HeartIcon } from "../../assets/icons";
import { useTheme } from "../providers";
import { useAddOrRemoveFavoriteSong } from "../hooks";
import { ISong } from "../types";
import { useAppSelector } from "../types/store";
import { isFavoriteSong } from "../store/slices/favorite_songs";

interface IFavoriteButton {
    song: ISong,
    size?: number,
}

const FavoriteButton = ({
    song,
    size = 20,
}: IFavoriteButton) => {

    const { colors } = useTheme()
    const { mutate } = useAddOrRemoveFavoriteSong({ songId: song.id })

    const isFavorite = useAppSelector(state => isFavoriteSong(state, song.id))

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => mutate()}
        >
            {
                isFavorite
                    ? <HeartIcon color={colors.darkGrey} width={size} height={size} />
                    : <BorderedHeartIcon color={colors.darkGrey} width={size} height={size} />
            }
        </TouchableOpacity>
    )
}

export default FavoriteButton;