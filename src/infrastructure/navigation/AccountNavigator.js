import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginDashBoard } from '../../features/account/screens/LoginDashBoard';
import OnboardingScreen from '../../features/onBoarding/OnboardingScreen';
import Signin from '../../features/account/screens/Signin';
import AdminLogin from '../../features/account/screens/AdminLogin';
import ForgetPassword from '../../features/account/screens/ForgetPassword';
import Company from '../../features/account/screens/Company';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator >
     <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
    <Stack.Screen name="LoginDashBoard" component={LoginDashBoard} options={{ headerShown: false }}/>
    <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }}/>
    <Stack.Screen name="SignIn" component={Signin} options={{ headerShown: false }}/>
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
    <Stack.Screen name="Company" component={Company} options={{ headerShown: false }} />
    <Stack.Screen name="BottomNavigator"  options={{ headerShown: false }} component={BottomTabNavigator} />
  </Stack.Navigator>
);
