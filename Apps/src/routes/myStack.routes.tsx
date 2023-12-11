import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { Home } from '../screens/Home'; 
import { CreateAccount } from '../screens/Account/CreateAccount';
import { LoginAccount } from '../screens/Account/LoginAccount';

import { CreateFlashCard } from '../screens/FlashCard/CreateFlashCard';
import { EditFlashCard } from '../screens/FlashCard/EditFlashCard';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,

        }}
      > 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="CreateFlashCard" component={CreateFlashCard} />
        <Stack.Screen name="LoginAccount" component={LoginAccount} />
        <Stack.Screen name="EditFlashCard" component={EditFlashCard} />   
      </Stack.Navigator>
    </NavigationContainer>
  )
}