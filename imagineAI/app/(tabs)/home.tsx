import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Banner from "@/components/Home/Banner";
import FeaturedList from "@/components/Home/FeaturedList";
import AIModels from "@/components/Home/AIModels";
import AllUsersCreatio from "@/components/Home/AllUsersCreatio";

const Home = () => {
  return (
    <FlatList
      data={[1]}
      style={{ padding: 20, margin: 20 }}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View>
          {/* Header */}
          <Header />
          {/* Banner */}
          <Banner />
          {/* FeaturedList */}
          <FeaturedList />
          {/* AI Models (Avatar) */}
          <AIModels type={"avatar"} />
          {/* AI Models (Style) */}
          <AIModels type={"style"} />
          {/* users Creation */}
          <AllUsersCreatio />
          <View style={{ height: 100 }}></View>
        </View>
      )}
    />
  );
};

export default Home;
const styles = StyleSheet.create({});
