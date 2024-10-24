import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ setImage }) => {
  const [comImg,setCompImg]=useState<string>()
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setCompImg(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Text
        style={{
          marginVertical: 5,
        }}
      >
        Upload Your Image
      </Text>

      <TouchableOpacity
        onPress={pickImage}
        style={{
          padding: 50,
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
          marginVertical: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {comImg?<Image
          source={{uri:comImg}}
          style={{
            width: '100%',
            height: 300,
          }}
        />:<Image
        source={require("./../../assets/images/uploadimage.jpg")}
        style={{
          width: 120,
          height: 120,
        }}
      />}
      </TouchableOpacity>
    </View>
  );
};

export default ImageInput;
