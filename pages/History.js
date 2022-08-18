import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import CardHistory from "../components/CardHistory";
import TwoLine from "../components/TwoLine";
import AsyncStorage from "@react-native-async-storage/async-storage";

const History = () => {
  const [form, setform] = useState([]);

  const getDataHistory = async () => {
    try {
      const phone = await AsyncStorage.getItem("history");
      if (phone.length > 0) {
        console.log(phone);
        setform(JSON.parse(phone));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataHistory();
  }, []);

  console.log(form);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <StatusBar style='auto' />
        <View style={styles.headers}>
          <Text style={styles.titles}>History</Text>
        </View>
        {/* Header ends here */}
        {/* SUbHeader */}
        <TwoLine title={new Date().getFullYear()} width={"30%"} />
      </ScrollView>
      <FlatList
        data={form}
        renderItem={({ item }) => (
          <CardHistory
            users={`+${item.number}`}
            data={item.text}
            dates={`${new Date(item.createdAt).toDateString()} - ${new Date(
              item.createdAt
            )
              .toTimeString()
              .substring(0, 5)}`}
          />
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
    marginTop: 40,
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
