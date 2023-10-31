import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import MyHeader from "../../components/My/MyHeader";
import { useState } from "react";
import { questions } from "../../components/My/dummy";
import QuestionCard from "../../components/My/QuestionCard";

const FrequentQuestion = () => {
  const [value, setValue] = useState("");
  const [_questions, setQuestions] = useState(questions);

  return (
    <View style={styles.container}>
      <MyHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Text style={styles.title}>자주 묻는 질문</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              over
              style={styles.input}
              placeholder="궁금한 내용을 검색해보세요."
              placeholderTextColor="#A8A8A8"
              value={value}
              onChangeText={(text) => setValue(text)}
            />
            <TouchableOpacity>
              <Image
                style={styles.inputIcon}
                source={require("../../../assets/icons/searchIcon2.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.questions}>
            {_questions.map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFBE5",
    height: "100%",
  },
  body: {
    marginTop: 24,
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
  title: {
    fontSize: 24,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
  inputWrapper: {
    marginTop: 24,
    backgroundColor: "#fff",
    width: 350,
    height: 40,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#8B8B8B",
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: 290,
    fontSize: 14,
    fontFamily: "Pretendard SemiBold",
  },
  inputIcon: {
    width: 28,
    height: 28,
  },
  questions: {
    marginTop: 12,
  },
});

export default FrequentQuestion;
