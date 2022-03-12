import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider, ImagesProvider } from "./context";
import { StackMenu } from "./routes";

// axios.defaults.baseURL = "http://192.168.0.21:3000/api";
axios.defaults.baseURL = "https://instagram-hn.herokuapp.com/api";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ImagesProvider>
          <StackMenu />
        </ImagesProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
