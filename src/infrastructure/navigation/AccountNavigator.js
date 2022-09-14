import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../features/account/screens/LoginScreen';
import OnboardingScreen from '../../features/onBoarding/OnboardingScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
     <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);
