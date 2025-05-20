import React, { useEffect } from "react";
import { HorizontalLayout, P, Space } from "../../../components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useTheme } from "../../../providers";
import { ISong } from "../../../types";
import { width } from "../../../constants/responsive";
import { LoopIcon, NextMusicIcon, PauseIcon, PlayIcon, PreviousMusicIcon, ShuffleIcon } from "../../../../assets/icons";
import TrackPlayer, { State, useProgress, useIsPlaying, Event } from 'react-native-track-player';
import { formatDuration, secondsToMinutes } from "../../../utils/song";

const SongPlayerActions = ({ song }: { song: ISong }) => {

    const { colors } = useTheme()
    const progress = useProgress()
    const { playing } = useIsPlaying()

    useEffect(() => {
        setupAddSong();
        return () => {
            TrackPlayer.reset();
        }
    }, [song])

    const setupAddSong = async () => {
        TrackPlayer.add({
            url: song.song,
            title: song.title,
            artist: song.artist,
            duration: song.duration * 60,
            artwork: song.cover,
        })
        TrackPlayer.play()
    }

    const playOrPause = async () => {
        const { state } = await TrackPlayer.getPlaybackState();
        if (state === State.Playing) {
            TrackPlayer.pause();
        } else {
            TrackPlayer.play();
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>
                <Slider
                    value={progress.position}
                    minimumValue={0}
                    maximumValue={progress.duration}
                    minimumTrackTintColor={colors.text}
                    maximumTrackTintColor={colors.darkGrey}
                    thumbTintColor={colors.text}
                    style={{ width: width, paddingHorizontal: 6 }}
                />
                <Space height={8} />
                <HorizontalLayout justify="space-between" customStyle={{ paddingHorizontal: 16 }}>
                    <P color="text">{formatDuration(secondsToMinutes(progress.position))}</P>
                    <P color="darkGrey">{formatDuration(secondsToMinutes(progress.duration))}</P>
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
                    onPress={playOrPause}
                >
                    {
                        playing
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