import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Modal,
  FlatList,
  View,
  Text,
  useWindowDimensions,
  Image,
} from "react-native";
import { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ImagesContext } from "../context";
const { round } = Math;

export function ImagesGallery({ visible, setVisible, setImage }) {
  const { width } = useWindowDimensions();
  const { cargando, photos } = useContext(ImagesContext);
  const [selectedImage, setSelectedImage] = useState();
  function selectImage(item) {
    setSelectedImage(item);
    setImage(item);
  }
  return (
    <Modal animationType="slide" visible={visible} style={styles.modal}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.close}
          onPress={() => setVisible(false)}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        {!cargando ? <Text>Imagenes: {photos.length}</Text> : <Text />}
        {!cargando ? (
          <TouchableOpacity
            style={styles.close}
            onPress={() => setVisible(false)}
          >
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <Text />
        )}
      </View>
      {selectedImage ? (
        <Image
          source={{
            uri: selectedImage.uri,
            width: width,
            height: width,
          }}
        />
      ) : (
        <View />
      )}
      {cargando ? (
        <ActivityIndicator size={"large"} color="blue" />
      ) : (
        <FlatList
          numColumns={round(width / 100)}
          data={photos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectImage(item)}>
              <Image source={{ uri: item.uri, width: 100, height: 100 }} />
            </TouchableOpacity>
          )}
        />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    margin: 15,
  },
  modal: {
    backgroundColor: "white",
  },
});
