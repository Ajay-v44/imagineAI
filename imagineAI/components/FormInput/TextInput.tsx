import { View, Text, TextInput } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const TextInputComponent = () => {
  return (
    <View>
      <Text style={{ marginTop: 10 }}>Enter Your Prompt</Text>

      <TextInput
        placeholder="Enter Your Prompt here.."
        numberOfLines={5}
        multiline={true}
        textAlignVertical="top"
        style={{
          padding: 15,
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default TextInputComponent;
