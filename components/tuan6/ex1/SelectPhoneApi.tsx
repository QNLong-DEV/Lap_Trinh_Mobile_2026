// src/ex1/SelectPhoneApi.tsx
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { Phone } from "../types";
import { fetchPhone } from "../api/phoneApi";
import { SelectPhoneApp } from "../ex1/SelectPhoneApp";
import { colors } from "../theme";

export function SelectPhoneApi() {
    const [phone, setPhone] = useState<Phone | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const load = useCallback(async () => {
        // TODO 1
        setError(null);
        setPhone(null);
        setLoading(true);

        // TODO 2
        try {
            const data = await fetchPhone("1");
            setPhone(data);
        } catch (e: any) {
            setError(e.message || "Có lỗi xảy ra khi tải dữ liệu");
        } finally {
            setLoading(false);
        }
    }, []);

    // TODO 3: Gọi load khi màn hình được render lần đầu
    useEffect(() => {
        load();
    }, [load]);

    // TODO 4: Xử lý trạng thái Lỗi
    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>{error}</Text>
                <Pressable style={styles.retryBtn} onPress={load}>
                    <Text style={styles.retryText}>THỬ LẠI</Text>
                </Pressable>
            </View>
        );
    }

    // TODO 5: Xử lý trạng thái Đang tải (Loading)
    if (loading || !phone) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={colors.blue} />
                <Text style={{ marginTop: 10, color: colors.muted }}>Đang tải...</Text>
            </View>
        );
    }

    // TODO 6: Trả về ứng dụng chính Bài 1 khi có dữ liệu thành công
    return <SelectPhoneApp phone={phone} />;
}

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    errorText: { color: colors.red, fontSize: 15, textAlign: "center", marginBottom: 12 },
    retryBtn: { backgroundColor: colors.blue, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 4 },
    retryText: { color: "#fff", fontWeight: "bold" },
});