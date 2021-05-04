import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/SubList';
import UploadScreen from './screens/UploadScreen';
import NotesScreen from './screens/NotesList';
import PreviewScreen from './screens/PreviewScreen';
import AiNotes from './screens/AiNotes';
import IotNotes from './screens/IotNotes';
import FossNotes from './screens/FossNotes';
import DmNotes from './screens/DmNotes';

const Stack = createStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="AI" component={AiNotes} />
        <Stack.Screen name="IOT" component={IotNotes} />
        <Stack.Screen name="FOSS" component={FossNotes} />
        <Stack.Screen name="DM" component={DmNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
