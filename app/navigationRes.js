import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import LoadingScreen from './screens/LoadingScreen';
import BeautyItems from './screens/BeautyItems';

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadignScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BeautyItems" component={BeautyItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
