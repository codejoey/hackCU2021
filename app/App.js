import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Record from './src/screens/record';
import LocationSettings from './src/screens/location';
import Emotion from './src/screens/emotion';
import Health from './src/screens/health';





const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
    >
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Location" 
        component={LocationSettings} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Record" 
        component={Record} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Emotion" 
        component={Emotion} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Health" 
        component={Health} 
        options={{ headerShown: false}} 
      />
      
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}