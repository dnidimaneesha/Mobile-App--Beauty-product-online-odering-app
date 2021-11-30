import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import HederTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
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
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories navigation={navigation} />
        <BeautyProducts shopData={shopData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
