import { StyleSheet, TouchableOpacity, View } from "react-native";

const Toggle = ({ state, onToggle }) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={1}
      style={[styles.container, state && styles.on]}
    >
      <View style={[styles.toggle]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 20,
    borderRadius: 12,
    backgroundColor: "#E6E5E5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 2,
  },
  toggle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#fff",
  },
  on: {
    backgroundColor: "#FFD600",
    justifyContent: "flex-start",
  },
});

export default Toggle;
