import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Banner from "@/components/Home/Banner";
import FeaturedList from "@/components/Home/FeaturedList";
import AIModels from "@/components/Home/AIModels";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20, margin: 20 }}>
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
      <View style={{height:100}}>

      </View>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({});
