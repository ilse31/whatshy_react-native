import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IprofileContact } from "../assets/ilustration";
import ActionButton from "react-native-action-button-warnings-fixed";
import Button from "../components/Button";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import axios from "axios";
import CardPhoneBook from "../components/CardPhoneBook";
import { API } from "../helpers/API";
const PhoneBook = () => {
  let form = {
    name: "",
    number: "",
  };
  const [contact, setContact] = useState([]);
  const [formDatas, setformDatas] = useState(form);
  const bottomSheetRef = useRef(BottomSheetModal);
  const snapPoints = useMemo(() => ["20%", "90%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleChange = (e, name) => {
    setformDatas({
      ...formDatas,
      [name]: e,
    });
  };

  const handleSubmit = () => {
    console.log(formDatas);
  };

  const getContact = async () => {
    await API.get("/all")
      .then((res) => {
        console.log(res.data);
        setContact(res.data.phonebook);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getContact();
  }, []);

  console.log(contact);
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.containercard}>
          <FlatList
            data={contact}
            renderItem={({ item }) => (
              <CardPhoneBook
                nomer={item.number}
                id={item.id}
                names={item.name}
              />
            )}
          />
        </View>
        <ActionButton
          buttonColor='#00B89F'
          onPress={handlePresentModalPress}></ActionButton>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={1}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
            borderRadius: 20,
            backgroundColor: "white",
          }}>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                marginBottom: 10,
                fontFamily: "Poppins_600SemiBold",
                fontSize: 14,
                color: "#00B89F",
              }}>
              Tambah Kontak
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}>
              <Image
                source={IprofileContact}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </View>
            {/* //form */}
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 14,
                }}>
                Nama
              </Text>
              <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder='Masukan Nama'
                key={"name"}
                onChangeText={(e) => handleChange(e, "name")}
              />
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
                placeholder='Masukan Nomor Telpon'
                key={"number"}
                onChangeText={(e) => handleChange(e, "number")}
              />
            </View>
            <Button type={"#407BFF"} title={"Tambahkan"} press={handleSubmit} />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default PhoneBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  containercard: {
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#00D7B9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});
