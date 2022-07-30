import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Line from "../components/Line";
import CardHistory from "../components/CardHistory";
import { StatusBar } from "expo-status-bar";
const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.headers}>
          <Text style={styles.titles}>History</Text>
        </View>
        {/* Header ends here */}
        {/* SUbHeader */}
        <View
          style={{
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
            position: "relative",
          }}>
          <Line width={"30%"} />
          <Text style={{ color: "#00D7B9" }}>{new Date().getFullYear()}</Text>
          <Line width={"30%"} />
        </View>
        {/* Card Content */}
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headers: {
    marginTop: 20,
    paddingLeft: 20,
    justifyContent: "center",
  },
  titles: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
