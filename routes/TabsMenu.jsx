import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Activity, Buscar, Home, Profile, Reels } from "../pages";
import { Feather } from "@expo/vector-icons";
const Tabs = createBottomTabNavigator();

export function TabsMenu() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
        name="Buscar"
        component={Buscar}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="film" size={size} color={color} />
          ),
        }}
        name="Reels"
        component={Reels}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size} color={color} />
          ),
        }}
        name="Activity"
        component={Activity}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
}
