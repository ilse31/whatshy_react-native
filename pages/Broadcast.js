import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";

const Broadcast = () => {
  const [messages, setMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (key, value) => {
    setMessages({
      ...messages,
      [key]: value,
    });
  };

  const sendMessage = async () => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      Linking.openURL(
        `https://api.whatsapp.com/send?text=${messages}&source=&data=`,
        "_blank"
      );
      setMessages("");
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.text}>
        Using Broadcast Messages you can send messages to group or whatsapp
        contacts in bulk
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
        <Button
          title={loading ? "SENDING . . ." : "Kirim"}
          type='#00D7B9'
          press={sendMessage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Broadcast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  text: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
  },
});
