import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {PrimaryButton} from '../components/Button';

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
          <PrimaryButton onPress={this.Onpress} title="Get Started" />
        </View>
      </ImageBackground>
    );
  }
}
