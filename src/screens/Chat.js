import React, {useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
  Text,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import MessageItem from '../components/MessageItem';
import Header from '../components/Header';
import contact_data from '../data/contactList.json';
import useTheme from '../hooks/useTheme';
import {ChatContext} from '../context/chat';

const ChatScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const {userID} = route.params;
  const user = contact_data.find(item => item.id === userID);
  const userName = user.firstName + ' ' + user.lastName;
  const renderText = ({item}) => <MessageItem message={item} />;
  const {message, setMessage} = useContext(ChatContext);

  const state = {
    userid: userID,
    message: '',
    messages: [],
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header centerText={userName} />,
    });
  }, [navigation, userName, user.avatar]);

  const sendMessage = () => {
    state.messages.push(state.message);
    setMessage({
      userId: userID,
      userMessages:
        message && message.userMessages
          ? [...message.userMessages, state.message]
          : [state.message],
    });
    console.log('state', state);
    console.log('message', message);
  };

  useEffect(() => {
    console.log('message geldi');
  }, [message]);

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/85/04/30/850430a750fb80c1ebaa5e740fc7cbd6.jpg',
      }}
      style={styles.chatContainer}>
      <View style={styles.chatView}>
        {message?.userId === userID ? (
          <FlatList
            style={styles.chatTextList}
            data={message?.userMessages}
            renderItem={renderText}
          />
        ) : (
          ''
        )}
      </View>
      <View
        style={[styles.bottomArea, {backgroundColor: theme.backgroundColor}]}>
        <TextInput
          style={[styles.input, {color: theme.color}]}
          label="Text"
          onChangeText={text => {
            state.message = text;
          }}
        />
        <Pressable onPress={sendMessage}>
          <Icon
            style={styles.bottomAreaIcon}
            name="send"
            size={30}
            color="#2385E1"
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: '100%',
    position: 'relative',
  },
  chatView: {
    paddingBottom: 75,
  },
  chatTextList: {
    height: '100%',
  },
  bottomArea: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 0,
    width: '105%',
    height: 80,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    margin: 15,
    marginLeft: 0,
    height: 30,
    width: '80%',
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  bottomAreaIcon: {
    marginTop: 15,
    marginLeft: 8,
  },
});

export default ChatScreen;
