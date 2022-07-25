import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
const Button = ({ title, type }) => {
  return (
    <TouchableOpacity style={styles.container(type)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    width: 300,
    backgroundColor: type === "Google" ? "#C4C4C4" : "#407BFF",
    paddingVertical: 10,
    borderRadius: 16,
  }),
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins_500Medium",
  },
});
