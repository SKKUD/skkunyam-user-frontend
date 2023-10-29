import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MenuItem = ({ menu }) => {
  const onPress = () => {
    console.log(menu);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <ImageBackground
        source={menu.image}
        style={styles.imageBackground}
        borderRadius={10}
      >
        <LinearGradient
          colors={["transparent", "transparent", "#4f4f4f"]}
          start={{ x: 0.5, y: 0.1 }}
          style={styles.linearGradient}
        >
          <View style={styles.header}>
            <Text style={styles.restaurant}>{menu.restaurant.name}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.menuName}>{menu.name}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 100,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
  },
  header: {
    width: 72,
    height: 20,
    backgroundColor: "#FFE769",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === "android" ? 4 : 0,
  },
  restaurant: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555555",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  menuName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default MenuItem;
