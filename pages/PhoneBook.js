import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { IprofileContact } from "../assets/ilustration";
import ActionButton from "react-native-action-button-warnings-fixed";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
const PhoneBook = () => {
  const [dropDown, setDropDown] = useState(true);
  const bottomSheetRef = useRef(BottomSheetModal);
  const snapPoints = useMemo(() => ["20%", "90%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.containercard}>
          <View style={styles.card}>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <Image
                source={IprofileContact}
                style={{ height: 50, width: 50 }}
              />
              <View style={styles.headerCard}>
                <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 14 }}>
                  Gemilang
                </Text>
                <Text>081234567890</Text>
              </View>
            </View>
            <View>
              <View style={styles.dropdown}>
                <TouchableOpacity
                  style={styles.dropdownText}
                  onPressIn={() => setDropDown(!dropDown)}>
                  <Text>. . . . .</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "column",
                    backgroundColor: "white",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#00D7B9",
                    padding: 10,
                    marginTop: 10,
                    display: dropDown ? "none" : "flex",
                  }}>
                  <TouchableOpacity>
                    <Text style={styles.dropdownContentText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.dropdownContentText}>Hapus</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
                keyboardType='phone-pad'
                placeholder='Type your message here'
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
                placeholder='Type your message here'
              />
            </View>
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
  dropdownContentText: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    color: "black",
    padding: 5,
  },
  dropdownText: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
  },
  dropdown: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  headerCard: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00D7B9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    margin: 5,
    height: 75,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    elevation: 5,
    marginBottom: 10,
  },
  cardbody: {
    paddingVertical: 10,
  },
  containercard: {
    flex: 1,
    backgroundColor: "white",
  },
});
