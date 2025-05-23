import { Pressable, Text, View } from "react-native";
import OrderAgain from "@/components/orderagain";
import { router } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={()=>router.push('/testing')} className="text-blue-500">
        <Text>Open up App.tsx to start working on your app!</Text>
      </Pressable>
   {/* <OrderAgain category="milk" /> */}
    </View>
  );
}
