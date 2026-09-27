import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { BOOKS, CART_ITEMS, CartItem, Book } from './data';
import { BookDetailScreen } from './components/tuan4/screen/BookDetailScreen';
import { HomeScreen } from './components/tuan4/screen/HomeScreen';
import { CartScreen } from './components/tuan4/screen/CartScreen';
import { TabBar, TabKey } from './components/tuan4/TabBar';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (selectedBook) {
    return (
      <View style={styles.app}>
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBook(null)}
          onAddToCart={() => {
            setCartItems((items) => {
              const existingItem = items.find((item) => item.book.id === selectedBook.id);
              if (existingItem) {
                return items.map((item) =>
                  item.book.id === selectedBook.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                );
              }
              return [...items, { book: selectedBook, quantity: 1 }];
            });
            Alert.alert('Đã thêm vào giỏ', selectedBook.title);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.app}>
      <View style={styles.content}>
        {activeTab === 'cart' ? (
          <CartScreen items={cartItems} />
        ) : (
          <HomeScreen
            cartCount={cartCount}
            onPressBook={(id) => {
              const book = BOOKS.find((item) => item.id === id);
              if (book) setSelectedBook(book);
            }}
            onPressCart={() => setActiveTab('cart')}
          />
        )}
      </View>
      <TabBar
        active={activeTab}
        onChange={(tab) => {
          if (tab === 'home' || tab === 'cart') {
            setActiveTab(tab);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
});