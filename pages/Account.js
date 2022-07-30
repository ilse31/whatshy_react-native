import { Image, StyleSheet, Text, View } from "react-native";
import circleIL from "../assets/ilustration/circleIL.png";
import IconLogOut from "../assets/icons/logOutIcon.png";
import React from "react";
import Profiles from "../assets/ilustration/Profile.png";
const Account = () => {
  return (
    <View style={styles.container}>
      <Image
        source={circleIL}
        style={{ position: "absolute", alignSelf: "center" }}
      />
      <View style={styles.HeaderTop}>
        <Text style={styles.Textheader}>Profile</Text>
        <Image source={IconLogOut} />
      </View>
      <View style={{ padding: 20 }}>
        <View
          style={{
            borderRadius: 100,
            alignItems: "center",
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: "#00D7B9",
              borderRadius: 100,
            }}>
            <Image source={Profiles} />
          </View>
          <Text style={styles.titleName}>Ilham Prasetya</Text>
          <View
            style={{
              backgroundColor: "rgba(0, 215, 185, 0.4)",
              marginTop: 10,
              borderRadius: 16,
              width: "100%",
            }}>
            <View style={{ padding: 20 }}>
              <Text
                style={{
                  color: "black",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 12,
                }}>
                Email
              </Text>
              <Text
                style={{
                  color: "black",
                  fontFamily: "Poppins_700Bold",
                  fontSize: 14,
                }}>
                ilhamprazsetyo33@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Textheader: {
    fontFamily: "Poppins_700Bold",
    color: "white",
    fontSize: 24,
  },
  HeaderTop: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleName: {
    fontFamily: "Poppins_700Bold",
    color: "#3B4641",
    fontSize: 24,
  },
});
