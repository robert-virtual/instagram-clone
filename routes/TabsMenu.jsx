import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Activity, Buscar, Home, Profile, Reels } from "../pages";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../context";
import { useContext } from "react";
import { Image } from "react-native";
const Tabs = createBottomTabNavigator();

export function TabsMenu() {
  const { user } = useContext(AuthContext);
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          headerTitle: "Instagram",
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
            <Image
              source={{ uri: user.imageUrl, width: size, height: size }}
              style={{
                borderColor: color,
                borderWidth: 1,
                borderRadius: size / 2,
              }}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
}
