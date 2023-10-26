import { ScrollView, StyleSheet, View } from "react-native";
import OrderHeader from "../../components/Order/OrderHeader";
import RealtimeOrder from "../../components/Order/RealtimeOrder";
import { orders } from "../../components/Order/dummy";

const Order = () => {
  const isOrder = true;
  return (
    <>
      <OrderHeader />
      <ScrollView style={styles.container}>
        <RealtimeOrder orders={orders} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Order;
