import React from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

const NotesEditOrCreate = props => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={(props.title ??= '')}
      />
      <TextInput
        placeholder="Description"
        multiline={true}
        value={(props.desc ??= '')}
        style={styles.descriptionInput}
      />
      <TouchableHighlight style={styles.btn}>
        <Button title={(props.btnTitle ??= 'Save')} />
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default NotesEditOrCreate;
