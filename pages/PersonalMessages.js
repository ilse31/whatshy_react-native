import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { IphoneBook } from "../assets/ilustration";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PersonalMessages = ({ navigation }) => {
  let formDatas = {
    phone: "",
    message: "",
  };
  let Errordata = {
    phone: "",
    message: "",
  };
  const [dataForm, setDataForm] = useState(formDatas);
  const [loading, setLoading] = useState(false);
  const [histories, setHistories] = useState([]);
  const [error, setError] = useState(Errordata);

  const handleChange = (key, value) => {
    if (key === "phone") {
      if (value.length < 13) {
        setError({ ...error, phone: "Nomor telepon harus 13 digit" });
      } else {
        setError({ ...error, phone: "" });
      }
    } else if (key === "message") {
      if (value.length < 1) {
        setError({ ...error, message: "Pesan tidak boleh kosong" });
      }
    }
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };

  const getDataHistory = async () => {
    try {
      const phone = await AsyncStorage.getItem("history");
      if (phone) {
        console.log(phone);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataHistory();
    // removeValue();
  }, []);

  const onPressSend = async () => {
    if (dataForm.phone.length < 13) {
      setError({ ...error, phone: "Nomor telepon harus 13 digit" });
    } else if (dataForm.message.length < 1) {
      setError({ ...error, message: "Pesan tidak boleh kosong" });
    }
    setLoading(true);
    let msg = dataForm.message.split("\n").join("%0a");
    let inserted = [];
    inserted.push({ number: dataForm.phone, text: msg, createdAt: new Date() });
    let history;
    try {
      await AsyncStorage.getItem("history")
        .then((value) => {
          if (value) {
            history = JSON.parse(value);
            history.push(inserted[0]);
            setHistories(history);
            AsyncStorage.setItem("history", JSON.stringify(history));
          } else {
            setHistories(inserted);
            AsyncStorage.setItem("history", JSON.stringify(inserted));
          }
        })
        .then(() => {
          setDataForm(formDatas);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      // Link(
      //   `https://api.whatsapp.com/send?phone=${dataForm.phone}&text=${msg}&source=&data=`,
      //   "_blank"
      // );
      Linking.openURL(`whatsapp://send?phone=${dataForm.phone}&text=${msg}`);
      setLoading(false);
      setDataForm(formDatas);
      setError(Errordata);
    }, 2000);
  };

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
          key={"phone"}
          style={styles.input}
          maxLength={13}
          onChangeText={(value) => handleChange("phone", value)}
          value={dataForm.phone}
          keyboardType='phone-pad'
          placeholder='Type your message here'
        />
        <Text style={{ color: "red", marginBottom: 10 }}>{error.phone}</Text>
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
          multiline={true}
          maxLength={100000}
          key={"message"}
          value={dataForm.message}
          onChangeText={(value) => handleChange("message", value)}
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
        <Text style={{ color: "red", marginTop: 10 }}>{error.message}</Text>
      </View>
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Button title={"KIRIM"} type='#00D7B9' press={onPressSend} />
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
