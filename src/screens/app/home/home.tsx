import React, { useMemo } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../providers";
import { AppBar, CImage, Space } from "../../../components";
import { HomeTopCard, SearchIcon, VerticalDotsIcon } from "../../../../assets/icons";
import { spotifyLogo, homeArtist } from "../../../../assets/images";
import { width } from "../../../constants/responsive";
import { HomeTabBar } from "./tab_bar";

const HomeScreen = () => {

    const { colors, toggleTheme } = useTheme()

    const homeTopCardHeight = useMemo(() => ((width - 32) * 118) / 334, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar
                bgColor="pageBg"
                center={<CImage local={spotifyLogo} height={35} width={100} mode="contain" />}
                leading={<SearchIcon color={colors.text} width={25} height={25} />}
                actions={[
                    <TouchableOpacity onPress={() => toggleTheme()}>
                        <VerticalDotsIcon color={colors.text} width={25} height={25} />
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
                    <HomeTabBar/>
                    <Space height={16} />
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeScreen;