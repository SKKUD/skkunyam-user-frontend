import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const MyHeader = ({ title }) => {
  const navigation = useNavigation();
  const onBackClick = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.Wrapper}>
        <TouchableOpacity onPress={onBackClick}>
          <Image
            style={styles.headerLeftArrow}
            source={require("../../../assets/icons/leftIcon.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Wrapper}>
        <Text style={styles.title}>{title ?? title}</Text>
      </View>
      <View style={styles.dummy} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Wrapper: {},
  headerLeftArrow: {
    width: 13,
    height: 24,
    marginLeft: 20,
  },
  dummy: {
    width: 13,
    height: 24,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Pretendard Bold",
    color: "#222222",
  },
});

export default MyHeader;
