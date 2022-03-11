import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Login, Register } from "../pages";
import { TabsMenu } from "./TabsMenu";

const Stack = createNativeStackNavigator();

export function StackMenu() {
  const [isAuth, setIsAuth] = useState(false);
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
