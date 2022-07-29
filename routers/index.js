const { createStackNavigator } = require("@react-navigation/stack");
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/Login";
import Home from "../pages/Home";
const Stack = createStackNavigator();

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
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;
