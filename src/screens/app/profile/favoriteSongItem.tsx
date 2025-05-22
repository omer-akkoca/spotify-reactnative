import React from "react";
import { CImage, HorizontalLayout, P, Space } from "../../../components";
import { ISong, NavigationProp } from "../../../types";
import { TouchableOpacity, View } from "react-native";
import { HorizontalDotsIcon } from "../../../../assets/icons";
import { useTheme } from "../../../providers";
import { formatDuration } from "../../../utils/song";
import { useNavigation } from "@react-navigation/native";

const FavoriteSongItem = ({ song } : { song: ISong }) => {

    const { navigate } = useNavigation<NavigationProp>()
    const { colors } = useTheme()

    return(
        <View style={{ paddingHorizontal: 16 }}>
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => navigate("song_player", { song })}
            >
                <HorizontalLayout>
                    <CImage
                        url={song?.cover}
                        height={75}
                        width={75}
                        radius={20}
                    />
                    <Space width={16}/>
                    <View>
                        <P color="text" size={18} weight="bold">{song?.title}</P>
                        <Space height={8}/>
                        <P color="text" size={12} weight="400">{song?.title}</P>
                    </View>
                    <Space width={"100%"}/>
                    <P color="grey">{formatDuration(song?.duration!)}</P>
                    <Space width={32}/>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => null}
                    >
                        <HorizontalDotsIcon color={colors.text} width={25} height={25}/>
                    </TouchableOpacity>
                </HorizontalLayout>
            </TouchableOpacity>
        </View>
    )
}

export default FavoriteSongItem;