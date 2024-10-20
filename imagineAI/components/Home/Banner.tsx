import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/banner.png")}
        style={{
          width: "100%",
          height: 170,
          borderRadius: 15,
        }}
      />
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerText1}>Turn words</Text>
        <Text style={styles.bannerText2}>into Art</Text>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Banner;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  bannerTextContainer: {
    position: "absolute",
    padding: 15,
  },
  bannerText1: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  bannerText2: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.YELLOW,
  },
  buttonStyle: {
    padding: 7,
    backgroundColor: Colors.YELLOW,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 15,
    borderRadius: 7,
    paddingHorizontal: 15,
  },
});
