import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import UserProvider from './provider/UserProvider';
import ThemeProvider from './provider/ThemeProvider';
import ChatProvider from './provider/ChatProvider';

import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigation from './navigation/mainStackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <ThemeProvider>
          <ChatProvider>
            <MainStackNavigation />
          </ChatProvider>
        </ThemeProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
