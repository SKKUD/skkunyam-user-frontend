import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MenuCard = ({ menu }) => {
  return (
    // <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={menu?.imgSource}>
        <LinearGradient
          colors={["transparent", "transparent", "#4f4f4f"]}
          start={{ x: 0.5, y: 0.1 }}
          style={styles.linearGradient}
        >
          <View style={styles.cardHeader}>
            <View style={styles.restaurant}>
              <Text style={styles.restaurantText}>{menu?.restaurant}</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.menuText}>{menu?.name}</Text>
            <Text style={styles.costText}>{menu?.cost}원</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 160,
    borderRadius: 8,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  cardHeader: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  restaurant: {
    width: 72,
    height: 20,
    borderRadius: 16,
    backgroundColor: "#FFE769",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  restaurantText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555555",
  },
  cardBody: {
    width: "100%",
    padding: 16,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  costText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4,
  },
});

export default MenuCard;
