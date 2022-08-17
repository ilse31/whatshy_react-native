import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { IphoneBook } from "../assets/ilustration";
import Button from "../components/Button";

const PersonalMessages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
          }}>
          Nomor Telpon
        </Text>
        <TextInput
          style={styles.input}
          keyboardType='phone-pad'
          placeholder='Type your message here'
        />
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => navigation.navigate("phonebook")}>
        <Image source={IphoneBook} style={{ marginRight: 10 }} />
        <Text
          style={{
            fontFamily: "Poppins_300Light",
            fontSize: 18,
            color: "#00D7B9",
          }}>
          Phonebook
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "Poppins_300Light",
          fontSize: 14,
          color: "#00D7B9",
        }}>
        Using Personal Messages you can send message to unsaved number.
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
          }}>
          Message
        </Text>
        <TextInput
          multiline
          maxLength={100}
          numberOfLines={10}
          style={{
            padding: 10,
            backgroundColor: "#fff",
            height: 300,
            marginTop: 15,
            borderRadius: 16,
            elevation: 3,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
          }}
        />
      </View>
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Button title={"KIRIM"} type='#00D7B9' />
      </TouchableOpacity>
    </View>
  );
};

export default PersonalMessages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: "center",
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
