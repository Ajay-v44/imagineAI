import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
export default function Index() {
  const [fontsLoaded] = useFonts({
    ArimaBold: require('../assets/fonts/ArimaBold.ttf'), // Ensure the path is correct
  });
  
  const { user } = useUser();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit test app/index.tsx to edit this screen.</Text>
      {!user ? (
        <Redirect href={"/login"} />
      ) : (
        <Redirect href={"/(tabs)/home"}></Redirect>
      )}
    </View>
  );
}
