import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./pages/Login";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_200Thin: require("./assets/fonts/Poppins-Thin.otf"),
    Poppins_300Light: require("./assets/fonts/Poppins-Light.otf"),
    Poppins_400Regular: require("./assets/fonts/Poppins-Regular.otf"),
    Poppins_500Medium: require("./assets/fonts/Poppins-Medium.otf"),
    Poppins_600SemiBold: require("./assets/fonts/Poppins-SemiBold.otf"),
    Poppins_700Bold: require("./assets/fonts/Poppins-Bold.otf"),
    Poppins_800ExtraBold: require("./assets/fonts/Poppins-ExtraBold.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 35,
  },
});
