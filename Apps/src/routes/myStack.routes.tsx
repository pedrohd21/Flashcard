import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { CreateAccount } from '../screens/Account/CreateAccount';
import { LoginAccount } from '../screens/Account/LoginAccount';

import { CreateDeck } from '../screens/Deck/CreateDeck';
import { EditDeck } from '../screens/Deck/EditDeck';

import { CreateFlashCard } from '../screens/FlashCard/CreateFlashCard';
import { EditFlashCard } from '../screens/FlashCard/EditFlashCard';
import { ListFlashCard } from '../screens/FlashCard/ListFlashCard';

import { ListPractice } from '../screens/Practice/ListPractice';

import { MyTabs } from './myTabs.routes';

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
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="CreateFlashCard" component={CreateFlashCard} />
        <Stack.Screen name="LoginAccount" component={LoginAccount} />
        <Stack.Screen name="CreateDeck" component={CreateDeck} />
        <Stack.Screen name="EditDeck" component={EditDeck} />
        <Stack.Screen name="EditFlashCard" component={EditFlashCard} />
        <Stack.Screen name="ListFlashCard" component={ListFlashCard} />
        <Stack.Screen name="ListPractice" component={ListPractice} />

        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}