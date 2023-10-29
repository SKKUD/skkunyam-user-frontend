import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const My = ({ navigation }) => {
  user = {
    name: "스꾸디",
    avatar: require("../../../assets/images/defaultAvatar.png"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusbar} />
      <ScrollView
        style={styles.body}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>마이페이지</Text>
          <View style={styles.headerUserInfo}>
            <View style={styles.userInfoLeft}>
              <Image source={user.avatar} style={styles.userAvatar} />
              <Text style={styles.userName}>{user.name}</Text>
            </View>
            <TouchableOpacity style={styles.userInfoRight}>
              <Text style={styles.edit}>수정하기</Text>
              <Image
                style={styles.headerRightArrow}
                source={require("../../../assets/icons/rightIcon2.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gap} />
        <View style={styles.bodyGroup}>
          {/* 내 카드 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.itemText}>내 카드</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
          {/* 내 포인트 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.itemText}>내 포인트</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
          {/* 내 스탬프 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.itemText}>내 스탬프</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.gap} />
        <View style={styles.bodyGroup}>
          {/* 홈 화면 편집 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {
              navigation.navigate("EditHome");
            }}
          >
            <Text style={styles.itemText}>홈 화면 편집</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyGroup}>
          {/* 알림 설정 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.itemText}>알림 설정</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
          {/* 공지사항 · 이벤트 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.itemText}>공지사항 · 이벤트</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.gap} />

        <View style={styles.bodyGroup}>
          {/* 로그아웃 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.itemText}>로그아웃</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.gap} />
        <View style={styles.bodyGroup}>
          {/* 탈퇴하기 */}
          <TouchableOpacity
            style={styles.bodyItem}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.itemText}>탈퇴하기</Text>
            <Image
              style={styles.bodyRightArrow}
              source={require("../../../assets/icons/rightIcon2.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbar: {
    width: Dimensions.get("window").width,
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    marginTop: 24 + (Platform.OS === "ios" ? 10 : 40),
    width: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: (Dimensions.get("window").width - 350) / 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  headerUserInfo: {
    width: "100%",
    marginTop: 28,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userInfoLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 46,
    height: 46,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  userInfoRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  edit: {
    color: "#8B8B8B",
    fontSize: 12,
  },
  headerRightArrow: {
    width: 19,
    height: 19,
  },
  body: {
    width: Dimensions.get("window").width,
  },
  gap: {
    height: 12,
    backgroundColor: "#E9E9E9",
  },
  bodyGroup: {},
  bodyItem: {
    height: 60,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#4E4E4E",
  },
  bodyRightArrow: {
    width: 8,
    height: 14,
  },
});

export default My;
