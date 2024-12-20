import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import TextInputComponent from "@/components/FormInput/TextInput";
import ImageInput from "@/components/FormInput/ImageInput";
import GlobalApi from "@/services/GlobalApi";
import { UserDetailContext } from "@/context/userDetailContext";
import { Cloudinary } from "@cloudinary/url-gen";
import { upload } from "cloudinary-react-native";

const FormInput = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [aiModel, setAiModel] = useState<Array<string>>();
  const [userInput, setUserInput] = useState<string>();
  const [imageInput, setImageInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedImage, setgeneratedImage] = useState<string>();
  const { userDetail, setUserDetail } = useContext<any>(UserDetailContext);
  useEffect(() => {
    setAiModel(params);
    navigation.setOptions({
      headerShown: true,
      headerTitle: params.name,
    });
  }, []);
  async function textToImage(data: any) {
    // const result: any = await GlobalApi.generateAIImages(data);
    const imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/1960%27s_art_of_cow_getting_abducted_by_UFO_in_midwest.jpg/800px-1960%27s_art_of_cow_getting_abducted_by_UFO_in_midwest.jpg";
    // const credits = await GlobalApi.UpdateUserCredits(userDetail?.documentId, {
    //   credits: Number(userDetail?.credits) - 1,
    // });
    // setUserDetail(credits?.data?.data);

    // save result
    const Input = {
      imageUrl: imageUrl,
      userEmail: userDetail?.userEmail,
    };
    // const saveInput = await GlobalApi.CreateRecord(Input);
    setLoading(false);
    router.push({
      pathname: "/viewAiImage",
      params: {
        imageUrl: imageUrl,
        prompt: userInput,
      },
    });
  }
  const onGenerate = () => {
    if (userDetail.credits<=0){
      ToastAndroid.show('You Dont Have Enough Credits. ',ToastAndroid.LONG)
      return 
    }
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
              setLoading(true);
              const data: any = {
                aiModelName: aiModel?.aiModelName,
                inputPrompt: userInput,
                defaultPrompt: aiModel?.defaultPrompt,
              };
              textToImage(data);
            } else if (aiModel.userimageupload === "true") {
              setLoading(true);
              imageToAiImage();
            }
          },
        },
      ]);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const imageToAiImage = async () => {
    const cld = new Cloudinary({
      cloud: {
        cloudName: `${process.env.EXPO_PUBLIC_CLOUDINARY_NAME}`,
      },
      url: {
        secure: true,
      },
    });

    const options = {
      upload_preset: `${process.env.EXPO_PUBLIC_UPLOAD_PRESET_NAME}`,
      unsigned: true,
    };

    await upload(cld, {
      file: imageInput,
      options: options,
      callback: async (error: any, response: any) => {
        //.. handle response
        if (error !== undefined) {
          alert(error)
        }
        const data = {
          prompt: aiModel?.defaultPrompt,
          userImageUrl: response?.url,
          aiModelName: aiModel?.aiModelName
        }
        const result = await GlobalApi.generateAIImages(data)
        console.log("result", result)
        router.push({
          pathname: "/viewAiImage",
          params: {
            imageUrl: result?.data?.result,
            prompt: aiModel?.name,
          },
        });
        setLoading(false);
      },
    });
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
          disabled={loading}
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
            {loading ? <ActivityIndicator /> : "Generate"}
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
