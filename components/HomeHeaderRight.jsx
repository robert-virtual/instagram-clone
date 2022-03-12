import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useState } from "react";
import { ImagesGallery } from "./ImagesGallery";

export function HomeHeaderRight() {
  function itemPress(type = "") {
    return (e) => {
      setCreateVisible(false);
      if (type == "Post") {
        setShowGallery(true);
      }
    };
  }
  const [image, setImage] = useState();
  const [showGallery, setShowGallery] = useState(false);
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
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={26}
            color="black"
          />
        </TouchableOpacity>
        {createVisible ? (
          <View
            style={{
              position: "absolute",
              top: 40,
              right: 10,
              backgroundColor: "#ebebeb",
            }}
          >
            <TouchableOpacity style={styles.item} onPress={itemPress("Post")}>
              <Text>Post</Text>
              <MaterialCommunityIcons name="post" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={itemPress("Historia")}
            >
              <Text>Historia</Text>
              <MaterialCommunityIcons name="history" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={itemPress("Reel")}>
              <Text>Reel</Text>
              <MaterialCommunityIcons name="movie" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={itemPress("Live")}>
              <Text>Live</Text>
              <MaterialCommunityIcons
                name="view-stream"
                size={26}
                color="black"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
      </View>

      <ImagesGallery
        setImage={setImage}
        visible={showGallery}
        setVisible={setShowGallery}
      />
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
