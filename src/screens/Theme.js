import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import useTheme from '../hooks/useTheme';

const Theme = () => {
  const {theme, setTheme, toggleTheme} = useTheme();

  return (
    <View
      style={[
        styles.themeContainer,
        {backgroundColor: theme?.backgroundColor},
      ]}>
      <Text style={[styles.themeText, {color: theme.color}]}>Change Theme</Text>
      <Pressable
        onPress={toggleTheme}
        style={[
          styles.themeButton,
          {backgroundColor: theme.type === 'light' ? '#14202b' : '#FFF'},
        ]}>
        <Text
          style={[
            styles.colorText,
            {color: theme.type === 'light' ? '#FFF' : '#14202b'},
          ]}>
          {theme.type === 'light' ? 'Dark' : 'Light'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  themeContainer: {
    height: '100%',
    paddingBottom: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  colorText: {
    fontSize: 18,
  },
  themeButton: {
    width: 150,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Theme;
