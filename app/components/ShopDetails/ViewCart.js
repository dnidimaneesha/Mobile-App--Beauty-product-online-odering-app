import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ViewCart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 180,
        zIndex: 999,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            marginTop: 30,
            backgroundColor: '#844e7c',
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
