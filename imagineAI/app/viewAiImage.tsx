import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Colors from "@/constants/Colors";

const viewAiImage = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Ai Generated Image",
    });
  }, []);
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Image
        source={{ uri: params?.imageUrl }}
        style={{
          width: "100%",
          height: 400,
          borderRadius: 20,
        }}
      />

      <Text style={{ marginVertical: 15, fontSize: 16, color: Colors.PRIMARY }}>
        Prompt: {params.prompt}
      </Text>
      <Text style={{ marginVertical: 15, fontSize: 13, color: Colors.GRAY }}>
        Note: Image will available only fo next 20 Min
      </Text>
      <TouchableOpacity>
        <Text>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default viewAiImage;
