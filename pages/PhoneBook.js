import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IprofileContact } from "../assets/ilustration";

const PhoneBook = () => {
  const [dropDown, setDropDown] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.containercard}>
        <View style={styles.card}>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <Image source={IprofileContact} style={{ height: 50, width: 50 }} />
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
    </View>
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
