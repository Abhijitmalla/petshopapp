import { store } from "@/redux/Store";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

const RootLayout = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  </GestureHandlerRootView>
);

export default RootLayout;
