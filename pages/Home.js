import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconApp } from "../assets/icons";
import { IBanner } from "../assets/ilustration";

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}>
        <Image source={IconApp} />
        <Text style={styles.TitlePage}>Whatshy</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={IBanner} />
        <Text style={styles.Titlehome}>Mudah dengan Chat dan Broadcast</Text>
        <Text style={styles.subtitlehome}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          maecenas pharetra augue cras quam. Auctor libero dictum pharetra proin
          quis purus nisl habitasse eu.
        </Text>
      </View>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
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
  Titlehome: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 28,
    marginVertical: 6,
  },
  subtitlehome: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 10,
  },
  buttons: {
    borderColor: "#00B89F",
    borderWidth: 1,
    color: "#00B89F",
    borderRadius: 16,
    width: "50%",
  },
  text: {
    textAlign: "center",
    paddingVertical: 7,
    paddingHorizontal: 14,
    color: "#00B89F",
    fontFamily: "Poppins_500Medium",
  },
});
