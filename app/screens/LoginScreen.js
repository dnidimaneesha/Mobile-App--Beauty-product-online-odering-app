import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async () => {
    if (!email || !password) {
      Alert.alert('please all all the fields');
      return;
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log(result.user);
      navigation.replace('Home');
    } catch (err) {
      Alert.alert('something went wrong please try different password');
    }
  };
  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.box1}>
        <Text style={styles.text}>Log in</Text>
      </View>
      <View style={styles.box2}>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="password"
          value={password}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Button mode="contained" onPress={() => userLogin()}>
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{textAlign: 'center'}}>Dont have a account ?</Text>
          <Text style={{textAlign: 'auto', color: '#ffc2ea'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  box1: {
    alignItems: 'center',
    marginTop: 180,
  },
  box2: {
    paddingHorizontal: 40,
    height: '50%',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 22,
  },
});

export default LoginScreen;
