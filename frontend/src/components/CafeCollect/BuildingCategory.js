import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const BuildingCategory = ({ buildings, selectedCategory, onCategoryClick }) => {
  return (
    <View style={styles.container}>
      {buildings.map((building, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.building,
            selectedCategory == index && {
              backgroundColor: "#FFCD4D",
            },
          ]}
          onPress={() => onCategoryClick(index)}
        >
          <Text
            style={[
              styles.buildingText,
              selectedCategory == index && { color: "white" },
            ]}
          >
            {building}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  building: {
    backgroundColor: "#EEEEEE",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    marginRight: 10,
  },
  buildingText: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 22,
    color: "#9C9C9C",
  },
});

export default BuildingCategory;
