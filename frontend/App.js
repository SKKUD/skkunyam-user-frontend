import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/Auth/Login';
import CafeHomeScreen from './src/pages/CafeCollect/CafeHome';
import CafeDetailScreen from './src/pages/CafeCollect/CafeDetail';
import Home from "./src/pages/Home/Home";
import Order from "./src/pages/Order/Order";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OrderScreen"
          options={{ headerShown: false }}
          component={Order}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
