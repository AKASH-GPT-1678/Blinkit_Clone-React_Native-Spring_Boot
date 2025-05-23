import { Stack } from "expo-router";
import "./globals.css";
import FixHeader from "@/components/Viewcomponent/FixHeader";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <FixHeader />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
