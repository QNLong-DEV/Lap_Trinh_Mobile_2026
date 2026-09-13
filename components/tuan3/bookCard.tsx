import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Book } from "../../data";
import { DiscountBadge } from "./DiscountBadge";

export default function BookCard({ book, onPress }: { book: Book; onPress?: () => void }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [
            styles.card_cont,
            { backgroundColor: pressed ? '#f0f0f0' : '#ffffff' }
        ]}>

            <View style={styles.coverWrap}>
                <Image source={{ uri: book.cover }} style={styles.anhbia} />
                <DiscountBadge discountPercent={book.discountPercent} isNew={book.isNew} />
            </View>

            {/* Cột phải: Khu vực chứa thông tin sách */}
            <View style={styles.info_sec}>

                <View style={styles.info_item}>
                    <Text style={styles.label}>Tên sách: </Text>
                    <Text style={styles.value}>{book.title}</Text>
                </View>

                <View style={styles.info_item}>
                    <Text style={styles.label}>Tác giả: </Text>
                    <Text style={styles.value}>{book.author}</Text>
                </View>

                <View style={styles.info_item}>
                    <Text style={styles.label}>Giá: </Text>
                    <Text style={styles.value_price}>{book.price}</Text>
                </View>

            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card_cont: {
        flexDirection: "row",

        padding: 12,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,

        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    anhbia: {
        width: 80,
        height: 120,
        borderRadius: 8,
        resizeMode: "cover",
        backgroundColor: "#f0f0f0",
    },
    coverWrap: {
        position: "relative",
    },
    info_sec: {
        flex: 1,
        marginLeft: 16,
        justifyContent: "space-around",
    },
    info_item: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#666",
    },
    value: {
        fontSize: 16,
        color: "#1a1a1a",
    },
    value_price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#d9534f",
    }
});