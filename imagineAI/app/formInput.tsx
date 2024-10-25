import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Colors from "@/constants/Colors";
import TextInputComponent from "@/components/FormInput/TextInput";
import ImageInput from "@/components/FormInput/ImageInput";
import GlobalApi from "@/services/GlobalApi";

const FormInput = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [aiModel, setAiModel] = useState<Array<string>>();
  const [userInput, setUserInput] = useState<string>();
  const [imageInput, setImageInput] = useState<string>();
  useEffect(() => {
    setAiModel(params);
    navigation.setOptions({
      headerShown: true,
      headerTitle: params.name,
    });
  }, []);
  async function callAPI(data: any) {
    const result = await GlobalApi.getAIModels(data);
    console.log(result);
  }

  const onGenerate = () => {
    try {
      Alert.alert("Generate", "Generate Image", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            if (userInput) {
              const data: any = {
                aiModelName: aiModel?.aiModelName,
                inputPrompt: userInput,
                defaultPrompt: aiModel?.defaultPrompt,
              };
              callAPI(data);
            }
          },
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.constiner}>
      <Text style={styles.headingText}>{aiModel?.name}</Text>

      <View>
        {aiModel?.userimageupload === "true" ? (
          <ImageInput setImage={setImageInput} />
        ) : (
          <TextInputComponent userInputValue={setUserInput} />
        )}
        <Text
          style={{
            color: Colors.GRAY,
            marginVertical: 5,
          }}
        >
          Note : 1 Credit Will Be Used To Generate AI Image
        </Text>
        <TouchableOpacity
          onPress={onGenerate}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginVertical: 15,
            width: "100%",
          }}
        >
          <Text
            style={{ color: Colors.WHITE, textAlign: "center", fontSize: 15 }}
          >
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormInput;
const styles = StyleSheet.create({
  constiner: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    height: "100%",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
