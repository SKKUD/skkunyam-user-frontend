import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OrderStatus from "./OrderStatus";

const OrderCard = ({ order }) => {
  const onCafePress = () => {
    console.log("cafe pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCafePress}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {order.restaurant.building} {order.restaurant.name}{" "}
            {order.restaurant.category}
          </Text>
          <Image
            source={require("../../../assets/icons/rightIcon.png")}
            style={styles.headerImage}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.body}>
        <OrderStatus currentStatus={order.status} />
        <View style={styles.bodyDetail}>
          <View style={styles.detailItem}>
            <Text style={styles.detailItemTitle}>대기번호</Text>
            <Text style={styles.detailItemText}>{order.watingNo}</Text>
          </View>
          <View style={styles.detailItemLine} />
          <View style={styles.detailItem}>
            <Text style={styles.detailItemTitle}>완료번호</Text>
            <Text style={styles.detailItemText}>{order.completeNo}</Text>
          </View>
          <View style={styles.detailItemLine} />
          <View style={styles.detailItem}>
            <Text style={styles.detailItemTitle}>대기시간</Text>
            <Text style={styles.detailItemText}>{order.watingTime}m</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 310,
    height: 190,
    backgroundColor: "#FFFBE5",
    borderRadius: 8,
    elevation: 5, // 안드로이드에서 그림자 효과를 위한 속성
    shadowColor: "#000", // iOS에서 그림자 색상을 지정
    shadowOffset: { width: 0, height: 4 }, // iOS 그림자의 오프셋
    shadowOpacity: 0.1, // iOS 그림자의 투명도
    shadowRadius: 4, // iOS 그림자의 반경
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 22,
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "Pretendard Bold",
    color: "#222222",
    textAlign: "center",
  },
  headerImage: {
    marginLeft: 4,
  },
  body: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bodyDetail: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFE769",
    width: 280,
    height: 65,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  detailItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  detailItemLine: {
    width: 1,
    height: 40,
    backgroundColor: "#D0AB49",
  },
  detailItemTitle: {
    fontSize: 12,
    fontFamily: "Pretendard Bold",
    color: "#666666",
  },
  detailItemText: {
    marginTop: 4,
    fontSize: 20,
    fontFamily: "Pretendard Bold",
    color: "#725827",
  },
});

export default OrderCard;
