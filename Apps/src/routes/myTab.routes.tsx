import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ViewProfile } from '../screens/Account/ViewProfile';

const Tab = createMaterialBottomTabNavigator();
import { Home } from '../screens/Home';

import Icon from 'react-native-vector-icons/FontAwesome5';

export function MyTabs() {

  return (
    <Tab.Navigator

    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen name="ViewProfile" component={ViewProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={16} color={color} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}