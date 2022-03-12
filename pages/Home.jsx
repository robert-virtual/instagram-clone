import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeaderRight } from "../components";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeaderRight />
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
