import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IBanner } from "../assets/ilustration";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import TwoLine from "../components/TwoLine";
import { StatusBar } from "expo-status-bar";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

const Login = ({ navigation }) => {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "180360695-rf4ntjo851lci31lr8204tcsnqg69tcd.apps.googleusercontent.com",
    expoClientId:
      "180360695-2kf98eqblpfqbt36tmuv6ukb2g1gqe49.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  // async function getUserData() {
  //   let userInfoResponse = await fetch(
  //     "https://www.googleapis.com/userinfo/v2/me",
  //     {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     }
  //   );
  //   userInfoResponse.json().then((data) => {
  //     setUserInfo(data);
  //   });
  // }

  // getUserData();
  // console.log(userInfo);

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
        <Button title={"Google"} type='#C4C4C4' press={() => promptAsync()} />
        <TwoLine title={"Atau"} width={"25%"} />
        <Button
          type={"#407BFF"}
          title={"Facebook"}
          press={() => console.log("login")}
        />
        <TouchableOpacity
          onPressIn={() => navigation.navigate("MainApp")}
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 20,
          }}>
          <StatusBar style='auto' />
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
    top: 20,
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
