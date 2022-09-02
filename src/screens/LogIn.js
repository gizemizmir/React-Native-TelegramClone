import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {UserContext} from '../context/user';

const LogIn = () => {
  const [phoneCode, setPhoneCode] = useState();
  const {user, setUser} = useContext(UserContext);

  const state = {
    phone: '',
    firstname: '',
    lastname: '',
    username: '',
    isLogin: true,
  };

  const handleLogin = async () => {
    setUser({
      phone: phoneCode + state.phone,
      firstname: state.firstname,
      lastname: state.lastname,
      username: state.username,
      isLogin: true,
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.formArea}>
        <Text style={styles.phoneLabel}>Phone Number</Text>
        <View style={styles.phoneArea}>
          <Picker
            style={styles.picker}
            itemStyle={{height: 50}}
            selectedValue={phoneCode}
            onValueChange={(itemValue, itemIndex) => setPhoneCode(itemValue)}>
            <Picker.Item label="+216" value="216" />
            <Picker.Item label="+90" value="90" />
            <Picker.Item label="+993" value="993" />
            <Picker.Item label="+380" value="380" />
            <Picker.Item label="+971" value="971" />
          </Picker>
          <TextInput
            style={styles.phoneInput}
            label="phone"
            onChangeText={text => {
              state.phone = text;
            }}
          />
        </View>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          label="firstName"
          onChangeText={text => {
            state.firstname = text;
          }}
        />
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          label="lastName"
          onChangeText={text => {
            state.lastname = text;
          }}
        />
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          label="userName"
          onChangeText={text => {
            state.username = text;
          }}
        />
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default LogIn;
