import React from 'react';
import {View, StyleSheet, Text, TextInput, FlatList} from 'react-native';
import useTheme from '../hooks/useTheme';
import contact_data from '../data/contactList.json';
import ContactItem from '../components/ContactItem';

const Contact = () => {
  const {theme} = useTheme();
  const renderContact = ({item}) => <ContactItem contact={item} />;
  const keyExtractorContact = item => item.id.toString();
  return (
    <View
      style={[
        styles.contactContainer,
        {backgroundColor: theme?.backgroundColor},
      ]}>
      <View style={styles.bottomHeader}>
        <View style={styles.bottomHeaderContent}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={theme.color}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractorContact}
          data={contact_data}
          renderItem={renderContact}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    display: 'flex',
    flex: 1,
    paddingTop: 10,
  },
  listContainer: {
    height: '100%',
    paddingHorizontal: 18,
  },
  bottomHeader: {
    width: '100%',
    marginBottom: 10,
  },
  bottomHeaderContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
  editText: {
    fontSize: 14,
    color: '#2385E1',
  },
  input: {
    width: '100%',
    height: 35,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#686868',
    padding: 8,
    borderRadius: 10,
  },
});

export default Contact;
