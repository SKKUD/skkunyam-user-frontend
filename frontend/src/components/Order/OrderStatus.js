import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const OrderStatus = ({ currentStatus }) => {
  const [status, setStatus] = useState([false, false, false]);

  useEffect(() => {
    const tmpStatus = [false, false, false];
    for (let i = 0; i <= currentStatus; i++) {
      tmpStatus[i] = true;
    }
    setStatus(tmpStatus);
  }, [currentStatus]);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemCircle} />
        <Text style={styles.itemText}>접수</Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemCircle} />
        <Text style={styles.itemText}>준비중</Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemCircle} />
        <Text style={styles.itemText}>완료</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
  },
  itemCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
  },
  itemcircleActive: {
    backgroundColor: "#FFCD4D",
  },
});

export default OrderStatus;
