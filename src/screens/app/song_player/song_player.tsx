import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../providers";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { AppBar, HorizontalLayout, P, Space } from "../../../components";
import { BorderedHeartIcon, VerticalDotsIcon } from "../../../../assets/icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SongPlayerActions from "./actions";

const SongPlayerScreen = () => {

    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()

    const { params: { song } } = useRoute<RouteProp<RootStackParamList, "song_player">>()

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar
                center={<P color="text" size={16} weight="500">Now Playing</P>}
                actions={[
                    <TouchableOpacity onPress={() => null}>
                        <VerticalDotsIcon color={colors.text} width={20} height={20} />
                    </TouchableOpacity>,
                ]}
            />
            <View style={{ flex: 1.5, padding: 16 }}>
                <Image
                    source={{ uri: song.cover }}
                    style={{ flex: 1, borderRadius: 30, resizeMode: "cover" }}
                />
            </View>
            <View style={{ flex: 1, padding: 16, paddingBottom: bottom + 16 }}>
                <HorizontalLayout justify="space-between">
                    <View>
                        <P color="text" size={22} weight="bold">{song.title}</P>
                        <Space height={8} />
                        <P color="text" size={14} weight="400">{song.artist}</P>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => null}
                    >
                        <BorderedHeartIcon color={colors.cardPlayIcon} width={25} height={25} />
                    </TouchableOpacity>
                </HorizontalLayout>
                <Space height={32} />
                <SongPlayerActions song={song}/>
            </View>
        </View>
    )
}



export default SongPlayerScreen;