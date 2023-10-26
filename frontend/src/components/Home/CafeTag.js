import { View } from "react-native";

const CafeTag = ({ storeName, buildingName }) => {
  return (
    <View>
      <View style={styles.Icon} />
      <Text>{storeName}</Text>
      <Text>{buildingName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
  Icon: {
    width: 16,
    height: 16,
  },
});

export default CafeTag;
