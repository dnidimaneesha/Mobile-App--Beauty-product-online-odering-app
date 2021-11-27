import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function HederTabs() {
  const [activetab, setActiveTab] = React.useState('Delivery');
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Delivery"
        btncolor="black"
        textcolor="#efd4ec"
        activetab={activetab}
        setActiveTab={setActiveTab}
      />

      <HeaderButton
        text="PickUp"
        btncolor="#efd4ec"
        textcolor="black"
        activetab={activetab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = props => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activetab === props.text ? 'black' : '#efd4ec',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activetab === props.text ? '#efd4ec' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
  