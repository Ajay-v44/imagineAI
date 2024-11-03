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
        backgroundColor:Colors.WHITE,
        height:'100%'
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
      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 10,
            width: "50%",
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Download
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.YELLOW,
            borderRadius: 10,
            width: "50%",
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginVertical: 15, fontSize: 13, color: Colors.GRAY }}>
        Note: Image will available only fo next 20 Min
      </Text>
    </View>
  );
};

export default viewAiImage;
