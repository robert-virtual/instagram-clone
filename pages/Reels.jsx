import { Text, StyleSheet, View } from "react-native";

export function Reels() {
  return (
    <View style={styles.container}>
      <Text>Reels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
