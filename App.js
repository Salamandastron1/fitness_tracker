import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PercentageScreen from './Screens/PercentageScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Percentage Screen"
          component={PercentageScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
}
