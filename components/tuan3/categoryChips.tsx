import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CATEGORIES } from "../../data";

const DEMO_EXTRA_HEIGHT = false;

export function CategoryChips() {
    return (
        <View
            style={[
                styles.wrap,
                DEMO_EXTRA_HEIGHT && { height: 220, alignContent: "flex-start" },
            ]}
        >
            {CATEGORIES.map((name) => (
                <Pressable
                    key={name}
                    style={({ pressed }) => [
                        styles.chip,
                        { backgroundColor: pressed ? '#f0f0f0' : '#ffffff' }
                    ]}
                >
                    <View>
                        {/* Không set width cho Text/View chip -> tự rộng theo nội dung chữ */}
                        <Text style={styles.chipText}>{name}</Text>
                    </View>
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    chip: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#6366F1",
        // Không set "width" -> mỗi chip tự co giãn đúng theo độ dài tên danh mục
    },
    chipText: {
        color: "#4338CA",
        fontSize: 13,
        fontWeight: "600",
    },
});
