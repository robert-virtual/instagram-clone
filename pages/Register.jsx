import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useState, useReducer, useContext } from "react";
import { Input, PrimaryButton } from "../components";
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";

import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../context";
import { api_url } from "../constantes";

function userReducer(prevState, payload) {
  return { ...prevState, ...payload };
}

export function Register({ navigation }) {
  const { setAToken, setRToken } = useContext(AuthContext);
  const [state, dispatchUser] = useReducer(userReducer, {
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [image, setImage] = useState();
  function navegar(pagina = "Login") {
    return (e) => {
      navigation.replace(pagina);
    };
  }
  function togglePopup(value = false) {
    return (e) => {
      setPopup(value);
    };
  }
  function pickImage(type = "") {
    return async (e) => {
      setPopup(false);
      if (type == "camara") {
        try {
          let res = await launchCameraAsync();
          setImage(res);
        } catch (error) {
          console.log(error);
        }
        return;
      }
      //
      const res = await launchImageLibraryAsync();
      setImage(res);
    };
  }

  const [popup, setPopup] = useState(false);
  async function sendData() {
    try {
      const form = new FormData();
      form.append("profile", {
        name: image.filename,
        type: `image/${image.filename.split(".")[1]}`,
        uri: image.uri,
      });
      Object.keys(state).forEach((e) => {
        if (e != "password2") {
          form.append(e, state[e]);
        }
      });
      const res = await fetch(api_url + "/auth/register", {
        body: form,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await res.json();
      if (data.accessToken) {
        console.log("accessToken!!!");
        setRToken(data.refreshToken);
        setAToken(data.accessToken);
        return;
      }
      if (data.msg) {
        Alert.alert("Instagram", data.msg);
      }
    } catch (error) {
      Alert.alert("Instagram", error.message);
    }
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.box}>
      {image ? (
        <Image style={styles.img} source={{ uri: image.uri }} />
      ) : (
        <MaterialIcons name="account-circle" size={100} color="#6c5ce7" />
      )}
      <TouchableOpacity onPress={togglePopup(true)} style={styles.btn}>
        <Text>Foto de perfil</Text>
      </TouchableOpacity>
      {popup ? (
        <View style={styles.popup}>
          <TouchableOpacity onPress={pickImage("camara")} style={styles.popbtn}>
            <Text>Tomar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pickImage("gallery")}
            style={styles.popbtn}
          >
            <Text>Seleccionar imagen</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      <Input
        placeholder={"Nombre"}
        onChangeText={(name) => dispatchUser({ name })}
        value={state.name}
      />
      <Input
        placeholder={"Correo"}
        keyboardType="email-address"
        onChangeText={(email) => dispatchUser({ email })}
        value={state.email}
      />
      <Input
        placeholder={"Clave"}
        onChangeText={(password) => dispatchUser({ password })}
        value={state.password}
        password={true}
      />
      <Input
        placeholder={"Confirmar Clave"}
        onChangeText={(password2) => dispatchUser({ password2 })}
        value={state.password2}
        password={true}
      />
      <PrimaryButton onPress={sendData}>Entrar</PrimaryButton>
      <TouchableOpacity onPress={navegar()}>
        <Text>Ya tengo un cuenta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  btn: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
  },

  popup: {
    position: "absolute",
    justifyContent: "space-between",
    zIndex: 9999,
    minHeight: 80,
    padding: 5,
    backgroundColor: "#ffff",
    top: "35%",
    borderColor: "#f3f3f3",
    borderWidth: 1,
    borderRadius: 5,
  },
  popbtn: {
    padding: 5,
    borderRadius: 5,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
