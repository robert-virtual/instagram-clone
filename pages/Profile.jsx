import {
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import { AuthContext } from "../context";
import { ImagesGallery } from "../components";

export function Profile({ navigation }) {
  const { user } = useContext(AuthContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.bold}>{user.name}</Text>,
    });
  }, [user]);
  const [imageVisible, setImageVisible] = useState(false);
  const [image, setImage] = useState();
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => setImageVisible(true)}>
          <Image source={{ uri: user.imageUrl }} style={styles.rounded} />
        </TouchableOpacity>
        <ImagesGallery
          setImage={setImage}
          setVisible={setImageVisible}
          visible={imageVisible}
        />
        <Text>Posts:20</Text>
        <Text>Followers:10</Text>
        <Text>Following:15</Text>
      </View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  bold: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rounded: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
