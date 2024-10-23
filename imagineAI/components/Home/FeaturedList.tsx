import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/services/GlobalApi";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const FeaturedList = () => {
  const router = useRouter();
  const [aiModelList, setAiModelList] = useState<Array<string>>([]);
  useEffect(() => {
    getFeaturedList();
  }, []);
  const getFeaturedList = async () => {
    const result = await GlobalApi.getFeatureCategoryList();
    setAiModelList(result?.data?.data);
  };
  const handleOnClick = (item: any) => {
    router.push({
      pathname: "/formInput",
      params: item,
    });
  };
  return (
    <View style={{ marginTop: 25 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        FEATURED
      </Text>
      <FlatList
        data={aiModelList}
        numColumns={4}
        style={{ marginTop: 7 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              handleOnClick(item);
            }}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 10,
                borderRadius: 8,
                backgroundColor: Colors.LIGHT_GRAY,
              }}
            >
              <Image
                source={{ uri: item?.icon?.url }}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                color: Colors.PRIMARY,
                marginTop: 2,
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

export default FeaturedList;
