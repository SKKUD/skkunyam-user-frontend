import { StyleSheet, View, Text } from "react-native";
import OrderCard from "./OrderCard";

const RealtimeOrder = ({ orders }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>실시간 주문 현황</Text>
        <Text style={styles.headerSubtitle}>
          현재 {orders.length}건의 주문이 진행중이에요!
        </Text>
      </View>
      <View style={styles.Body}>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RealtimeOrder;
