import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import useTheme from '../hooks/useTheme';

const Home = () => {
  const {theme} = useTheme();
  return (
    <View
      style={[styles.homeContainer, {backgroundColor: theme?.backgroundColor}]}>
      <Text style={styles.editText}>Messages screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flex: 1,
  },
  editText: {
    fontSize: 14,
    color: '#2385E1',
  },
});

export default Home;
