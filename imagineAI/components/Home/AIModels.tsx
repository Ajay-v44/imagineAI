import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/services/GlobalApi";
import Colors from "@/constants/Colors";

const AIModels = ({ type }: any) => {
  useEffect(() => {
    GetAIModels();
  }, []);
  const [data, setData] = useState<Array<string>>([]);
  const GetAIModels = async () => {
    const result = await GlobalApi.getAIModels(type);
    setData(result?.data?.data);
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
          <View
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
            <Text  style={{position:"absolute",bottom:10,width:"100%",fontSize:15,color:Colors.WHITE,textAlign:'center',fontWeight:"medium"}} >{item?.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AIModels;
