import { TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export function Input({
  keyboardType,
  placeholder,
  onChangeText,
  value,
  password,
}) {
  const [visible, setVisible] = useState(false);

  function toggle(value = false) {
    return (e) => {
      setVisible(value);
    };
  }
  return (
    <View style={styles.box}>
      <TextInput
        style={{ padding: 15, flexGrow: 1 }}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={visible}
      />

      {password ? (
        visible ? (
          <TouchableOpacity style={styles.btn} onPress={toggle(false)}>
            <MaterialIcons name="visibility-off" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={toggle(true)}>
            <MaterialIcons name="visibility" size={24} color="black" />
          </TouchableOpacity>
        )
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    flexDirection: "row",
    minWidth: "80%",
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#f3f3f3",
  },
  btn: {
    marginRight: 5,
  },
});
