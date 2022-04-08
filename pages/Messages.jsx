import { Text, StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export function Messages() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
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
