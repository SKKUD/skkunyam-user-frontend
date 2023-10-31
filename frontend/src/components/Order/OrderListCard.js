import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OrderListCard = ({ order }) => {
  const { date, day, restaurant, menu } = order;

  const onCafePress = () => {
    console.log("cafe pressed");
  };
  const onMenuPress = () => {
    console.log("menu pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {order.date} ({order.day})
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyLeft}>
          <Image source={restaurant.image} style={styles.restaurantImage} />
          <View style={styles.orderDetail}>
            <TouchableOpacity onPress={onCafePress}>
              <View style={styles.orderDetailHeader}>
                <Text style={styles.orderDetailTitle}>
                  {restaurant.building} {restaurant.name} {restaurant.type}
                </Text>
                <Image
                  source={require("../../../assets/icons/rightIcon.png")}
                  style={styles.orderDetailImage}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.orderDetailBody}>
              <Text style={styles.orderDetailBodyText}>{menu.name}</Text>
              <Text style={styles.orderDetailBodyText}>{menu.price}원</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyRight}>
          <TouchableOpacity onPress={onMenuPress}>
            <Text style={styles.bodyRightText}>메뉴</Text>
            <Text style={styles.bodyRightText}>담기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 125,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTitle: {
    fontSize: 14,
    fontFamily: "Pretendard Regular",
    color: "#8B8B8B",
  },
  body: {
    width: "100%",
    height: 75,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyLeft: {
    width: 240,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  restaurantImage: {
    width: 66,
    height: 66,
    borderRadius: 10,
    resizeMode: "cover",
  },
  orderDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  orderDetailHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderDetailTitle: {
    fontSize: 16,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  orderDetailImage: {
    width: 19,
    height: 19,
    resizeMode: "cover",
  },
  orderDetailBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 4,
  },
  orderDetailBodyText: {
    fontSize: 14,
    fontFamily: "Pretendard Regular",
    color: "#464646",
  },
  bodyRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyRightText: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: "Pretendard Bold",
    color: "#725827",
  },
});

export default OrderListCard;
