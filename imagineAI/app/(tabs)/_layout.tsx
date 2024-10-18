import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "@/constants/Colors";
import GlobalApi from "@/services/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import CreateUser from "@/types/userTypes";
import { UserDetailContext } from "@/context/userDetailContext";

export default function TabLayout() {
  const { user } = useUser();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const VerifyUser = async () => {
    const result = await GlobalApi.GetUerInfo(
      user?.primaryEmailAddress?.emailAddress
    );
    if (result.data.data.length != 0) {
      setUserDetail(result.data.data);
      return;
    }
    try {
      const data: CreateUser = {
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      };
      const response = await GlobalApi.CreateNewUser(data);
      setUserDetail(response.data.data);
    } catch (e) {
      console.log(JSON.stringify(e));
    }
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
