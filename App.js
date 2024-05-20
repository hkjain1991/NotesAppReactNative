import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from './Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotesEditOrCreate from './NotesEditOrCreate';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="NotesEdit" component={NotesEditOrCreate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
