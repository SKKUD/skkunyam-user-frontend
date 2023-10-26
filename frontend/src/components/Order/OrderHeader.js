import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants"; // Constants로 불러온다.
// const leftArrow = require("../../assets/left-arrow.png");

const OrderHeader = ({ onIconClick }) => {
  const onBackClick = () => {
    console.log("Back clicked");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackClick}>
        <Image source={require("../../../assets/icons/leftIcon.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onIconClick}>
        <Image source={require("../../../assets/icons/searchIcon.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
});

export default OrderHeader;
