import React from 'react';
import {View, Text, Image} from 'react-native';
import About from '../components/ShopDetails/About';

export default function ShopDetails({route, navigation}) {
  return (
    <View>
      <About route={route} />
    </View>
  );
}
