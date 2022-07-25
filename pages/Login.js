import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { IBanner } from "../assets/ilustration";
import Button from "../components/Button";
import Line from "../components/Line";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={IBanner} />
      <Text style={styles.TitleBold}>Login Whatshy</Text>
      <Text style={styles.Title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        maecenas pharetra augue cras quam. Auctor libero dictum pharetra proin
        quis purus nisl habitasse eu.
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginVertical: 20,
        }}>
        <Button title={"Google"} type='Google' />
        <View
          style={{
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
            position: "relative",
          }}>
          <Line />
          <Text style={{ paddingHorizontal: 10, color: "#00D7B9" }}>Atau</Text>
          <Line />
        </View>
        <Button title={"Facebook"} />
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: "#00D7B9",
              textDecorationLine: "underline",
              bottom: 0,
              fontFamily: "Poppins_300Light",
            }}>
            Another Way to login ?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  TitleBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    marginVertical: 5,
  },
  Title: {
    fontFamily: "Poppins_300Light",
    textAlign: "justify",
  },
});
