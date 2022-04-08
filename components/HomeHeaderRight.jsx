import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function HomeHeaderRight({}) {
  const { navigate } = useNavigation();

  function navegar(page) {
    return (e) => {
      navigate(page);
    };
  }
  const [createVisible, setCreateVisible] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>
        Instagram
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCreateVisible(!createVisible)}
        >
          <MaterialCommunityIcons name="plus-box" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={navegar("Messages")}>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: "#f3f3f3",
    marginBottom: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
