import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";
import BottomNav from "../components/BottomNav.js";
import CafeHomeScreen from "../pages/CafeCollect/CafeHome";
import BookMark from "../pages/BookMark/BookMark";


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
      }}
      initialRouteName={"Home"}
      tabBar={(props) => <BottomNav {...props} />}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Tab.Screen
        name="Stamp"
        options={{ headerShown: false }}
        component={CafeHomeScreen}
      />
      <Tab.Screen
        name="Order"
        options={{ headerShown: false }}
        component={Order}
      />
      <Tab.Screen
        name="Bookmark"
        options={{ headerShown: false }}
        component={BookMark}
      />
      <Tab.Screen
        name="My"
        options={{ headerShown: false }}
        component={CafeHomeScreen}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
