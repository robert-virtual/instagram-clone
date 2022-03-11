import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { AuthProvider, ImagesProvider } from "./context";
import { StackMenu } from "./routes";

axios.defaults.baseURL = "http://192.168.0.21:3000/api";

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
