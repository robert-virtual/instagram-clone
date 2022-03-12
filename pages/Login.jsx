import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import { Input, PrimaryButton } from "../components";
import { AuthContext } from "../context";

export function Login({ navigation }) {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  function navegar(pagina = "Register") {
    return (e) => {
      navigation.replace(pagina);
    };
  }
  const { setIsAuth } = useContext(AuthContext);
  function sendData() {
    setIsAuth(true);
  }
  return (
    <View style={styles.container}>
      <Text>Inicio de Session</Text>
      <Input placeholder={"Correo"} onChangeText={setCorreo} value={correo} />
      <Input placeholder={"Clave"} onChangeText={setClave} value={clave} />
      <PrimaryButton onPress={sendData}>Entrar</PrimaryButton>
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
