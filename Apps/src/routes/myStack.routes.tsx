import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

import { Home } from '../screens/Home';
import { LoginAccount } from '../screens/Account/LoginAccount';

import { CreateFlashCard } from '../screens/FlashCard/CreateFlashCard';
import { EditFlashCard } from '../screens/FlashCard/EditFlashCard';
import { ListFlashCard } from '../screens/FlashCard/ListFlashCard';

import { Practice } from '../screens/Practice';
import { Options } from '../screens/OptionsApp';

import { useState, useEffect } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { Loading } from '../components/Loading';

import { MyTabs } from './myTab.routes';

const Stack = createStackNavigator();

export function MyStack() {

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);
      if (isLoading) {
        setIsLoading(false)
      }
    });

    return unsubscribe;
  }, [])
  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        {user ? <>
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="CreateFlashCard" component={CreateFlashCard} />
          <Stack.Screen name="EditFlashCard" component={EditFlashCard} />
          <Stack.Screen name="ListFlashCard" component={ListFlashCard} />
          <Stack.Screen name="Practice" component={Practice} />
        </> : <Stack.Screen name="LoginAccount" component={LoginAccount} />}

      </Stack.Navigator>
    </NavigationContainer>
  )

}