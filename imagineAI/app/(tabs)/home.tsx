import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Banner from "@/components/Home/Banner";

const Home = () => {
  return (
    <View style={{ padding: 20, margin: 20 }}>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
