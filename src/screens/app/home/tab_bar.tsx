import React, { createContext, useContext, useRef, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import News from "./news";
import Video from "./video";
import Artists from "./artists";
import Podcast from "./podcast";
import { useTheme } from "../../../providers";
import { P, Space } from "../../../components";

const tabBars = ["news", "video", "artists", "Podcast"]

type TabBarContextType = {
    activeIndex: number,
    setActiveIndex: (x: number) => void
}

const HomeTabBarContext = createContext<TabBarContextType>({
    activeIndex: 0,
    setActiveIndex: () => null,
})

const useHomeTabBar = () => useContext(HomeTabBarContext);

const HomeTabBar = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    
    return (
        <HomeTabBarContext.Provider value={{ activeIndex, setActiveIndex }}>
            <HomeTabBarTabs />
            <HomeTabBarView />
        </HomeTabBarContext.Provider>
    )
}

const HomeTabBarTabs = () => {
    const flatListRef = useRef<FlatList | null>(null)

    const { colors } = useTheme()
    const { activeIndex, setActiveIndex } = useHomeTabBar()

    const moveTab = (selectedIndex: number) => {
        if (flatListRef) {
            if (selectedIndex > 1) {
                flatListRef.current?.scrollToIndex({ index: selectedIndex - 2 })
            } else {
                flatListRef.current?.scrollToIndex({ index: 0 })
            }
        }
    }

    return (
        <View style={{ height: 40 }}>
            <FlatList
                ref={flatListRef}
                data={tabBars}
                keyExtractor={e => e}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item: label }) => {
                    const isFocused = index === activeIndex;
                    const onPress = () => {
                        setActiveIndex(index)
                        moveTab(index)
                    }
                    return (
                        <TouchableOpacity
                            key={label}
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityRole="button"
                            onPress={onPress}
                            style={styles.tabItem}
                        >
                            <View>
                                <P color={isFocused ? "text" : "grey"} size={16} transform="capitalize">{label}</P>
                                <Space height={3} />
                                <View style={{
                                    backgroundColor: isFocused ? colors.primary : colors.transparent,
                                    width: 30, height: 3, alignSelf: "center", borderRadius: 4
                                }} />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const HomeTabBarView = () => {
    const { activeIndex } = useHomeTabBar()

    const getCurrentView = () => {
        switch (activeIndex) {
            case 0:
                return <News />
            case 1:
                return <Video />
            case 2:
                return <Artists />
            case 3:
                return <Podcast />
            default:
                return null;
        }
    }

    return (
        <View style={{ height: 250 }}>
            {getCurrentView()}
        </View>
    )
}

const styles = StyleSheet.create({
    tabItem: {
        height: 40,
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
    },
})

export { HomeTabBar, HomeTabBarView };