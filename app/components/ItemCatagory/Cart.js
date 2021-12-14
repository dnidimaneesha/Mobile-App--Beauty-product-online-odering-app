import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

export default function ViewCart() {
  const {items} = useSelector(state => state.cartReducer.selectedItems);
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  
  console.log(totalUSD);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'center',
            bottom: -1,
            zIndex: 999,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                marginTop: 30,
                backgroundColor: '#9087dc',
                alignItems: 'center',
                marginLeft: 80,
                padding: 13,
                borderRadius: 30,
                width: 200,
                position: 'relative',
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}>
              <Text style={{color: 'white', fontSize: 20, marginRight: 80}}>
                Checkout
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  right: 20,
                  color: 'white',
                  fontSize: 17,
                  top: 17,
                }}>
                {' '}
                RS:
                {total ? totalUSD : ''}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
