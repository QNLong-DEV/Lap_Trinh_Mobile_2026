// src/ex4/FavoritesTab.tsx
import React from "react";
import { FlatList, Text, Pressable, View, StyleSheet } from "react-native";
import { TabProps } from "./types";
import { useFavorites } from "./FavouritesContext";
import { PHONES } from "../data/phone";
import { colors, formatPrice } from "../theme";

export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
    // TODO 8: Lấy danh sách sản phẩm yêu thích từ Context
    const { ids } = useFavorites();
    const favoritePhones = PHONES.filter((p) => ids.includes(p.id));

    if (favoritePhones.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: colors.muted }}>Chưa có sản phẩm nào được lưu.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={favoritePhones}
            keyExtractor={(p) => p.id}
            contentContainerStyle={{ padding: 16, gap: 10 }}
            renderItem={({ item }) => (
                <Pressable
                    style={styles.itemCard}
                    onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
                >
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>{formatPrice(item.price)}</Text>
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    itemCard: { padding: 16, backgroundColor: "#fff", borderRadius: 8, borderWidth: 1, borderColor: colors.line },
    title: { fontSize: 14, fontWeight: "500" },
    price: { color: colors.red, fontWeight: "bold", marginTop: 4 },
});