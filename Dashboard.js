import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  View,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import CardItem from './CardItem';
const Dashboard = ({navigation}) => {
  const [items, setItems] = useState([]);

  const addItem = (heading, content, id) => {
    if (id === undefined) {
      setItems(pre => {
        let newItems = [
          ...pre,
          {
            id: pre.length,
            heading: heading,
            content: content,
          },
        ];
        return newItems;
      });
    } else {
      setItems(pre => {
        let items1 = [...pre];
        items1.splice(id, 1);
        items1.splice(id, 0, {
          id: id,
          heading: heading,
          content: content,
        });
        return items1;
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollView}>
            {items.map((item) => (
            <CardItem key={item.id} item={item} />
            ))}
        </ScrollView>  */}
      <Button
        title="Add"
        color="#f194ff"
        onPress={() =>
          navigation.navigate('NotesEdit', {
            btnTitle: 'Save',
            title: '',
            descriptionInput: '',
            callback: addItem,
          })
        }
      />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <CardItem
            key={item.id}
            item={item}
            navigation={navigation}
            callback={addItem}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingVertical: 16,
  },
});

export default Dashboard;
