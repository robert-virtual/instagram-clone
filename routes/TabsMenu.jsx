import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Activity, Buscar, Home, Profile, Reels } from "../pages";

const Tabs = createBottomTabNavigator();

export function TabsMenu() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Buscar" component={Buscar} />
      <Tabs.Screen name="Reels" component={Reels} />
      <Tabs.Screen name="Activity" component={Activity} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}
