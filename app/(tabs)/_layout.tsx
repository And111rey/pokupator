import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
     
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor: "white",
        tabBarStyle:{backgroundColor:'#8e5adb'},
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "List",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "list" : "list"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="listOfList"
        options={{
          title: "Previous",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "basket" : "basket"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "add-circle-sharp" : "add-circle-sharp"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
