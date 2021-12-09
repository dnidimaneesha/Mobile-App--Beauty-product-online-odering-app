import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';

export default function OrderCompleted() {
  const {items} = useSelector(state => state.cartReducer.selectedItems);

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%',
        }}>
        <LottieView
          style={{height: 150, alignSelf: 'center', marginBottom: 30}}
          source={require('../assets/animations/purchasemade.json')}
          autoPlay
          speed={0.5}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Your order at has been placed for RS.{totalUSD}.00🚀
        </Text>
        <ScrollView>
          <LottieView
            style={{height: 180, alignSelf: 'center'}}
            source={require('../assets/animations/girls.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
