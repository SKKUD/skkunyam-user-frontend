import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuestionCard = ({ question }) => {
  const [isOpened, setIsOpened] = useState(false);

  const onPress = () => {
    setIsOpened(!isOpened);
  };

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <View style={styles.left}>
          <Text style={styles.prefix}>Q</Text>
          <Text style={styles.title}>{question.question}</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={onPress}>
            <Image
              style={styles.arrow}
              source={
                isOpened
                  ? require("../../../assets/icons/upIcon.png")
                  : require("../../../assets/icons/downIcon.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gap} />
      {isOpened && (
        <View style={styles.answer}>
          <Text style={styles.answerText}>{question.answer}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  question: {
    width: 350,
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 20,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  prefix: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
  },
  title: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "medium",
    color: "#222222",
  },
  right: {},
  arrow: {
    width: 16,
    height: 9,
  },
  gap: {
    width: 350,
    height: 4,
    backgroundColor: "#FFFBE5",
  },
  answer: {
    padding: 16,
  },
  answerText: {
    fontSize: 14,
    color: "#545454",
  },
});

export default QuestionCard;
