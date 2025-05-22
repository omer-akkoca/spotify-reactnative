import React, { useMemo } from "react";
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../providers";
import { AppBar, CImage, FavoriteButton, HorizontalLayout, P, Space } from "../../../components";
import { HomeTopCard, PlayIcon, SearchIcon, VerticalDotsIcon } from "../../../../assets/icons";
import { spotifyLogo, homeArtist } from "../../../../assets/images";
import { width } from "../../../constants/responsive";
import { HomeTabBar } from "./tab_bar";
import { usePlaylist } from "../../../hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ISong, NavigationProp } from "../../../types";
import { signOut } from "../../../services";

const HomeScreen = () => {

    const { colors, toggleTheme } = useTheme()
    const { bottom } = useSafeAreaInsets()

    const { data } = usePlaylist()

    const homeTopCardHeight = useMemo(() => ((width - 32) * 118) / 334, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar
                bgColor="pageBg"
                center={<CImage local={spotifyLogo} height={35} width={100} mode="contain" />}
                leading={<SearchIcon color={colors.text} width={20} height={20} />}
                actions={[
                    <TouchableOpacity onPress={() => toggleTheme()}>
                        <VerticalDotsIcon color={colors.text} width={20} height={20} />
                    </TouchableOpacity>,
                ]}
            />
            <View style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Space height={16} />
                    <View style={{ position: "relative", paddingHorizontal: 16 }}>
                        <HomeTopCard width={width - 32} height={homeTopCardHeight} />
                        <CImage
                            local={homeArtist}
                            width={width / 2}
                            height={homeTopCardHeight}
                            mode="contain"
                            customStyle={{ position: "absolute", right: 0, bottom: 0 }}
                        />
                    </View>
                    <Space height={16} />
                    <HomeTabBar />
                    <Space height={16} />
                    <View style={{ paddingHorizontal: 16 }}>
                        <HorizontalLayout justify="space-between" customStyle={{ paddingHorizontal: 4 }}>
                            <P size={16} color="text" weight="bold">Playlist</P>
                            <P size={12} color="darkGrey" weight="bold">See More</P>
                        </HorizontalLayout>
                        <Space height={16} />
                        <FlatList
                            data={data}
                            keyExtractor={e => e.id}
                            scrollEnabled={false}
                            ItemSeparatorComponent={() => <Space height={16} />}
                            renderItem={({ item }) => <PlayListItem song={item} />}
                        />
                    </View>
                    <Space height={bottom + 16} />
                </ScrollView>
            </View>
        </View>
    )
}

const PlayListItem = ({ song }: { song: ISong }) => {

    const { navigate } = useNavigation<NavigationProp>()
    const { colors } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigate("song_player", { song: song })}
        >
            <HorizontalLayout>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={{ ...styles.playListPlayButton, backgroundColor: colors.cardPlayBg }}
                    onPress={() => null}
                >
                    <PlayIcon color={colors.cardPlayIcon} width={15} height={15} />
                </TouchableOpacity>
                <Space width={16} />
                <View>
                    <P color="text" size={16} weight="bold">{song.title}</P>
                    <Space height={4} />
                    <P color="text" size={11} weight="400">{song.artist}</P>
                </View>
                <Space width={"100%"} />
                <P color="text" spacing={1}>{song.duration.toFixed(2).toString().replace(".", ":")}</P>
                <Space width={16} />
                <FavoriteButton song={song} />
            </HorizontalLayout>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    playListPlayButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default HomeScreen;