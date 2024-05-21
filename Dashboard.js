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
  const [items,setItems] = useState([
    {
      id: '0',
      heading: 'hearding 0',
      content: 'content 0',
    },
    // You can add more items initially if needed
  ]);

  const addItem = (heading,content) => {
    let newItems = [...items, {
      id: items.length,
      heading: heading,
      content: content,
    }]
    setItems(newItems)
  }

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
            callback : addItem
          })
        }
      />
      <FlatList
        data={items}
        renderItem={({item}) => <CardItem key={item.id} item={item} />}
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
