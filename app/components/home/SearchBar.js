import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyBaxIVGq6-y0q0a6ZfEuAZFKKwHQtTaO1I'}}
        onPress={(data, details = null) => {
          console.log(data.description);
        }}
        placeholder="search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View>
            <Icon name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              height: 20,
              backgroundColor: 'white',
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={11}
              color="black"
              style={{marginRight: 6}}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
