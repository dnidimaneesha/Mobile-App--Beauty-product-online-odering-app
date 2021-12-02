import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import LoadingScreen from './screens/LoadingScreen';
import BeautyItems from './screens/BeautyItems';
import ShopDetails from './screens/ShopDetails';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoadignScreen"
          screenOptions={screenOptions}>
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BeautyItems" component={BeautyItems} />
          <Stack.Screen name="ShopDetails" component={ShopDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
