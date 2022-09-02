import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import useTheme from '../hooks/useTheme';
import HomeScreen from '../screens/Home';
import ContactScreen from '../screens/Contact';

import SettingsStackNavigation from './settingStackNavigation';

import Header from '../components/Header';

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  const {theme} = useTheme();
  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.backgroundColor},
        tabBarInactiveTintColor: theme.color,
      }}>
      <BottomNav.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          tabBarLabel: 'Contact',
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-sharp"
              color={theme.color}
              size={25}
            />
          ),
          headerTitle: () => (
            <Header
              leftText={'Sort'}
              centerText={'Contacts'}
              iconName={'person-add-outline'}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          tabBarIcon: () => (
            <Ionicons
              name="chatbubbles-outline"
              color={theme.color}
              size={25}
            />
          ),
          headerTitle: () => (
            <Header
              leftText={'Edit'}
              centerText={'Messages'}
              iconName={'create-outline'}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: () => (
            <Ionicons name="settings-outline" color={theme.color} size={25} />
          ),
        }}
        component={SettingsStackNavigation}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
