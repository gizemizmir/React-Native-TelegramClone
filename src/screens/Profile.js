import React, {useContext} from 'react';
import {StyleSheet, View, TextInput, Text, Pressable} from 'react-native';
import useTheme from '../hooks/useTheme';
import {UserContext} from '../context/user';

const Profile = () => {
  const {theme} = useTheme();
  const {user, setUser} = useContext(UserContext);

  const state = {
    firstname: user?.firstname,
    lastname: user?.lastname,
    username: user?.username,
  };

  const handleUpdate = () => {
    setUser({
      firstname: state.firstname,
      lastname: state.lastname,
      username: state.username,
      isLogin: true,
    });
  };

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
        <TextInput
          style={[styles.input, {color: theme.color}]}
          label="firstName"
          placeholder={user?.firstname}
          placeholderTextColor={theme.greyText}
          onChangeText={text => {
            state.firstname = text;
          }}
        />
        <Text style={[styles.inputLabel, {color: theme.color}]}>Last Name</Text>
        <TextInput
          style={[styles.input, {color: theme.color}]}
          label="lastName"
          placeholder={user?.lastname}
          placeholderTextColor={theme.greyText}
          onChangeText={text => {
            state.lastname = text;
          }}
        />
        <Text style={[styles.inputLabel, {color: theme.color}]}>Username</Text>
        <TextInput
          style={[styles.input, {color: theme.color}]}
          label="userName"
          placeholder={user?.username}
          placeholderTextColor={theme.greyText}
          onChangeText={text => {
            state.username = text;
          }}
        />
        <Pressable style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
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
