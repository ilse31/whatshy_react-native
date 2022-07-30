import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const FAB = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>+</Text>
    </Pressable>
  );
};

export default FAB;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 10,
    right: 40,
    backgroundColor: "#157347",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
