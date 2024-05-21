import React from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';

const NotesEditOrCreate = ({navigation, route}) => {
  const [title,setTitle] = useState(route.params.title)
  const [content,setContent] = useState(route.params.descriptionInput)

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Title"
        style={styles.input}
        defaultValue={title}
        onChangeText={newText => setTitle(newText)}
      />
      <TextInput
        placeholder="Description"
        multiline={true}
        defaultValue={content}
        style={styles.descriptionInput}
        onChangeText={newText => setContent(newText)}
      />
      <TouchableHighlight style={styles.btn}>
        <Button title={route.params.btnTitle} onPress={this.buttonAction} />
      </TouchableHighlight>
    </SafeAreaView>
  );
  
  const buttonAction = () =>{
    console.log("buttonAction called")
    route.params.callback(title,content)
  } 
};

export default NotesEditOrCreate;
