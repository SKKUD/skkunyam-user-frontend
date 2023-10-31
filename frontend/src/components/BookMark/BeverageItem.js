import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BeverageItem = ({ beverage }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.image} source={beverage.image} />
          <View style={styles.marketDetail}>
            <Text style={styles.detailTitle}>{beverage.name}</Text>
            <View style={styles.detailItem}>
              <Text style={styles.detailSubTitle}>
                {beverage.cafe.building} {beverage.cafe.name}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailSubTitle}>{beverage.price}원</Text>
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
    fontFamily: "Pretendard SemiBold",
    color: "#000000",
    marginBottom: 2,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  detailSubTitle: {
    fontSize: 12,
    color: "#8B8B8B",
    fontFamily: "Pretendard Regular",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  headerIcon: {
    width: 25,
    height: 23,
  },
});

export default BeverageItem;
