import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Button, View,   FlatList, Text } from 'react-native';
 import CardItem from './CardItem';
const Dashboard = () => {
  const [items, setItems] = useState([
    { id: '1', heading: 'hearding 1', content: 'content 1', setHeading: (text) => handleTextChange('1', 'heading', text), setContent: (text) => handleTextChange('1', 'content', text) },
    // You can add more items initially if needed
  ]);

  return (
    <SafeAreaView style={styles.container}>    
        {/* <ScrollView contentContainerStyle={styles.scrollView}> 
            {items.map((item) => (
            <CardItem key={item.id} item={item} />
            ))}
        </ScrollView>  */}
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