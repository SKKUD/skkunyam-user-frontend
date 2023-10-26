import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 서비스명 */}
      <View style={styles.serviceName}>
        <Text style={{ fontWeight: 900, color: "#8B8B8B", fontSize: 15 }}>
          Service Name
        </Text>
      </View>
      {/* 로고 */}
      <View style={styles.logo}></View>

      {/* 가이드 */}
      <View style={styles.guide}>
        <Text style={styles.boldText}>
          로그인하고{"\n"}학식을 바로 주문하세요!
        </Text>
        <Text style={styles.regularText}>성균관대학교의 학식을 빠르게!</Text>
      </View>

      {/* 로그인 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.kakao]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>카카오 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.google]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.buttonText, styles.googleText]}>
            구글 로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.apple]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>애플계정 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUpText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  serviceName: {
    flex: 2,
    justifyContent: "center",
  },
  logo: {
    height: "25%",
    maxHeight: height * 0.25,
    aspectRatio: 1,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    flex: 3,
  },
  guide: {
    color: "#8B8B8B",
    fontSize: 15,
    flex: 2,
    justifyContent: "center",
    paddingVertical: 20,
  },
  boldText: {
    fontSize: 22,
    color: "#4B4B4B",
    textAlign: "center",
    fontWeight: "bold",
  },
  regularText: {
    fontSize: 15,
    color: "#8B8B8B",
    textAlign: "center",
    fontWeight: "normal",
    paddingTop: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 6,
  },
  button: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    marginBottom: 8,
    paddingVertical: 13,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  kakao: {
    backgroundColor: "#FFCD4D",
  },
  google: {
    backgroundColor: "#EEEEEE",
  },
  googleText: {
    color: "#666666",
  },
  apple: {
    backgroundColor: "#444444",
  },
  signUpText: {
    color: "#8B8B8B",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 24,
  },
});

export default LoginScreen;
