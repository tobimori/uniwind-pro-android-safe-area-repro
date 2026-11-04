import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import { useResolveClassNames } from "uniwind"

function Screen() {
  const insets = useSafeAreaInsets()
  const uniwind = useResolveClassNames("pt-safe pb-safe")

  useEffect(() => {
    const id = setInterval(
      () => console.log("DEBUG insets", JSON.stringify({ safeAreaContext: insets, uniwind })),
      5000,
    )
    return () => clearInterval(id)
  }, [insets, uniwind])

  return (
    <View className="flex-1 bg-white">
      <View className="bg-blue-600 pt-safe">
        <Text className="p-4 text-lg font-bold text-white">Header with pt-safe</Text>
      </View>
      <View className="flex-1 justify-center gap-4 p-6">
        <Text className="text-lg">
          react-native-safe-area-context: top {insets.top}, bottom {insets.bottom}
        </Text>
        <Text className="text-lg">
          uniwind pt-safe pb-safe: {JSON.stringify(uniwind)}
        </Text>
      </View>
      <View className="bg-blue-600 pb-safe">
        <Text className="p-4 text-lg font-bold text-white">Footer with pb-safe</Text>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Screen />
    </SafeAreaProvider>
  )
}
