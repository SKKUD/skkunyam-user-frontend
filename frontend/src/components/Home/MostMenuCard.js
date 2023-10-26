import { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MostMenuCard = ({ menu }) => {
  const [isLiked, setIsLiked] = useState(menu?.isLiked || false);
  const [heartIcon, setHeartIcon] = useState();

  const toggleLike = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  useEffect(() => {
    setHeartIcon(
      isLiked
        ? require("../../../assets/icons/heartFullIcon.png")
        : require("../../../assets/icons/heartEmptyIcon.png")
    );
  }, [isLiked]);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground
          style={styles.bgImage}
          source={menu.imgSource}
          imageStyle={{ borderRadius: 8 }}
        >
          <LinearGradient
            colors={["#5a5a5a", "transparent"]}
            end={{ x: 0.5, y: 0.4 }}
            style={styles.linearGradient}
          >
            <View style={styles.likeInfo}>
              <TouchableOpacity activeOpacity={1} onPress={toggleLike}>
                <Image style={styles.heartIcon} source={heartIcon}></Image>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.MenuNameText}>{menu.name}</Text>
        <Text style={styles.MenuSubText}>
          {menu.restaurant.building} {menu.restaurant.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 180,
    marginRight: 8,
  },
  imgContainer: {
    width: 110,
    height: 115,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  likeInfo: {
    width: "100%",
    height: 22,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 6,
    justifyContent: "flex-start",
  },
  heartIcon: {
    width: 21,
    height: 19,
  },
  likeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },
  detailContainer: {
    width: "100%",
    marginTop: 8,
  },
  MenuNameText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555555",
  },
  MenuSubText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555555",
  },
});

export default MostMenuCard;
