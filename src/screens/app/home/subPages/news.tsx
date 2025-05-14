import React from "react";
import { P, Space } from "../../../../components";
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../../providers";
import { useNewsSongs } from "../../../../hooks";
import { PlayIcon } from "../../../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../../types";

const News = () => {

    const { navigate } = useNavigation<NavigationProp>()
    const { colors } = useTheme()
    const { data, loading } = useNewsSongs()

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={"large"} color={colors.primary} />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, paddingTop: 16 }}>
            <FlatList
                data={data}
                horizontal
                keyExtractor={e => e.id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <Space width={16} />}
                ListHeaderComponent={() => <Space width={16} />}
                ListFooterComponent={() => <Space width={16} />}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={() => navigate("song_player", { song: item })}
                        >
                            <View style={{ flex: 1, width: 160 }}>
                                <View style={{ flex: 1, position: "relative" }}>
                                    <Image
                                        source={{ uri: item.cover }}
                                        style={{ flex: 1, borderRadius: 30 }}
                                    />
                                    <TouchableOpacity
                                        activeOpacity={0.75}
                                        style={{ ...styles.playButton, backgroundColor: colors.cardPlayBg }}
                                        onPress={() => null}
                                    >
                                        <PlayIcon color={colors.cardPlayIcon} width={15} height={15}/>
                                    </TouchableOpacity>
                                </View>   
                                <Space height={8} />
                                <P color="text" font="satoshi-bold" size={16} lines={1}>{item.title}</P>
                                <Space height={4} />
                                <P color="text" font="satoshi-regular" size={12} lines={1}>{item.artist}</P>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    playButton: {
        position: "absolute",
        width: 30,
        height: 30,
        right: 15,
        bottom: -15,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default News;