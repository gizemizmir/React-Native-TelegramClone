import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.settingContainer}>
      <Image
        style={styles.profileImage}
        source={{uri: 'https://i.pravatar.cc/300'}}
      />
      <Pressable
        style={styles.settingButton}
        onPress={() => {
          navigate('Theme');
        }}>
        <Text style={styles.buttonText}>Theme</Text>
      </Pressable>
      <Pressable
        style={styles.settingButton}
        onPress={() => {
          navigate('Profile');
        }}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>
      <Pressable style={[styles.settingButton]} onPress={() => {}}>
        <Text style={styles.buttonText}>Log out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    width: '90%',
    height: '90%',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 30,
  },
  settingButton: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default Setting;
