import { FlatList, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { HomeHeaderRight } from "../components";

export function Home() {
  const [posts, setPosts] = useState(
    Array.from(Array(50), (e, i) => `Post ${i}`)
  );
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeaderRight />
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        data={posts}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
