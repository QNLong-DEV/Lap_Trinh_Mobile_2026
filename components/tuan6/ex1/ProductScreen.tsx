// src/ex1/ProductScreen.tsx
import React from "react";
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SelectPhoneParamList } from "../ex1/SelectPhoneApp";
import { Phone } from "../types";
import { PHONE_COLORS } from "../data/phone";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & { phone: Phone };

export function ProductScreen({ navigation, route, phone }: Props) {
    const picked = route.params?.color;
    const shown = picked ?? phone.defaultColor;

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.content}>
                <View style={styles.imageWrap}>
                    <Image source={PHONE_COLORS[shown].image} style={styles.image} resizeMode="contain" />
                </View>

                <View style={styles.info}>
                    <Text style={styles.name}>{phone.name}</Text>
                    <View style={styles.row}>
                        <Stars value={phone.rating} />
                        <Text style={styles.review}>(Xem {phone.reviewCount} đánh giá)</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.price}>{formatPrice(phone.price)}</Text>
                        <Text style={styles.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.badge}>{phone.badge}</Text>
                    </View>

                    {/* TODO 1: Nút chọn màu */}
                    <Pressable
                        style={styles.chooseBtn}
                        onPress={() => navigation.navigate("ChooseColor", { color: picked })}
                    >
                        <Text style={styles.chooseText}>
                            {picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}
                        </Text>
                        <Text style={styles.arrow}>{">"}</Text>
                    </Pressable>
                </View>
            </View>

            {/* TODO 2: Nút CHỌN MUA sát đáy */}
            <Pressable style={styles.buyBtn} onPress={() => alert("Đã thêm vào giỏ hàng!")}>
                <Text style={styles.buyText}>CHỌN MUA</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16, justifyContent: "space-between" },
    content: { flex: 1 },
    imageWrap: { flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 10 },
    image: { width: "100%", height: 250 },
    info: { gap: 10 },
    name: { fontSize: 15, fontWeight: "500", color: colors.text },
    row: { flexDirection: "row", alignItems: "center", gap: 10 },
    review: { color: colors.muted, fontSize: 13 },
    price: { fontSize: 18, fontWeight: "bold", color: colors.text },
    oldPrice: { fontSize: 15, color: colors.muted, textDecorationLine: "line-through" },
    badge: { color: colors.red, fontWeight: "bold", fontSize: 12 },
    chooseBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.line,
        borderRadius: 6,
        paddingVertical: 10,
        marginTop: 10,
        position: "relative",
    },
    chooseText: { fontSize: 14, fontWeight: "500" },
    arrow: { position: "absolute", right: 12, fontSize: 16, color: colors.muted },
    buyBtn: {
        backgroundColor: colors.red,
        borderRadius: 6,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 16,
    },
    buyText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});