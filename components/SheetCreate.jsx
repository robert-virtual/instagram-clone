import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function SheetCreate() {
  function itemPress(type = "") {
    return (e) => {
      if (type == "Post") {
      }
    };
  }
  return (
    <View>
      <TouchableOpacity style={styles.item} onPress={itemPress("Post")}>
        <Text>Post</Text>
        <MaterialCommunityIcons name="post" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={itemPress("Historia")}>
        <Text>Historia</Text>
        <MaterialCommunityIcons name="history" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={itemPress("Reel")}>
        <Text>Reel</Text>
        <MaterialCommunityIcons name="movie" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={itemPress("Live")}>
        <Text>Live</Text>
        <MaterialCommunityIcons name="view-stream" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    marginBottom: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
