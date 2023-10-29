import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const DraggableList = ({ setShown, shown, onShownPress }) => {
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator activeScale={1.05}>
        <View style={[styles.Item]}>
          <View style={styles.ItemLeft}>
            <Text style={styles.ItemText}>{item.text}</Text>
          </View>
          <View style={styles.ItemRight}>
            <TouchableOpacity onPressIn={drag} disabled={isActive}>
              <Image
                style={styles.moveItemIcon}
                source={require("../../../assets/icons/moveIcon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onShownPress(item)}>
              <Text style={styles.ItemSubText}>숨기기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView
      style={{
        height: 60 * shown.length,
        backgroundColor: "#e9e9e9",
        width: Dimensions.get("window").width,
      }}
    >
      <DraggableFlatList
        scrollEnabled={false}
        data={shown}
        onDragEnd={({ data }) => setShown(data)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  Item: {
    width: Dimensions.get("window").width,
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  ItemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ItemText: {
    fontSize: 18,
    color: "#4E4E4E",
  },
  ItemRight: {
    width: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moveItemIcon: {
    width: 20,
    height: 14,
  },
  ItemSubText: {
    fontSize: 16,
    color: "#9D9D9D",
  },
});

export default DraggableList;
