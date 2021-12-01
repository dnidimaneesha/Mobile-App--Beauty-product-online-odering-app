import React from 'react';
import {View, Text, Image} from 'react-native';
import About from '../components/ShopDetails/About';
import Items from '../components/ShopDetails/Items';

export default function ShopDetails({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Items />
    </View>
  );
}
