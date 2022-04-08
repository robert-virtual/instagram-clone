import { StatusBar, FlatList, Text, StyleSheet, View } from "react-native";
import { useRef, useState } from "react";
import { HomeHeaderRight } from "../components";

export function Home() {
  const [posts, setPosts] = useState(
    Array.from(Array(50), (e, i) => `Post ${i}`)
  );
  const sheetRef = useRef();
  return (
    <View style={styles.container}>
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

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
