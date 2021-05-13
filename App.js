import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PercentageScreen from './Screens/PercentageScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="DeadLift Screen"
          component={PercentageScreen}
        />
        <Stack.Screen 
          name="Squat Screen"
          component={PercentageScreen}
        />
        <Stack.Screen 
          name="Bench Press Screen"
          component={PercentageScreen}
        />
        <Stack.Screen 
          name="Shoulder Press Screen"
          component={PercentageScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
}
