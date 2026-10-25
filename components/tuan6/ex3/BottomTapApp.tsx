import React, { useState } from "react";
// 1. Bổ sung các component từ react-native
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// 2. Import PHONES và theme
import { PHONES } from "../data/phone";
import { colors } from "../theme";

type TabParamList = { Home: undefined; Search: undefined; Profile: undefined };
const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<
    keyof TabParamList,
    [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]
> = {
    Home: ["home", "home-outline"],
    Search: ["search", "search-outline"],
    Profile: ["person", "person-outline"],
};

function HomeTab() {
    return (
        <FlatList
            data={PHONES}
            keyExtractor={(p) => p.id}
            contentContainerStyle={{ padding: 16, gap: 10 }}
            renderItem={({ item }) => (
                <View style={s.card}>
                    <Text style={s.cardTitle}>{item.name.split(" - ")[0]}</Text>
                </View>
            )}
        />
    );
}

// TODO 1: SearchTab
function SearchTab() {
    const [keyword, setKeyword] = useState("");
    const filtered = PHONES.filter((p) =>
        p.name.toLowerCase().includes(keyword.trim().toLowerCase())
    );

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                value={keyword}
                onChangeText={setKeyword}
                placeholder="Nhập từ khóa..."
                style={s.input}
            />
            {filtered.length > 0 ? (
                <FlatList
                    data={filtered}
                    keyExtractor={(p) => p.id}
                    contentContainerStyle={{ gap: 10, marginTop: 12 }}
                    renderItem={({ item }) => (
                        <View style={s.card}>
                            <Text style={s.cardTitle}>{item.name}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={s.emptyText}>Không có kết quả cho “{keyword}”</Text>
            )}
        </View>
    );
}

// TODO 2: ProfileTab
function ProfileTab() {
    return (
        <View style={s.center}>
            <View style={s.avatar}>
                <Text style={s.avatarText}>N</Text>
            </View>
            <Text style={s.profileName}>Quách Ngọc Long</Text>
            <Text style={s.profileEmail}>long.quach@example.com</Text>
        </View>
    );
}

// TODO 3: Main App Component
export function BottomTabApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: colors.red,
                    tabBarInactiveTintColor: colors.muted,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={ICONS[route.name][focused ? 0 : 1]}
                            size={size}
                            color={color}
                        />
                    ),
                })}
            >
                <Tab.Screen name="Home" component={HomeTab} options={{ title: "Trang chủ" }} />
                <Tab.Screen name="Search" component={SearchTab} options={{ title: "Tìm kiếm" }} />
                <Tab.Screen name="Profile" component={ProfileTab} options={{ title: "Cá nhân" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// 3. Khai báo đối tượng stylesheet 's'
const s = StyleSheet.create({
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    card: { padding: 16, backgroundColor: "#fff", borderRadius: 8, borderWidth: 1, borderColor: colors.line },
    cardTitle: { fontSize: 14, fontWeight: "500" },
    input: { height: 44, borderWidth: 1, borderColor: colors.line, borderRadius: 8, paddingHorizontal: 12, backgroundColor: "#fff" },
    emptyText: { marginTop: 20, textAlign: "center", color: colors.muted },
    avatar: { width: 96, height: 96, borderRadius: 48, backgroundColor: colors.blue, justifyContent: "center", alignItems: "center", marginBottom: 12 },
    avatarText: { fontSize: 36, color: "#fff", fontWeight: "bold" },
    profileName: { fontSize: 18, fontWeight: "bold", color: colors.text },
    profileEmail: { fontSize: 14, color: colors.muted, marginTop: 4 },
});