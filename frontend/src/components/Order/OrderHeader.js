import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants"; // Constants로 불러온다.
// const leftArrow = require("../../assets/left-arrow.png");

const OrderHeader = ({ title = "", icon, onIconClick }) => {
  const onBackClick = () => {
    console.log("Back clicked");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackClick}>
        <Image source={require("../../../assets/leftIcon.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onIconClick}>
        <Image source={require("../../../assets/searchIcon.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
});

export default OrderHeader;
