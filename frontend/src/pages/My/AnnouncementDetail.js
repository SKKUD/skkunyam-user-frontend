import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyHeader from "../../components/My/MyHeader";

const AnnouncementDetail = ({ route }) => {
  const { article } = route.params;
  return (
    <View style={styles.container}>
      <MyHeader title={"공지사항 · 이벤트"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Text style={styles.bodyTitle}>{article?.title}</Text>
            <Text style={styles.bodyDate}>{article?.createdAt}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.bodyContent}>
            <Text style={styles.bodyContentText}>{article?.content}</Text>
          </View>
        </View>
      </ScrollView>
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
  body: {
    // marginTop: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyHeader: {
    width: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bodyTitle: {
    fontSize: 16,
    fontFamily: "Pretendard SemiBold",
    color: "#222222",
  },
  bodyDate: {
    fontSize: 12,
    fontFamily: "Pretendard Regular",
    color: "#838383",
    marginTop: 8,
  },
  line: {
    marginTop: 24,
    width: Dimensions.get("window").width,
    backgroundColor: "#D9D9D9",
    height: 1,
  },

  bodyContent: {
    width: 350,
    marginTop: 24,
    fontSize: 14,
    fontFamily: "Pretendard Regular",
  },
});

export default AnnouncementDetail;
