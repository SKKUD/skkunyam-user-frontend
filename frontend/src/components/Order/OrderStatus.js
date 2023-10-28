import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const orderStatuses = ["접수", "준비중", "완료"];

const OrderStatus = ({ currentStatus }) => {
  const [circles, setCircles] = useState([
    orderStatuses.map((status, index) => {
      const circleStyle = [styles.itemCircle];
      const textStyle = [styles.itemText];
      if (index <= currentStatus) {
        circleStyle.push(styles.itemcircleActive);
        textStyle.push(styles.itemTextActive);
      }
      return (
        <View key={index} style={styles.itemContainer}>
          <View style={circleStyle} />
          <Text style={textStyle}>{status}</Text>
        </View>
      );
    }),
  ]);

  const active = { backgroundColor: "#FFCD4D" };
  const [barStyle, setBarStyle] = useState([
    [styles.bar, styles.bar1],
    [styles.bar, styles.bar2],
  ]);

  useEffect(() => {
    setCircles(
      orderStatuses.map((status, index) => {
        const circleStyle = [styles.itemCircle];
        const textStyle = [styles.itemText];
        if (index <= currentStatus) {
          circleStyle.push(styles.itemcircleActive);
          textStyle.push(styles.itemTextActive);
        }
        return (
          <View key={index} style={styles.itemContainer}>
            <View style={circleStyle} />
            <Text style={textStyle}>{status}</Text>
          </View>
        );
      })
    );

    const tempBarStyle = [
      [styles.bar, styles.bar1],
      [styles.bar, styles.bar2],
    ];
    if (currentStatus >= 1) {
      tempBarStyle[0].push(active);
    }
    if (currentStatus >= 2) {
      tempBarStyle[1].push(active);
    }
    setBarStyle(tempBarStyle);
  }, [currentStatus]);

  return (
    <View style={styles.container}>
      <View style={barStyle[0]} />
      <View style={barStyle[1]} />
      {circles}
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
  itemText: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "bold",
    color: "#B1B1B1",
  },
  itemTextActive: {
    color: "#757575",
  },
  bar: {
    position: "absolute",
    transform: [{ translateX: -50 }, { translateY: -2.5 }],
    top: "25%",
    width: 90,
    height: 5,
    backgroundColor: "#D9D9D9",
  },
  bar1: {
    left: "30%",
  },
  bar2: {
    left: "75%",
  },
});

export default OrderStatus;
