import React from 'react';
import {View, Text} from 'react-native';
import {totalUSD} from '../components/ShopDetails/ViewCart';


export default function OrderCompleted() {
  return (
    <View>
      <Text>Your order has been placed for RS.{totalUSD}</Text>
    </View>
  );
}
