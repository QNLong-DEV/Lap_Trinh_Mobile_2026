// src/ex4/ProductsTab.tsx
import React from "react";
import { FlatList, Text, Pressable, StyleSheet } from "react-native";
import { TabProps } from "./types";
import { PHONES } from "../data/phone";
import { colors, formatPrice } from "../theme";

export function ProductsTab({ navigation }: TabProps<"Products">) {
    // TODO 3: Render danh sách sản phẩm
    return (
        <FlatList
            data={PHONES}
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