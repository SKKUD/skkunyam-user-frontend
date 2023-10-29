import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const MyHeader = () => {
  const navigation = useNavigation();
  const onBackClick = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackClick}>
        <Image
          style={styles.headerLeftArrow}
          source={require("../../../assets/icons/leftIcon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    marginTop: Constants.statusBarHeight + (Platform.OS === "ios" ? 10 : 40),
  },
  headerLeftArrow: {
    width: 13,
    height: 24,
    marginLeft: 20,
  },
});

export default MyHeader;
