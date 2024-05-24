import React, {useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import themeContext from './contexts/themeContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({onPress, iconName}) => (
  <TouchableOpacity onPress={onPress} style={styles.deleteButton}>
    <Icon name={iconName} size={30} color="black" />
  </TouchableOpacity>
);

const CardItem = ({item, navigation, deleteCallback, callback}) => {
  const [isDarkTheme, setTheme] = useContext(themeContext);
  return (
    <View
      style={[styles.card, {backgroundColor: isDarkTheme ? 'white' : 'green'}]}>
      <IconButton onPress={deleteCallback} iconName="trash" />

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
    justifyContent: 'flex-end',
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
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: 'blue',
  },
  deleteButton: {
    alignItems: 'flex-end',
  },
});

export default CardItem;
