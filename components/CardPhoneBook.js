import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IprofileContact } from "../assets/ilustration";

const CardPhoneBook = ({ id, names, nomer }) => {
  const [dropDown, setDropDown] = useState(true);
  return (
    <View style={styles.card} key={id}>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Image source={IprofileContact} style={{ height: 50, width: 50 }} />
        <View style={styles.headerCard}>
          <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 14 }}>
            {names}
          </Text>
          <Text>{nomer}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              borderRadius: 6,
              marginBottom: 10,
              color: "white",
              padding: 8,
              backgroundColor: "#00D7B9",
            }}>
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              borderRadius: 6,
              color: "white",
              padding: 8,
              backgroundColor: "#00D7B9",
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardPhoneBook;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    height: 100,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "98%",
    borderColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    elevation: 5,
    marginBottom: 10,
  },
  cardbody: {
    paddingVertical: 20,
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
});
