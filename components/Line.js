import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Line = ({ width }) => {
  return <View style={styles.Line(width)} />;
};

export default Line;

const styles = StyleSheet.create({
  Line: (width) => ({
    width: width,
    height: 1,
    backgroundColor: "#00D7B9",
    marginHorizontal: 30,
  }),
});
