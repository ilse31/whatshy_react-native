import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  LogBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import Line from "../components/Line";
import CardHistory from "../components/CardHistory";
import axios from "axios";
import TwoLine from "../components/TwoLine";

const History = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.headers}>
          <Text style={styles.titles}>History</Text>
        </View>
        {/* Header ends here */}
        {/* SUbHeader */}
        <TwoLine title={new Date().getFullYear()} width={"30%"} />
      </ScrollView>
      <FlatList
        style={{ marginTop: 10 }}
        data={data}
        renderItem={({ item }) => (
          <CardHistory users={item.name} data={item.email} />
        )}
      />
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
    marginTop: 30,
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
