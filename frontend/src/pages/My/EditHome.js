import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyHeader from "../../components/My/MyHeader";
import { useEffect, useState } from "react";
import DraggableList from "../../components/My/draggableList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const EditHome = () => {
  const navigation = useNavigation();
  const [shown, setShown] = useState([]);
  const [hidden, setHidden] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = JSON.parse(await AsyncStorage.getItem("homeItem"));

      if (json?.shown && json?.shown.length > 0) {
        setShown(json.shown);
      } else {
        setShown([
          { text: "바로 주문하기", key: 1 },
          { text: "오늘의 메뉴", key: 2 },
          { text: "많이 이용한 매장", key: 3 },
          { text: "포인트", key: 4 },
        ]);
      }

      if (json?.hidden && json?.hidden.length > 0) {
        setHidden(json.hidden);
      } else {
        setHidden([
          { text: "내 근처에 있는 매장", key: 5 },
          { text: "식권함", key: 6 },
        ]);
      }
    };

    fetchData();
  }, []);

  const onShownPress = (item) => {
    setShown(shown.filter((i) => i != item));
    setHidden([...hidden, item]);
  };

  const onHiddenPress = (item) => {
    setHidden(hidden.filter((i) => i != item));
    setShown([...shown, item]);
  };

  const onBackClick = async () => {
    const parsed = { shown: shown, hidden: hidden };

    try {
      await AsyncStorage.setItem("homeItem", JSON.stringify(parsed));
      navigation.goBack();
    } catch (error) {
      console.error("Error saving data to AsyncStorage: ", error);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <View style={styles.container}>
      <MyHeader onBackClick={onBackClick} />
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>홈 화면 편집</Text>
          <Text style={styles.subtitle}>순서를 바꾸거나 숨길 수 있어요!</Text>
        </View>
        <View style={styles.shown}>
          <DraggableList
            setShown={setShown}
            shown={shown}
            onShownPress={onShownPress}
          />
        </View>
        <View style={styles.gap} />
        <View style={styles.hidden}>
          <View style={styles.groupHeader}>
            <Text style={styles.groupHeaderText}>숨긴 항목</Text>
          </View>
          {hidden.map((item) => (
            <View style={styles.Item} key={item.key}>
              <View style={styles.ItemLeft}>
                <Text style={styles.ItemText}>{item?.text}</Text>
              </View>
              <View style={styles.ItemRight}>
                <TouchableOpacity onPress={() => onHiddenPress(item)}>
                  <Text style={styles.ItemSubText}>보이기</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bodyHeader: {
    width: 350,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Pretendard SemiBold",
    color: "#9C9C9C",
  },
  shown: {
    marginTop: 24,
    width: Dimensions.get("window").width,

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "9d9d9d",
  },
  hidden: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  groupHeader: {
    marginTop: 28,
    marginBottom: 24,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupHeaderText: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  Item: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ItemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ItemText: {
    fontSize: 18,
    fontFamily: "Pretendard Medium",
    color: "#4E4E4E",
  },
  ItemRight: {
    width: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  moveItemIcon: {
    width: 20,
    height: 14,
  },
  ItemSubText: {
    fontSize: 16,
    fontFamily: "Pretendard Medium",
    color: "#9D9D9D",
  },
  gap: {
    width: Dimensions.get("window").width,
    height: 12,
    backgroundColor: "#E9E9E9",
  },
});

export default EditHome;
