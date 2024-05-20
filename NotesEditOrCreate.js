import React from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

const NotesEditOrCreate = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={route.params.title}
      />
      <TextInput
        placeholder="Description"
        multiline={true}
        value={route.params.descriptionInput}
        style={styles.descriptionInput}
      />
      <TouchableHighlight style={styles.btn}>
        <Button title={route.params.btnTitle} />
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default NotesEditOrCreate;
