import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/services/GlobalApi";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const AIModels = ({ type }: any) => {
  const router = useRouter();
  useEffect(() => {
    GetAIModels();
  }, []);
  const [data, setData] = useState<Array<string>>([]);
  const GetAIModels = async () => {
    const result = await GlobalApi.getAIModels(type);
    setData(result?.data?.data);
  };
  const handleOnClick = (item: any) => {
    router.push({
      pathname: "/formInput",
      params: item,
    });
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        {type?.toUpperCase()}
      </Text>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              handleOnClick(item);
            }}
            style={{
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item?.banner?.url }}
              style={{
                width: 140,
                height: 180,
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                width: "100%",
                fontSize: 15,
                color: Colors.WHITE,
                textAlign: "center",
                fontWeight: "medium",
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AIModels;
