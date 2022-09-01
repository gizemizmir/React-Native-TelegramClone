import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import useTheme from '../../hooks/useTheme';

// Header is used to Bottom Nav Screens
const Header = ({leftText, centerText, iconName}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.header}>
      <Text style={styles.editText}>{leftText}</Text>
      <Text
        style={[
          styles.title,
          {
            color: theme.color,
          },
        ]}>
        {centerText}
      </Text>
      <Ionicons name={iconName} size={20} color="#2385E1" />
    </View>
  );
};

export default Header;
