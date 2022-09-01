import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contactContaine: {
    height: 65,
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
  },
  contactContent: {
    width: '83%',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  contactInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    width: '17%',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
});
