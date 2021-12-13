import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {PrimaryButton} from '../components/Button';
import LottieView from 'lottie-react-native';

export default class LoadingScreen extends Component {
  Onpress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/imagelogo.png')}>
        <View>
          <LottieView
            style={{
              height: 150,
              alignSelf: 'center',
              marginBottom: 10,
              marginTop: 120,
            }}
            source={require('../assets/animations/love-hearts.json')}
            autoPlay
            speed={0.8}
          />
        </View>
        <View>
          <PrimaryButton onPress={this.Onpress} title="Get Started" />
        </View>
      </ImageBackground>
    );
  }
}
