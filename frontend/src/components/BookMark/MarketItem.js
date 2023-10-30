import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MarketItem = ({ market }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.image} source={market.image} />
          <View style={styles.marketDetail}>
            <Text style={styles.detailTitle}>
              {market.building} {market.name}
            </Text>
            <View style={styles.detailItem}>
              <Image
                style={styles.detailIcon}
                source={require("../../../assets/icons/timeIcon.png")}
              />
              <Text style={styles.detailSubTitle}>
                {market.accessTime}분 소요
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Image
                style={styles.detailIcon}
                source={require("../../../assets/icons/locationIcon.png")}
              />
              <Text style={styles.detailSubTitle}>
                {market.building} {market.floor}층
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <Image
            style={styles.headerIcon}
            source={require("../../../assets/icons/heartFullIcon.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 8,
  },
  marketDetail: {
    marginLeft: 16,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  detailIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  detailSubTitle: {
    fontSize: 12,
    color: "#8B8B8B",
  },
  right: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerIcon: {
    width: 25,
    height: 23,
  },
});

export default MarketItem;
