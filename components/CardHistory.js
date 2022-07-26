import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardHistory = ({ users, data, dates }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerCard}>
          <Text>{users}</Text>
          <Text>{dates}</Text>
        </View>
        <Text style={styles.cardbody}>{data}</Text>
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    elevation: 5,
    marginBottom: 10,
  },
  cardbody: {
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
});
