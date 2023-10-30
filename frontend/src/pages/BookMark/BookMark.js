import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants"; // Constants로 불러온다.
import MarketPage from "./MarketPage";
import BeveragePage from "./BeveragePage";
import MenuPage from "./MenuPage";

const BookMark = () => {
  const user = {
    name: "스꾸디",
  };

  const [selectedSection, setSelectedSection] = useState(0);
  const onSectionPress = (section) => {
    setSelectedSection(section);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>북마크</Text>
        <Text style={styles.headerSubtitle}>
          {user.name} 님의 즐겨찾기 목록이에요!
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <TouchableOpacity
            style={[
              styles.bodyHeaderButton,
              selectedSection == 0 && styles.buttonSelected,
            ]}
            onPress={() => onSectionPress(0)}
          >
            <Text
              style={[
                styles.bodyHeaderButtonText,
                selectedSection == 0 && styles.bodyHeaderButtonTextSelected,
              ]}
            >
              매장
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bodyHeaderButton,
              selectedSection == 1 && styles.buttonSelected,
            ]}
            onPress={() => onSectionPress(1)}
          >
            <Text
              style={[
                styles.bodyHeaderButtonText,
                selectedSection == 1 && styles.bodyHeaderButtonTextSelected,
              ]}
            >
              음료
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bodyHeaderButton,
              selectedSection == 2 && styles.buttonSelected,
            ]}
            onPress={() => onSectionPress(2)}
          >
            <Text
              style={[
                styles.bodyHeaderButtonText,
                selectedSection == 2 && styles.bodyHeaderButtonTextSelected,
              ]}
            >
              메뉴
            </Text>
          </TouchableOpacity>
        </View>
        {selectedSection == 0 && <MarketPage />}
        {selectedSection == 1 && <BeveragePage />}
        {selectedSection == 2 && <MenuPage />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop:
      Constants.statusBarHeight + (Platform.OS === "android" ? 40 : 10),
    backgroundColor: "#fff",
  },
  header: {
    width: 350,
    marginTop: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#9C9C9C",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginTop: 32,
  },
  bodyHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  bodyHeaderButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 42,
  },
  buttonSelected: {
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  bodyHeaderButtonText: {
    color: "#9C9C9C",
    fontSize: 16,
  },
  bodyHeaderButtonTextSelected: {
    color: "#000000",
  },
});

export default BookMark;
