import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IBanner } from "../assets/ilustration";
import Button from "../components/Button";
import Line from "../components/Line";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  const onClicka = () => {
    navigation.navigate("Home");
    console.log("Click");
  };

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
        <Button
          title={"Google"}
          type='Google'
          press={() => console.log("login")}
        />
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
        <Button title={"Facebook"} press={() => console.log("login")} />
        <TouchableOpacity
          onPressIn={() => navigation.navigate("Home")}
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 20,
          }}>
          <Text
            style={{
              color: "#00D7B9",
              textDecorationLine: "underline",
              fontFamily: "Poppins_300Light",
            }}>
            Another Way to login ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    padding: 35,
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
