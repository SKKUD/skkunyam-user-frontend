import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BuildingStore = ({ store }) => {
  return (
    <View style={styles.container}>
      <View style={styles.storeImage}></View>
      <Text style={styles.nameText}>{store.name}</Text>
      <Text style={styles.timeText}>{store.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
  },
  storeImage: {
    height: 115,
    aspectRatio: 1,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
  nameText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold",
    color: "#222222",
  },
  timeText: {
    fontSize: 12,
    lineHeight: 22,
    color: "#222222",
  },
});

export default BuildingStore;
