import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const CardItem = ({item, navigation, callback}) => {
  return (
    <View style={styles.card}>
      <TextInput
        style={styles.heading}
        placeholder="Heading"
        value={item.heading}
        onChangeText={text => item.setHeading(text)}
      />
      <TextInput
        style={styles.content}
        placeholder="Content"
        value={item.content}
        onChangeText={text => item.setContent(text)}
        multiline
      />
      <Button
        title="Edit"
        color="#f194ff"
        onPress={() => {
          console.log('from card', item.id);
          navigation.navigate('NotesEdit', {
            btnTitle: 'Edit',
            title: item.heading,
            descriptionInput: item.content,
            callback: callback,
            id: item.id,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  deleteButton: {
    alignSelf: 'flex-end',
  },
});

export default CardItem;
