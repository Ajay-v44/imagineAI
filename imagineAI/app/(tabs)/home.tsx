import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Banner from "@/components/Home/Banner";
import FeaturedList from "@/components/Home/FeaturedList";

const Home = () => {
  return (
    <View style={{ padding: 20, margin: 20 }}>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* FeaturedList */}
      <FeaturedList />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
