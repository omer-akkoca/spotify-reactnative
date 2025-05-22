import React from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import { useAuth, useTheme } from "../../../providers";
import { AppBar, HorizontalLayout, P, Space, UserAvatar } from "../../../components";
import { LogOutIcon } from "../../../../assets/icons";
import { useFavoriteSongsWithDetails } from "../../../hooks";
import FavoriteSongItem from "./favoriteSongItem";
import { signOut } from "../../../services";

const ProfileScreen = () => {

    const { colors, toggleTheme } = useTheme()
    const { user } = useAuth()

    const { data, loading } = useFavoriteSongsWithDetails()

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <View style={{ flex: 2, backgroundColor: colors.profileTopSectionBg, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
                <AppBar
                    center={<P color="text" size={16} weight="600">Profile</P>}
                    actions={[
                        <TouchableOpacity onPress={() => signOut()}>
                            <LogOutIcon color={colors.text} width={25} height={25} />
                        </TouchableOpacity>
                    ]}
                />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <UserAvatar size={75} />
                    <Space height={15} />
                    <P color="grey">{user?.email}</P>
                    <Space height={10} />
                    <P color="text" size={22} weight="bold">{user?.name}</P>
                    <Space height={15} />
                    <HorizontalLayout gap={36}>
                        <View>
                            <P color="text" size={22} weight="bold" align="center">778</P>
                            <P color="grey" size={14} align="center">Followers</P>
                        </View>
                        <View>
                            <P color="text" size={22} weight="bold" align="center">243</P>
                            <P color="grey" size={14} align="center">Follows</P>
                        </View>
                    </HorizontalLayout>
                </View>
            </View>
            <View style={{ flex: 3 }}>
                {
                    loading
                        ? (
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <ActivityIndicator size={"large"} color={colors.primary} />
                            </View>
                        )
                        : (
                            <>
                                <View style={{ padding: 16 }}>
                                    <P size={20} color="text" weight="500">MyFavorite Songs</P>
                                </View>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) => <FavoriteSongItem song={item} />}
                                    ItemSeparatorComponent={() => <Space height={16} />}
                                />
                            </>
                        )
                }
            </View>
        </View>
    )
}

export default ProfileScreen;