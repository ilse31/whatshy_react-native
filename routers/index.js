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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;
