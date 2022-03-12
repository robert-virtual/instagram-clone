import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context";
export function Splash({ navigation }) {
  const { gotoLogin } = useContext(AuthContext);
  useEffect(() => {
    if (gotoLogin) {
      navigation.replace("Login");
    }
  }, [gotoLogin]);

  return (
    <View style={styles.container}>
      <AntDesign name="instagram" size={50} color="black" />
      <Text>Instagram Hn</Text>
      <Text style={{ position: "absolute", bottom: 10 }}>
        From Robert Castillo
      </Text>
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
