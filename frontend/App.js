import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Auth/Login";
import CafeHomeScreen from "./src/pages/CafeCollect/CafeHome";
import CafeDetailScreen from "./src/pages/CafeCollect/CafeDetail";
import Navigation from "./src/navigation/navigation";
import EditHome from "./src/pages/My/EditHome";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={Navigation}
        />
        <Stack.Screen
          name="CafeHome"
          options={{ headerShown: false }}
          component={CafeHomeScreen}
        />
        <Stack.Screen
          name="CafeDetail"
          options={{ headerShown: false }}
          component={CafeDetailScreen}
        />
        <Stack.Screen
          name="EditHome"
          options={{ headerShown: false }}
          component={EditHome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
