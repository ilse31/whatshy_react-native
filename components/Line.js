import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Line = () => {
  return <View style={styles.Line} />;
};

export default Line;

const styles = StyleSheet.create({
  Line: {
    width: "25%",
    height: 1,
    backgroundColor: "#00D7B9",
    marginHorizontal: 30,
  },
});
