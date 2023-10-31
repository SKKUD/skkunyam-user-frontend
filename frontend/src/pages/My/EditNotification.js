import { StyleSheet, Text, View } from "react-native";
import MyHeader from "../../components/My/MyHeader";
import { useEffect, useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";

const initialState = [
  { text: "주문 현황 알림", state: true, key: 1 },
  { text: "이벤트 알림", state: true, key: 2 },
  { text: "매장 · 식당 소식", state: true, key: 3 },
];

const EditNotification = () => {
  const [bodyItems, setBodyItems] = useState(initialState);

  const onToggle = (index) => {
    // console.log(index);
    const newBodyItems = [...bodyItems];
    newBodyItems[index].state = !newBodyItems[index].state;
    setBodyItems(newBodyItems);
  };

  return (
    <View style={styles.container}>
      <MyHeader />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>알림 설정</Text>
        <Text style={styles.headerSubTitle}>
          스꾸냠에서 받을 알림을 선택해요!
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyTitle}>푸시 알림</Text>
        </View>
        {bodyItems.map((item, index) => (
          <View style={styles.bodyItem} key={item.key}>
            <Text style={styles.bodyItemText}>{item.text}</Text>
            <ToggleSwitch
              onToggle={() => onToggle(index)}
              isOn={item.state}
              offColor={"#E6E5E5"}
              onColor={"#FFCD4D"}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: 350,
    paddingTop: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  headerSubTitle: {
    fontSize: 16,
    fontFamily: "Pretendard SemiBold",
    color: "#9C9C9C",
    marginTop: 8,
  },
  body: {
    width: 350,
    marginTop: 40,
  },
  bodyHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bodyTitle: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  bodyItem: {
    marginTop: 24,
    height: 60,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyItemText: {
    fontSize: 18,
    fontFamily: "Pretendard Medium",
    color: "#4E4E4E",
  },
});

export default EditNotification;
