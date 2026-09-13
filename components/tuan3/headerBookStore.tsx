import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function HeaderBookStore() {

    return (
        <View style={styles.header}>
            <View style={styles.iconGroup}>
                <Image style={styles.logo} source={require('../../assets/Bookstore.png')}></Image>
                <Text style={styles.title}>Book Store</Text>
            </View>

            <View style={styles.iconGroup}>
                <Text style={styles.icon}>🔍</Text>
                <Text style={styles.icon}>🛒</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        height: 56,
        paddingHorizontal: 16,
        backgroundColor: "#a6a4b9",
    },
    logo: {
        width: 120,
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "700",
    },
    iconGroup: {
        flexDirection: "row",
        gap: 5,
    },
    icon: {
        fontSize: 30,
        fontWeight: "700",
    },
});