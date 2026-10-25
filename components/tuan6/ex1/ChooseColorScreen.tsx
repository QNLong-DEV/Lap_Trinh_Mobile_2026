// src/ex1/ChooseColorScreen.tsx
import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SelectPhoneParamList } from "../ex1/SelectPhoneApp";
import { ColorKey, Phone } from "../types";
import { COLOR_ORDER, PHONE_COLORS } from "../data/phone";
import { colors, formatPrice } from "../theme";

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & { phone: Phone };

export function ChooseColorScreen({ navigation, route, phone }: Props) {
    const [picked, setPicked] = useState<ColorKey | undefined>(route.params?.color);
    const [line1, line2] = phone.name.split(" - ");

    return (
        <SafeAreaView style={styles.root}>
            {/* Nửa trên: Nền trắng hiển thị thông tin */}
            <View style={styles.header}>
                <Image
                    source={PHONE_COLORS[picked ?? phone.defaultColor].image}
                    style={styles.thumb}
                    resizeMode="contain"
                />
                <View style={styles.headerText}>
                    <Text style={styles.small}>{line1}</Text>
                    {line2 && <Text style={styles.small}>{line2}</Text>}

                    {/* TODO 3: Hiển thị thêm thông tin khi đã chọn màu */}
                    {picked && (
                        <>
                            <Text style={styles.infoLine}>
                                Màu: <Text style={styles.bold}>{PHONE_COLORS[picked].label}</Text>
                            </Text>
                            <Text style={styles.infoLine}>
                                Cung cấp bởi <Text style={styles.bold}>{phone.supplier}</Text>
                            </Text>
                            <Text style={styles.priceText}>{formatPrice(phone.price)}</Text>
                        </>
                    )}
                </View>
            </View>

            {/* Nửa dưới: Nền xám chứa bảng chọn màu & nút XONG */}
            <View style={styles.body}>
                <Text style={styles.hint}>Chọn một màu bên dưới:</Text>
                <View style={styles.swatches}>
                    {COLOR_ORDER.map((key) => (
                        <Pressable
                            key={key}
                            onPress={() => setPicked(key)}
                            style={[
                                styles.swatch,
                                { backgroundColor: PHONE_COLORS[key].hex },
                                picked === key && styles.swatchOn,
                            ]}
                        />
                    ))}
                </View>

                {/* TODO 4: Nút XONG */}
                <Pressable
                    style={styles.doneBtn}
                    onPress={() => navigation.navigate("Product", { color: picked })}
                >
                    <Text style={styles.doneText}>XONG</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: "#fff" },
    header: { flexDirection: "row", padding: 16, gap: 12, backgroundColor: "#fff" },
    thumb: { width: 100, height: 120 },
    headerText: { flex: 1, gap: 4, justifyContent: "center" },
    small: { fontSize: 13, color: colors.text },
    infoLine: { fontSize: 13, color: colors.text },
    bold: { fontWeight: "bold" },
    priceText: { fontSize: 16, fontWeight: "bold", color: colors.text, marginTop: 4 },
    body: { flex: 1, backgroundColor: colors.grey, padding: 16, justifyContent: "space-between" },
    hint: { fontSize: 15, color: colors.text },
    swatches: { alignItems: "center", gap: 14, marginVertical: 10 },
    swatch: { width: 60, height: 60, borderRadius: 4 },
    swatchOn: { borderWidth: 3, borderColor: "#000" },
    doneBtn: {
        backgroundColor: colors.blue,
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: "center",
    },
    doneText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});