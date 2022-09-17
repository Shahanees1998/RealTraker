import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginDashBoardScreen } from '../../features/account/screens/LoginDashBoardScreen';
import OnboardingScreen from '../../features/onBoarding/OnboardingScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
     <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
    <Stack.Screen name="LoginDashBoard" component={LoginDashBoardScreen} />
  </Stack.Navigator>
);
