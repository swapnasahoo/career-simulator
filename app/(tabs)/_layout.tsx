import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="SkillsScreen"
        options={{
          title: "Skills",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "construct" : "construct-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="LifeScreen"
        options={{
          title: "Life",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="EducationScreen"
        options={{
          title: "Education",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
