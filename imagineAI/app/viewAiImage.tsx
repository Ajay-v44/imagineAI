import { View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Colors from "@/constants/Colors";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system'
const viewAiImage = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [status, requestPermission] = MediaLibrary.usePermissions()
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Ai Generated Image",
    });
  }, []);

  const downloadImage = async () => {
    try {
      // check permission
      if (!status?.granted) {
        // /if not request permission
        const permissioResp = await requestPermission()
        if (!permissioResp?.granted) {
          ToastAndroid.show('No Permisson to download image', ToastAndroid.SHORT)
          return
        }
      }
      const fileUri = FileSystem?.documentDirectory + Date.now() + "_ImagineAi.jpg"
      const { uri } = await FileSystem.downloadAsync(params?.imageUrl, fileUri)
      const asset = await MediaLibrary.createAssetAsync(uri)
      if (asset) {
        ToastAndroid.show('Image Downloaded !!!', ToastAndroid.SHORT)
      }else{
        ToastAndroid.show('Internal server Error !!!', ToastAndroid.SHORT)

      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: '100%'
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
          onPress={downloadImage}
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
