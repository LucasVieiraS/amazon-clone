import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Button, Text } from "react-native";

import Home from "../screens/Home";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
    </View>
  );
}

const Theme = {
  dark: true,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(12, 12, 12)",
    card: "#202024",
    text: "rgb(255, 255, 255)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "CORDAS") {
              iconName = focused
                ? "guitar"
                : "guitar";
            } else if (route.name === "PERCUSSÃO") {
              iconName = focused ? "drum" : "drum";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="CORDAS" component={Home} />
        <Tab.Screen name="PERCUSSÃO" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
