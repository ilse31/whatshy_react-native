import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LogBox,
} from "react-native";
import React, { useEffect } from "react";
import { IconApp } from "../assets/icons";
import { IBanner } from "../assets/ilustration";
import ActionButton from "react-native-action-button-warnings-fixed";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
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
      </View>
      <View style={{ alignItems: "flex-start" }}>
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
      <ActionButton buttonColor='#00B89F'>
        <ActionButton.Item
          buttonColor='#157347'
          title='Personal Messages'
          onPress={() => navigation.navigate("PersonalMessage")}>
          <MaterialIcons name='chat' size={24} color='white' />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor='#157347'
          title='Broadcast'
          onPress={() => navigation.navigate("Broadcast")}>
          <MaterialCommunityIcons name='broadcast' size={24} color='white' />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  },
  subtitlehome: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    textAlign: "left",
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
