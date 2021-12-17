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

const SignUp = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/photoshopScreen/signup.png')}>
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
                marginBottom: 20,
              }}>
              Sign Up
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
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <View style={styles.btnPrimary}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 50,
              marginBottom: 50,
            }}>
            <Text style={{color: '#808080', fontWeight: 'bold', fontSize: 16}}>
              Alredy have an account.
            </Text>
            <TouchableOpacity
              style={styles.btnSignUp}
              onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={{color: '#9c3796', fontWeight: 'bold', fontSize: 18}}>
                {' '}
                Sign in{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;

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
    borderColor: '#bd8bf2',
    // eslint-disable-next-line no-dupe-keys
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    backgroundColor: '#aeb0f2',
    height: 60,
    width: 300,
    borderRadius: 10,
    marginLeft: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  btnSignUp: {
    height: 25,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});
