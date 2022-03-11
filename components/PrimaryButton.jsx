import { Text, StyleSheet, TouchableOpacity } from "react-native";

export function PrimaryButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
    backgroundColor: "#6c5ce7",
    padding: 15,
    minWidth: 200,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
