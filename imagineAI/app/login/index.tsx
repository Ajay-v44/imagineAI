import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
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
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>
            Continue
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            color: Colors.GRAY,
            textAlign: "center",
            fontSize: 13,
          }}
        >
          By Continuing you agree to our terms and conditions
        </Text>
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
