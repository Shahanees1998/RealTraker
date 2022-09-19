import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

<<<<<<< HEAD
<<<<<<< HEAD
import { LoginDashBoard } from '../../features/account/screens/LoginDashBoard';
=======
import { LoginDashBoardScreen } from '../../features/account/screens/LoginDashBoardScreen';
>>>>>>> d650b1ede80f60fd54aedf750b41b9eb076d9104
=======
import { LoginDashBoardScreen } from '../../features/account/screens/LoginDashBoardScreen';
>>>>>>> d650b1ede80f60fd54aedf750b41b9eb076d9104
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
<<<<<<< HEAD
<<<<<<< HEAD
    <Stack.Screen name="LoginDashBoard" component={LoginDashBoard} options={{ headerShown: false }}/>
    <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }}/>
    <Stack.Screen name="SignIn" component={Signin} options={{ headerShown: false }}/>
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
    <Stack.Screen name="Company" component={Company} options={{ headerShown: false }} />
    <Stack.Screen name="BottomNavigator"  options={{ headerShown: false }} component={BottomTabNavigator} />
=======
    <Stack.Screen name="LoginDashBoard" component={LoginDashBoardScreen} />
>>>>>>> d650b1ede80f60fd54aedf750b41b9eb076d9104
=======
    <Stack.Screen name="LoginDashBoard" component={LoginDashBoardScreen} />
>>>>>>> d650b1ede80f60fd54aedf750b41b9eb076d9104
  </Stack.Navigator>
);
