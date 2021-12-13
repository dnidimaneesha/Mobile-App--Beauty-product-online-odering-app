import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#e87acb',
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {PrimaryButton};
