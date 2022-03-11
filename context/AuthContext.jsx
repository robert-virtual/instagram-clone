import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useReducer, useEffect, useState } from "react";

function AuthReducer(prevState, { type, payload }) {
  switch (type) {
    case "existingtokens":
      return { ...prevState, ...payload };

    case "tokens":
      AsyncStorage.setItem("aToken", payload.aToken);
      AsyncStorage.setItem("rToken", payload.rToken);
      return { ...prevState, ...payload };

    case "auth":
      return { ...prevState, ...payload };
    default:
      return prevState;
  }
}

const AuthInitValue = {
  isAuth: false,
  aToken: "",
  rToken: "",
};
const contextInitValue = {
  ...AuthInitValue,
  dispatch({ type = "", payload = {} }) {},
};
export const AuthContext = createContext(contextInitValue);
export const AuthProvider = ({ children }) => {
  const [tokensChecked, setTokensChecked] = useState(false);
  const [state, dispatch] = useReducer(AuthReducer, AuthInitValue);
  useEffect(() => {
    checkTokens();
  }, []);
  async function checkTokens() {
    let aToken = await AsyncStorage.getItem("aToken");
    let rToken = await AsyncStorage.getItem("rToken");
    axios.defaults.headers = {
      Authorization: aToken,
    };
    console.log("checkTokens");
    dispatch({ type: "existingtokens", payload: { aToken, rToken } });
    setTokensChecked(true);
  }
  useEffect(() => {
    if (state.aToken && tokensChecked) {
      checkUser();
      return;
    }
    dispatch({ type: "auth", payload: { isAuth: false } });
  }, [state.aToken]);

  async function checkUser() {
    try {
      let { data } = await axios.get("/users/me");
      if (!data.user) {
        const { data } = await axios.post("/auth/refresh");

        if (!data.accessToken) {
          dispatch({ type: "tokens", payload: { aToken: "", rToken: "" } });

          return;
        }
        dispatch({ type: "tokens", payload: { aToken: data.accessToken } });
        return;
      }

      dispatch({ type: "auth", payload: { isAuth: true } });
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
