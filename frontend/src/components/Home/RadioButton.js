import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RadioButton = ({ label, checked, onPressed }) => {
  const buttonStyles = [styles.radioButton];
  const textStyles = [styles.radioText];

  useEffect(() => {
    buttonStyles.push(checked ? styles.ButtonSelected : "");
    textStyles.push(checked ? styles.TextSelected : "");
  }, [checked]);

  if (checked) {
    buttonStyles.push(styles.ButtonSelected);
    textStyles.push(styles.TextSelected);
  }
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPressed}>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    width: 86,
    height: 31,
    backgroundColor: "#EAEAEA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    marginRight: 12,
  },
  ButtonSelected: {
    backgroundColor: "#FFCD4D",
  },
  radioText: {
    color: "#9C9C9C",
    fontSize: 16,
    fontWeight: "bold",
  },
  TextSelected: {
    color: "#555555",
  },
});

export default RadioButton;
