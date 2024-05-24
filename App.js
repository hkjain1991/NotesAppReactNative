import React, {useState} from 'react';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import Dashboard from './Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotesEditOrCreate from './NotesEditOrCreate';
import themeContext from './contexts/themeContext';
const App = () => {
  const Stack = createNativeStackNavigator();
  const [isDarkTheme, setTheme] = useState(false);
  return (
    <themeContext.Provider value={[isDarkTheme, setTheme]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="NotesEdit" component={NotesEditOrCreate} />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};
export default App;
