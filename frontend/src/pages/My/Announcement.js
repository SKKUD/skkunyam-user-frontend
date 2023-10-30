import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MyHeader from "../../components/My/MyHeader";
import { useState } from "react";
import { announcements } from "../../components/My/dummy";

const Announcement = ({ navigation }) => {
  const [articles, setArticles] = useState(announcements);

  return (
    <View style={styles.container}>
      <MyHeader />
      <View style={styles.body}>
        <Text style={styles.title}>공지사항 · 이벤트</Text>
        {articles.map((article, index) => (
          <TouchableOpacity
            key={index}
            style={styles.article}
            activeOpacity={0.8}
            onPress={() => {
              console.log(article);
              navigation.navigate("AnnouncementDetail", { article: article });
            }}
          >
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleDate}>{article.createdAt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFBE5",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  body: {},
  title: {
    width: 350,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
    color: "#4E4E4E",
    marginBottom: 24,
  },
  article: {
    width: 350,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    marginBottom: 16,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222222",
  },
  articleDate: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#838383",
    marginTop: 4,
  },
});

export default Announcement;
