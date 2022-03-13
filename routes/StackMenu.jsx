import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../context";
import { Login, Register, Splash } from "../pages";
import { TabsMenu } from "./TabsMenu";

const Stack = createNativeStackNavigator();

export function StackMenu() {
  const { isAuth } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name="TabsMenu"
            component={TabsMenu}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={Splash}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
