import React from 'react';

import theme from '../theme';

import { Home } from '../screens/Home';
import { Options } from '../screens/OptionsApp';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: theme.COLORS.BLACK,
    borderTopWidth: 1,
    borderTopColor: theme.COLORS.BLUE,
  },
  tabBarLabelStyle: {
    fontSize: 0,
  },
});

export function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: theme.COLORS.BLUE,
        tabBarInactiveTintColor: theme.COLORS.BLUE_LIGHT,
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Criar" component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus" size={23} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen name="Options" component={Options}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}