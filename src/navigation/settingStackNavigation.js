import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../screens/Setting';
import ThemeScreen from '../screens/Theme';
import ProfileScreen from '../screens/Profile';
import useTheme from '../hooks/useTheme';
import Header from '../components/Header';

const SettingsStackNav = createStackNavigator();
const SettingsStackNavigation = () => {
  const {theme} = useTheme();

  return (
    <SettingsStackNav.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <SettingsStackNav.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          headerTitle: () => <Header centerText={'Setting'} />,
        }}
      />
      <SettingsStackNav.Screen
        name="ThemeSettingsScreen"
        component={ThemeScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          headerTitle: () => <Header centerText={'Theme Setting'} />,
        }}
      />
      <SettingsStackNav.Screen
        name="ProfileSettingsScreen"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTitleStyle: {
            color: theme.color,
          },
          headerTitle: () => <Header centerText={'Profile Setting'} />,
        }}
      />
    </SettingsStackNav.Navigator>
  );
};

export default SettingsStackNavigation;
