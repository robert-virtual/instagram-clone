import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Input, PrimaryButton } from "../components";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const { navigate } = useNavigation();
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  function navegar(pagina = "Register") {
    return (e) => {
      navigate(pagina);
    };
  }

  return (
    <View style={styles.container}>
      <Text>Inicio de Session</Text>
      <Input placeholder={"Correo"} onChangeText={setCorreo} value={correo} />
      <Input placeholder={"Clave"} onChangeText={setClave} value={clave} />
      <PrimaryButton>Entrar</PrimaryButton>
      <TouchableOpacity onPress={navegar()}>
        <Text>No tengo una cuenta</Text>
      </TouchableOpacity>
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
