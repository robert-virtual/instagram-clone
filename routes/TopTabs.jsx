import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Camara, Home, Messages } from "../pages";

const Tabs = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="Camara" component={Camara} />
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen
        options={{ title: "Messages" }}
        name="Messages"
        component={Messages}
      />
    </Tabs.Navigator>
  );
}
