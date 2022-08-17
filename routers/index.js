const { createStackNavigator } = require("@react-navigation/stack");
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/Login";
import Home from "../pages/Home";
import History from "../pages/History";
import Account from "../pages/Account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeIcon from "../assets/icons/HomeIcon.png";
import ProfileIcon from "../assets/icons/profileIcon.png";
import HistoryIcon from "../assets/icons/historyIcon.png";
import PersonalMessages from "../pages/PersonalMessages";
import Broadcast from "../pages/Broadcast";
import PhoneBook from "../pages/PhoneBook";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#00D7B9",
          height: 55,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Image source={HomeIcon} />,
        }}
      />
      <Tab.Screen
        name='History'
        component={History}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={HistoryIcon} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image source={ProfileIcon} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='MainApp'
          component={MainApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PersonalMessage'
          component={PersonalMessages}
          options={{
            headerTitleAlign: "center",
            title: "Personal Message",
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
            },
          }}
        />
        <Stack.Screen name='Broadcast' component={Broadcast} />
        <Stack.Screen
          name='phonebook'
          component={PhoneBook}
          options={{
            headerTitleAlign: "center",
            title: "Phonebook",
            headerTitleStyle: {
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;
