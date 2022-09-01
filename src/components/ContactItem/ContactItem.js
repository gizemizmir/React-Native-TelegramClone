import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './ContactItem.style';
import useTheme from '../../hooks/useTheme';

// ContactItem is used to list the chats on the Contact Screen
const ContactItem = ({contact}) => {
  const {navigate} = useNavigation();
  const {theme} = useTheme();
  const name = contact.firstName + ' ' + contact.lastName;

  return (
    <View style={styles.contactContainer}>
      <Pressable
        style={styles.contactItem}
        onPress={() => {
          navigate('Chat', {userID: contact.id});
        }}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={{uri: contact.avatar}} />
        </View>
        <View style={styles.contactContent}>
          <View style={styles.contactInfo}>
            <Text
              style={[
                styles.name,
                {
                  color: theme.color,
                },
              ]}>
              {name}
            </Text>
          </View>
          <Text
            style={[
              {
                color: theme.greyText,
              },
            ]}>
            {contact.lastSeen}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ContactItem;
