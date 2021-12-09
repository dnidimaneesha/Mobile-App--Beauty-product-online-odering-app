import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function SkinBtn(navigation) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          marginTop: 25,
          backgroundColor: '#f7e8f1',
          alignItems: 'center',
          padding: 15,
          borderRadius: 30,
          width: 350,
          position: 'relative',
        }}
        onPress={() => {
          navigation.navigate('OrderCompleted');
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: '600',
            marginRight: 40,
          }}>
          Click to select the product that
        </Text>
        <Text
          style={{
            alignItems: 'center',
            color: 'black',
            fontSize: 18,
            fontWeight: '600',
            marginRight: 40,
          }}>
          best suits your skin
        </Text>

        <Image
          source={require('../../assets/images/skincare.png')}
          style={{
            position: 'absolute',
            right: 20,
            width: 35,
            height: 55,
            top: 17,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
