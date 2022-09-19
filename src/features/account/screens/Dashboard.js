import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../infrastructure/theme/colors";
import Company from "./Company";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from "./ForgetPassword";

const Drawer = createDrawerNavigator();

const DashboardScreen = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Company" component={Company} />
      <Drawer.Screen name="ForgetPassword" component={ForgetPassword} />
    </Drawer.Navigator>
  </NavigationContainer>

  );
};

export default DashboardScreen;
