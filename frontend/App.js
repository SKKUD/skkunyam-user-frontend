import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/Auth/Login";
import CafeHomeScreen from "./src/pages/CafeCollect/CafeHome";
import CafeDetailScreen from "./src/pages/CafeCollect/CafeDetail";
import CafeMenuListScreen from "./src/pages/CafeCollect/CafeMenuList";
import Navigation from "./src/navigation/navigation";
import EditHome from "./src/pages/My/EditHome";
import EditNotification from "./src/pages/My/EditNotification";
import Announcement from "./src/pages/My/Announcement";
import AnnouncementDetail from "./src/pages/My/AnnouncementDetail";
import FrequentQuestion from "./src/pages/My/FrequentQuestion";
import MyStamp from "./src/pages/My/MyStamp";
import * as Font from "expo-font";

const App = () => {
  const Stack = createNativeStackNavigator();

  const [isFont, setIsFont] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "Rubik Mono One": require("./fonts/RubikMonoOne-Regular.ttf"),
        "Pretendard Black": require("./fonts/Pretendard-Black.otf"),
        "Pretendard Bold": require("./fonts/Pretendard-Bold.otf"),
        "Pretendard ExtraBold": require("./fonts/Pretendard-ExtraBold.otf"),
        "Pretendard ExtraLight": require("./fonts/Pretendard-ExtraLight.otf"),
        "Pretendard Light": require("./fonts/Pretendard-Light.otf"),
        "Pretendard Medium": require("./fonts/Pretendard-Medium.otf"),
        "Pretendard Regular": require("./fonts/Pretendard-Regular.otf"),
        "Pretendard SemiBold": require("./fonts/Pretendard-SemiBold.otf"),
        "Pretendard Thin": require("./fonts/Pretendard-Thin.otf"),
      });
      setIsFont(true);
    };
    loadFont();
  }, []);

  return (
    isFont && (
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
            name="CafeMenuList"
            options={{ headerShown: false }}
            component={CafeMenuListScreen}
          />
          <Stack.Screen
            name="EditHome"
            options={{ headerShown: false }}
            component={EditHome}
          />
          <Stack.Screen
            name="EditNotification"
            options={{ headerShown: false }}
            component={EditNotification}
          />
          <Stack.Screen
            name="Announcement"
            options={{ headerShown: false }}
            component={Announcement}
          />
          <Stack.Screen
            name="AnnouncementDetail"
            options={{ headerShown: false }}
            component={AnnouncementDetail}
          />
          <Stack.Screen
            name="FrequentlyAskedQuestions"
            options={{ headerShown: false }}
            component={FrequentQuestion}
          />
          <Stack.Screen
            name="MyStamp"
            options={{ headerShown: false }}
            component={MyStamp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
