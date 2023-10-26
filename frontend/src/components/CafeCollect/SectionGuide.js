import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SectionGuide = ({ mainText, moreText, onIconClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{mainText}</Text>
      <TouchableOpacity style={styles.moreBtn} onPress={onIconClick}>
        <Text style={styles.moreText}>{moreText}</Text>
        <AntDesign name="right" color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 40,
  },
  moreBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
  },
  moreText: {
    fontSize: 14,
    lineHeight: 22,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SectionGuide;
