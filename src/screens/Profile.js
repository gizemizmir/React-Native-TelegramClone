import React from 'react';
import {StyleSheet, View, TextInput, Text, Pressable} from 'react-native';
import useTheme from '../hooks/useTheme';

const Profile = () => {
  const {theme} = useTheme();

  return (
    <View
      style={[
        styles.profileContainer,
        {backgroundColor: theme?.backgroundColor},
      ]}>
      <View style={styles.formArea}>
        <Text style={[styles.inputLabel, {color: theme.color}]}>
          First Name
        </Text>
        <TextInput style={styles.input} label="firstName" />
        <Text style={[styles.inputLabel, {color: theme.color}]}>Last Name</Text>
        <TextInput style={styles.input} label="lastName" />
        <Text style={[styles.inputLabel, {color: theme.color}]}>Username</Text>
        <TextInput style={styles.input} label="userName" />
        <Pressable style={styles.button} onPress={{}}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    flex: 1,
  },
  formArea: {
    width: '90%',
    height: '90%',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneArea: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 20,
  },
  picker: {
    width: '35%',
    borderWidth: 1,
    borderColor: '#686868',
    borderRadius: 4,
  },
  phoneInput: {
    width: '62%',
    height: 50,
    borderWidth: 1,
    borderColor: '#686868',
    fontSize: 20,
    padding: 10,
    borderRadius: 4,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#686868',
    marginBottom: 20,
    padding: 10,
    borderRadius: 4,
  },
  inputLabel: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  phoneLabel: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default Profile;
