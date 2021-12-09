import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import HederTabs from '../components/home/HeaderTabs';
import SkinBtn from '../components/home/SkinBtn';
import Categories from '../components/home/Categories';
import BeautyProducts, {
  localBeautyProducts,
} from '../components/home/BeautyProducts';

export default function Home({navigation}) {
  const [shopData, setShopdata] = React.useState(localBeautyProducts);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#efd4ec', padding: 15}}>
        <HederTabs />
        <SkinBtn />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories navigation={navigation} />
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 20,
            marginBottom: -6,
          }}>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'black',
              fontSize: 15,
              marginBottom: 10,
            }}>
            Free Delivery Prodct CLick Shops 👇{' '}
          </Text>
        </View>
        <BeautyProducts shopData={shopData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
