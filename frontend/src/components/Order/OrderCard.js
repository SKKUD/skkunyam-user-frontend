import { Image, StyleSheet, Text, View } from "react-native";
import OrderStatus from "./OrderStatus";

const OrderCard = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}></Text>
        <Image
          source={require("../../../assets/icons/rightIcon.png")}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.body}>
        <OrderStatus currentStatus={order.status} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderCard;
