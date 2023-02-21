import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import React, {useState,useContext} from 'react';
import axios from 'axios';
import constant from '../constant/constant';

const Login = ({navigation}) => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState('test123');

  const handleLogin = async () => {
    const body = {
      email,
      password,
    };
    const res = await axios.post(`${constant.baseURL}/api/user/login`, body);
    if (res.data.success) {
      //   console.log("first")
      if (res.data.isAdmin) {
        navigation.navigate('AdminPanel');
      } else {
        navigation.navigate('UserTab');
      }
    } else {
      ToastAndroid.show(res.data.error, ToastAndroid.SHORT);
    }
  };


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>SAYLANI WELFARE</Text>
          <Text style={styles.subHeading}>ONLINE DISCOUNT STORE</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="silver"
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="silver"
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.linkLogin}>
              Don’t have an account?
              <Text
                style={{color: '#61B846'}}
                onPress={() => navigation.navigate('Register')}>
                {' '}
                Register
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  headingContainer: {
    alignItems: 'center',
    flex: 0.5,
    marginTop: 70,
  },
  heading: {
    fontWeight: '700',
    fontSize: 32,
    color: '#61B846',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#024F9D',
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1.5,
  },
  input: {
    width: 228,
    borderBottomWidth: 1,
    margin: 5,
    borderBottomColor: '#D4D3D3',
    backgroundColor: '#fff',
    color: '#000000',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: '#61B846',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  linkLogin: {
    marginTop: 10,
    color: '#024F9D',
    fontWeight: '700',
  },
});

export default Login;
