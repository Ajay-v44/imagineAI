import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const LoginScreen = () => {
  return (
    <View>
      <Image
        source={require("./../../assets/images/login.png")}
        style={{
          width: "100%",
          height: 600,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Welcome to Imagine AI
        </Text>
        <Text
          style={{ color: Colors.GRAY, textAlign: "center", marginTop: 15 }}
        >
          Create AI Art in Just one Click
        </Text>
        <View style={styles.button}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>
            Continue
          </Text>
        </View>
      <Text style={{marginTop:20,color:Colors.GRAY,textAlign:'center',fontSize:13}}>By Continuing you agree to our terms and conditions</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 450,
    padding: 25,
    marginTop: -20,
  },
  button: {
    width: "100%",
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    marginTop: 30,
  },
});
