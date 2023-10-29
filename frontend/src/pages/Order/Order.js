import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OrderHeader from "../../components/Order/OrderHeader";
import RealtimeOrder from "../../components/Order/RealtimeOrder";
import { orderList, orders } from "../../components/Order/dummy";
import { useState } from "react";
import OrderListCard from "../../components/Order/OrderListCard";

const Order = ({ navigation }) => {
  const [_orders, setOrders] = useState(orders);
  const [lastOrder, setLastOrder] = useState(orderList);
  const [startMonth, setStartMonth] = useState("2023년 9월");
  const [endMonth, setEndMonth] = useState("2023년 10월");

  const onStartButtonPress = () => {
    console.log("start button pressed");
  };

  const onEndButtonPress = () => {
    console.log("end button pressed");
  };

  return (
    <View style={styles.container}>
      <OrderHeader />
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        {_orders.length != 0 && <RealtimeOrder orders={_orders} />}
        <View style={styles.orderList}>
          <View style={styles.orderListHeader}>
            <Text style={styles.orderListHeaderTitle}>주문 내역</Text>
            <Text style={styles.orderListHeaderSubtitle}>
              내가 주문했던 메뉴와 가게에요.
            </Text>
          </View>
          <View style={styles.orderListBody}>
            <View style={styles.bodyHeader}>
              <Text style={styles.bodyHeaderTitle}>조회 기간</Text>
              <View style={styles.bodyHeaderDate}>
                <TouchableOpacity onPress={onStartButtonPress}>
                  <View style={styles.bodyHeaderDateItem}>
                    <Text style={styles.bodyHeaderDateItemText}>
                      2023년 9월
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.bodyHeaderDateText}>~</Text>
                <TouchableOpacity onPress={onEndButtonPress}>
                  <View style={styles.bodyHeaderDateItem}>
                    <Text style={styles.bodyHeaderDateItemText}>
                      2023년 10월
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bodyContent}>
              {orderList.map((order, index) => (
                <OrderListCard key={index} order={order} />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  orderList: {
    width: 350,
    marginLeft: 20,
    marginTop: 30,
  },
  orderListHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  orderListHeaderTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222222",
  },
  orderListHeaderSubtitle: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#8B8B8B",
    marginTop: 8,
  },
  orderListBody: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bodyHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bodyHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222222",
  },
  bodyHeaderDate: {
    width: 275,
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyHeaderDateItem: {
    width: 120,
    height: 40,
    borderRadius: 32,
    backgroundColor: "#FFE769",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyHeaderDateItemText: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#555555",
  },
  bodyHeaderDateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555555",
  },
  bodyContent: {
    width: Dimensions.get("window").width,
    marginTop: 22,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
  },
  footer: {
    height: 150,
    width: "100%",
  },
});

export default Order;
