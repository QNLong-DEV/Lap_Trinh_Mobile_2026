import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { setTokenProvider } from "./src/api/client";
import { usePersistence } from "./src/hooks/usePersistence";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { LoadingView } from "./src/components/LoadingView";

// Interceptor axios lấy token từ store (đăng ký ở đây để tránh import vòng store ↔ api)
setTokenProvider(() => store.getState().auth.token);

function AppContent() {
  const ready = usePersistence(); // nạp auth / giỏ / yêu thích từ AsyncStorage trước khi hiện app
  if (!ready) return <LoadingView label="Đang khởi động…" />;
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export function BookStoreApp() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

export default BookStoreApp;
