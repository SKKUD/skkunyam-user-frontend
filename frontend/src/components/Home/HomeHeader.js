import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import Constants from "expo-constants"; // Constants로 불러온다.

const HomeHeader = () => {
  const onMapIconClick = () => {
    console.log("MapIcon clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGO</Text>
      <TouchableOpacity onPress={onMapIconClick}>
        <Image
          source={require("../../../assets/icons/mapIcon.png")}
          style={styles.mapIcon}
        />
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
    ...Platform.select({
      ios: {
        marginTop: Constants.statusBarHeight + 10,
      },
      android: {
        marginTop: Constants.statusBarHeight + 40,
      },
    }),
  },
  mapIcon: {
    width: 28,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeHeader;
