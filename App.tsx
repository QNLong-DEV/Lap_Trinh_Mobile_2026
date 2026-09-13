import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderBookStore from './components/tuan3/headerBookStore';
import { BOOKS } from './data';
import { CategoryChips } from './components/tuan3/categoryChips';
import { BookGrid } from './components/tuan3/BookGrid';
import { FloatingCartButton } from './components/tuan3/FloatingCartButton';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderBookStore />

      <ScrollView contentContainerStyle={styles.listContent}>
        <CategoryChips />
        <Text style={styles.sectionTitle}>Lưới sách</Text>
        <BookGrid
          books={BOOKS}
          onPressBook={(id) => Alert.alert('Đã chọn sách', `Mã sách: ${id}`)}
        />
      </ScrollView>

      <FloatingCartButton
        count={4}
        onPress={() => Alert.alert('Giỏ hàng', 'Bạn có 4 sản phẩm trong giỏ hàng.')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingBottom: 110,
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 10,
    color: '#1E1B4B',
    fontSize: 18,
    fontWeight: '700',
  },
  cardPreview: {
    marginTop: 4,
  },
});