import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit test app/index.tsx to edit this screen.</Text>
      <Redirect  href={"/login"}/>
    </View>
  );
}
