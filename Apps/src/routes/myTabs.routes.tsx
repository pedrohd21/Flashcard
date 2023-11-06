import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Home } from '../screens/Home';
import { ViewProfile } from '../screens/Account/ViewProfile';
import { CreateFlashCard } from '../screens/FlashCard/CreateFlashCard';
import { PracticeNow } from '../screens/Practice/PracticeNow';
import { ListCategory } from '../screens/Category/ListCategory';
import theme from '../theme';


const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: theme.COLORS.GRAY_900,
    borderTopWidth: 1,
    borderTopColor: theme.COLORS.PURPLE,
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: theme.COLORS.WHITE_LIGHT,
        tabBarInactiveTintColor: theme.COLORS.PURPLE,

      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Categorys" component={ListCategory}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="folder" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Create" component={CreateFlashCard}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({ color }) => (
            <Icon name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Practice" component={PracticeNow}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({ color }) => (
            <Icon name="feather-alt" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ViewProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}