import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  DeviceEventEmitter,
  Platform,
} from "react-native";
import OrderCard from "./OrderCard";
import { useLayoutEffect, useRef, useState } from "react";

const itemWidth = 340;

const RealtimeOrder = ({ orders }) => {
  const scrollRef = useRef();
  const _androidScrollRef = useRef();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const handleScrollBeginDrag = (e) => {
    setStart(e.nativeEvent.contentOffset.x);
  };

  const handleScrollEndDrag = (e) => {
    setEnd(e.nativeEvent.contentOffset.x);
  };

  useLayoutEffect(() => {
    const scrollFunc = () => {
      if (start === end) {
        return;
      } else if (start < end) {
        const nextScrollX = itemWidth * Math.ceil(start / itemWidth + 1);
        scrollRef.current.scrollTo({ x: nextScrollX, y: 0, animated: true });
      } else {
        const nextScrollX = itemWidth * Math.floor(start / itemWidth - 1);
        scrollRef.current.scrollTo({ x: nextScrollX, y: 0, animated: true });
      }
    };
    scrollFunc();
  }, [end]);

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>실시간 주문 현황</Text>
        <Text style={styles.headerSubtitle}>
          현재 {orders.length}건의 주문이 진행중이에요!
        </Text>
      </View>
      {/* 캐로셀 */}
      <View style={styles.body}>
        <ScrollView
          ref={Platform.OS === "ios" ? scrollRef : _androidScrollRef}
          onScrollBeginDrag={
            Platform.OS === "ios" ? handleScrollBeginDrag : null
          }
          onScrollEndDrag={Platform.OS === "ios" ? handleScrollEndDrag : null}
          scrollEventThrottle={8}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.cardWrapperdummy, styles.scrollDummy]} />
          {orders.map((order) => (
            <View key={order.id} style={styles.cardWrapper}>
              <View style={styles.cardWrapperdummy} />
              <OrderCard order={order} />
              <View style={styles.cardWrapperdummy} />
            </View>
          ))}
          <View style={[styles.cardWrapperdummy, styles.scrollDummy]} />
        </ScrollView>
      </View>
      {/* 홍보? */}
      <View style={styles.footer}>
        <ImageBackground
          style={styles.footerImage}
          source={require("../../../assets/images/snackEvent.png")}
        ></ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 375,
    alignItems: "center",
  },
  header: {
    width: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222222",
  },
  headerSubtitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 18,
    color: "#9C9C9C",
  },
  body: {
    width: 390,
    marginTop: 20,
    height: 200,
    display: "flex",
    flexDirection: "row",
  },
  cardWrapper: {
    width: itemWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardWrapperdummy: {
    width: 15,
    // backgroundColor: "#9c9c9c",
  },
  scrollDummy: {
    width: 25,
    // backgroundColor: "blue",
  },
  footer: {
    marginTop: 30,
    width: 350,
    height: 80,
  },
  footerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default RealtimeOrder;
