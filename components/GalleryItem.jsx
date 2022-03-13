import { TouchableOpacity, Image } from "react-native";

export const GalleryItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Image source={{ uri: item.uri, width: 100, height: 100 }} />
    </TouchableOpacity>
  );
};
