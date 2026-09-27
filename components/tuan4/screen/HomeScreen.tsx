
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import HeaderBookStore from "../../tuan3/headerBookStore";
import { CategoryChips } from "../../tuan3/categoryChips";
import { BookGrid } from "../../tuan3/BookGrid";
import { FloatingCartButton } from "../../tuan3/FloatingCartButton";
import { BOOKS } from "../../../data";

export function HomeScreen({
  cartCount,
  onPressBook,
  onPressCart,
}: {
  cartCount: number;
  onPressBook: (id: number) => void;
  onPressCart: () => void;
}) {
  return (

    <View style={styles.screen}>
      <HeaderBookStore />

      <ScrollView
        style={styles.scroll} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <CategoryChips />

        <Text style={styles.sectionTitle}>Sách nổi bật</Text>
        <BookGrid books={BOOKS} onPressBook={onPressBook} />
      </ScrollView>


      <FloatingCartButton count={cartCount} onPress={onPressCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 140,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 4,
  },
});
