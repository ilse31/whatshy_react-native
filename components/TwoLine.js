import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TwoLine = ({ title, width, font }) => {
  return (
    <View
      style={{
        height: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        position: "relative",
      }}>
      <View style={styles.Line(width)} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.Line(width)} />
    </View>
  );
};

const styles = StyleSheet.create({
  Line: (width) => ({
    width: width,
    height: 1,
    backgroundColor: "#00D7B9",
    marginHorizontal: 30,
  }),
  title: {
    fontSize: 12,
    paddingHorizontal: 10,
    color: "#00D7B9",
    fontFamily: "Poppins_600SemiBold",
  },
});

export default TwoLine;
