import { Text, StyleSheet, View } from "react-native";

export function Activity() {
  return (
    <View style={styles.container}>
      <Text>Activity</Text>
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
