import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "@/constants/Colors";
import GetUerInfo from "@/services/GlobalApi";
import { useUser } from "@clerk/clerk-expo";

export default function TabLayout() {
  const { user } = useUser();
  const VerifyUser = async () => {
    console.log("loading...")
    const result = await GetUerInfo(user.emailAddresses[0].emailAddress);
    console.log(result.data);
  };

  useEffect(() => {
    user && VerifyUser();
  }, [user]);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Collections",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="collections" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
