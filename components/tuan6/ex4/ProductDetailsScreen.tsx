// src/ex4/ProductDetailsScreen.tsx
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { RootProps } from "./types";
import { PHONES, PHONE_COLORS } from "../data/phone";
import { useFavorites } from "./FavouritesContext";
import { Stars } from "../components/Stars";
import { colors, formatPrice } from "../theme";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
    // TODO 4: Lấy ID từ params
    const { id } = route.params;
    const { has, toggle } = useFavorites();

    const phone = PHONES.find((p) => p.id === id);

    // TODO 5: Xử lý không tìm thấy sản phẩm
    if (!phone) {
        return (
            <View style={styles.center}>
                <Text style={{ color: colors.red }}>Không tìm thấy sản phẩm #{id}</Text>
            </View>
        );
    }

    const isFav = has(phone.id);

    return (
        <View style={styles.container}>
            {/* TODO 6: Hiển thị thông tin chi tiết */}
            <Image
                source={PHONE_COLORS[phone.defaultColor].image}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.name}>{phone.name}</Text>
            <View style={styles.row}>
                <Stars value={phone.rating} />
                <Text style={{ color: colors.muted }}>(Xem {phone.reviewCount} đánh giá)</Text>
            </View>
            <Text style={styles.price}>{formatPrice(phone.price)}</Text>
            <Text style={styles.supplier}>Cung cấp bởi: {phone.supplier}</Text>

            {/* TODO 7: Nút toggle yêu thích */}
            <Pressable
                style={[styles.favBtn, isFav && styles.favBtnActive]}
                onPress={() => toggle(phone.id)}
            >
                <Text style={[styles.favText, isFav && styles.favTextActive]}>
                    {isFav ? "♥ Đã lưu vào yêu thích" : "♡ Lưu vào yêu thích"}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff", gap: 10 },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    image: { width: "100%", height: 200, marginVertical: 10 },
    name: { fontSize: 16, fontWeight: "bold" },
    row: { flexDirection: "row", gap: 8, alignItems: "center" },
    price: { fontSize: 18, fontWeight: "bold", color: colors.red },
    supplier: { fontSize: 14, color: colors.muted },
    favBtn: { marginTop: 15, padding: 12, borderRadius: 6, borderWidth: 1, borderColor: colors.red, alignItems: "center" },
    favBtnActive: { backgroundColor: colors.red },
    favText: { color: colors.red, fontWeight: "bold" },
    favTextActive: { color: "#fff" },
});