import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  receiveMessage: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    marginVertical: 5,
    maxWidth: '85%',
    borderRadius: 10,
    display: 'flex',
    alignSelf: 'flex-start',
  },
  sendMessage: {
    backgroundColor: '#DCF8C6',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 20,
    marginVertical: 5,
    maxWidth: '85%',
    display: 'flex',
    alignSelf: 'flex-end',
    borderRadius: 10,
    position: 'relative',
  },
  messageTextContainer: {
    marginRight: 35,
  },
  messageText: {
    color: '#000',
  },
  messageIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageDate: {
    fontSize: 10,
    color: '#000',
    marginRight: 2,
  },
});
