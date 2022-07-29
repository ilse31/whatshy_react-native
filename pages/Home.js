import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconApp } from "../assets/icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          left: -20,
        }}>
        <Image source={IconApp} />
        <Text style={styles.TitlePage}>Whatshy</Text>
      </View>
      <View>
        <Text>Home</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 35,
  },
  TitlePage: {
    fontFamily: "Poppins_100ExtraLight",
    fontSize: 36,
    marginLeft: 15,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
