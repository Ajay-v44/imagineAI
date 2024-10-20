import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Colors from "@/constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { UserDetailContext } from "@/context/userDetailContext";
import { getFontFamily } from "@/util/fontFamily";
import { useFonts } from "expo-font";

const Header = () => {
  const { user } = useUser();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [fontsLoaded] = useFonts({
    ArimaBold: require("../../assets/fonts/ArimaBold.ttf"), // Ensure the path is correct
  });
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "ArimaBold",
          fontSize: 30,
          color: Colors.PRIMARY,
          fontWeight: "bold",
        }}
      >
        Imagine AI
      </Text>
      <View style={[styles.container, { gap: 10 }]}>
        <View
          style={[
            styles.container,
            {
              gap: 5,
              borderWidth: 0.4,
              borderRadius: 99,
              paddingHorizontal: 10,
            },
          ]}
        >
          <Image
            source={require("../../assets/images/coin.png")}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text>{userDetail?.credits}</Text>
        </View>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 40, height: 40, borderRadius: 99 }}
        />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
