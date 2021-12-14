import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignIn = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/photoshopScreen/signin.png')}>
      <SafeAreaView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{paddingHorizontal: 20, flex: 1, marginTop: 255}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#302c2c',
                marginBottom:20,
              }}>
              Log in
            </Text>
          </View>
          <View style={{marginTop: -20}}>
            <View style={styles.input}>
              <TextInput placeholder="Email" style={styles.inputcontent} />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Password"
                style={styles.inputcontent}
                secureTextEntry
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View style={styles.btnPrimary}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 70,
              marginBottom: 50,
            }}>
            <Text style={{color: '#808080', fontWeight: 'bold', fontSize: 16}}>
              Don`t have an account ?
            </Text>
            <TouchableOpacity
              style={styles.btnSignUp}
              onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{color: '#9c3796', fontWeight: 'bold', fontSize: 18}}>
                {' '}
                Sign up{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginTop: 20,
    color: '#dcd7dc',
  },
  inputcontent: {
    color: 'white',
    paddingLeft: 30,
    borderBottomWidth: 2,
    borderColor: '#c25cbb',
    // eslint-disable-next-line no-dupe-keys
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    backgroundColor: '#532750',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  btnSignUp: {
    backgroundColor: '#',
    height: 25,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});
