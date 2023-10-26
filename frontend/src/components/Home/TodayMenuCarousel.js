import React, { useRef, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { menuItems } from "./dummy";
import MenuCard from "./MenuCard";

const TodayMenuCarousel = () => {
  const itemWidth = 350; // 각 아이템의 너비
  const scrollViewRef = useRef();
  const currentOffset = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollViewRef.current.scrollTo({
        x: currentOffset.current + itemWidth,
        animated: true,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event) => {
    currentOffset.current = event.nativeEvent.contentOffset.x;
    const itemWidth = 350; // 각 아이템의 너비

    // 오른쪽으로 이동
    if (currentOffset.current >= (menuItems.length + 1) * itemWidth) {
      scrollViewRef.current.scrollTo({ x: itemWidth, animated: false });
    }
    // 왼쪽으로 이동
    else if (currentOffset.current <= 0) {
      scrollViewRef.current.scrollTo({
        x: menuItems.length * itemWidth,
        animated: false,
      });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {menuItems.map((item, index) => (
        <MenuCard
          key={index}
          menu={item.menu}
          cost={item.cost}
          restaurant={item.restaurant}
          imgSource={item.imgSource}
        />
      ))}
      {/* 아이템들을 중복하여 배치 */}
      {menuItems.map((item, index) => (
        <MenuCard
          key={index + menuItems.length}
          menu={item.menu}
          cost={item.cost}
          restaurant={item.restaurant}
          imgSource={item.imgSource}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
  },
});

export default TodayMenuCarousel;
