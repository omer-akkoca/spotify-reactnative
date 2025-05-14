import React, { useEffect, useState } from "react";
import { HorizontalLayout, P, Space } from "../../../components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useTheme } from "../../../providers";
import { ISong } from "../../../types";
import { width } from "../../../constants/responsive";
import { LoopIcon, NextMusicIcon, PauseIcon, PlayIcon, PreviousMusicIcon, ShuffleIcon } from "../../../../assets/icons";

const SongPlayerActions = ({ song }: { song: ISong }) => {

    const { colors } = useTheme()

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {

    }, [song])

    const formatDuration = (duration: number) => {
        const splited = duration.toFixed(2).toString().split(".");
        const minutes = splited[0].padStart(2, "0")
        const seconds = splited[1].padStart(2, "0")
        return `${minutes}:${seconds}`;
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>
                <Slider
                    minimumValue={0}
                    maximumValue={song.duration}
                    minimumTrackTintColor={colors.text}
                    maximumTrackTintColor={colors.darkGrey}
                    thumbTintColor={colors.text}
                    style={{ width: width, paddingHorizontal: 6 }}
                />
                <Space height={8} />
                <HorizontalLayout justify="space-between" customStyle={{ paddingHorizontal: 16 }}>
                    <P color="text">{formatDuration(0.0)}</P>
                    <P color="darkGrey">{formatDuration(song.duration)}</P>
                </HorizontalLayout>
            </View>
            <Space height={16} />
            <HorizontalLayout gap={32}>
                <TouchableOpacity activeOpacity={0.75} onPress={() => null} >
                    <LoopIcon color={colors.grey} width={25} height={25} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.75} onPress={() => null} >
                    <PreviousMusicIcon color={colors.grey} width={25} height={25} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={{ ...styles.pauseAndPlayButton, backgroundColor: colors.primary }}
                    onPress={() => setIsPlaying(e => !e)}
                >
                    {
                        isPlaying
                            ? <PauseIcon color={colors.white} width={25} height={25} />
                            : <PlayIcon color={colors.white} width={25} height={25} />
                    }
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.75} onPress={() => null} >
                    <NextMusicIcon color={colors.grey} width={25} height={25} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.75} onPress={() => null} >
                    <ShuffleIcon color={colors.grey} width={25} height={25} />
                </TouchableOpacity>
            </HorizontalLayout>
        </View>
    )
}

const styles = StyleSheet.create({
    pauseAndPlayButton: {
        width: 75,
        height: 75,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default SongPlayerActions;