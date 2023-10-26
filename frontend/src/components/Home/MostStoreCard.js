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

const MostStoreCard = ({ store }) => {
  const [isLiked, setIsLiked] = useState(store?.isLiked || false);
  const [heartIcon, setHeartIcon] = useState();
  const [likeCount, setLikeCount] = useState(store?.likeCount || 0);

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
    setLikeCount(isLiked ? likeCount + 1 : likeCount - 1);
  }, [isLiked]);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground
          style={styles.bgImage}
          source={store.imgSource}
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
              <Text style={styles.likeText}>{likeCount}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.storeNameText}>
          {store.building} {store.name}
        </Text>
        <Text style={styles.storeWaitText}>소요시간 {store.waitMinuite}분</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 160,
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
  storeNameText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555555",
  },
  storeWaitText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555555",
  },
});

export default MostStoreCard;
