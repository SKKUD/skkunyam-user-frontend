import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import Constants from "expo-constants"; // Constants로 불러온다.

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
    paddingBottom: 18,
    paddingHorizontal: 20,
    marginTop: Constants.statusBarHeight,
  },
});

export default OrderHeader;
