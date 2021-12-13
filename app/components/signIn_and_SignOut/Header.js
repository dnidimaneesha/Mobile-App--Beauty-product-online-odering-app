import React from 'react';
import {View, Text} from 'react-native';

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: '#f3e0f0',
        paddingVertical: 10,
        paddingLeft: 20,
        marginBottom: -6,
      }}>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          color:'black',
          marginBottom: 10,
        }}>
        MY ACCOUNT
      </Text>
    </View>
  );
}
