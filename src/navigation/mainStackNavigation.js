import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LogIn';
import ChatScreen from '../screens/Chat';

import BottomNavigation from './bottomNavigation';
import useTheme from '../hooks/useTheme';

const MainStackNav = createStackNavigator();
const MainStackNavigation = () => {
  const user = {};
  const {theme} = useTheme();

  return (
    <MainStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <>
          <MainStackNav.Screen name="BottomNav" component={BottomNavigation} />
          <MainStackNav.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: theme.backgroundColor,
              },
              headerTitleStyle: {
                color: theme.color,
              },
            }}
          />
        </>
      ) : (
        <>
          <MainStackNav.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: true}}
          />
        </>
      )}
    </MainStackNav.Navigator>
  );
};

export default MainStackNavigation;
