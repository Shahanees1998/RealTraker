import React, { useContext,useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { AccountNavigator } from './AccountNavigator';

export const Navigation = () => {


  return (
    <NavigationContainer>
       <AccountNavigator />
    </NavigationContainer>
  );
  
};
