import React from 'react';
import { View, Text } from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextLabel from '../components/TextLabel/TextLabel';
import styles from './styles';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      
      <TextLabel text="Username" />
      <Input placeholder="Masukan username anda" />
      
      <TextLabel text="Password" />
      <Input placeholder="Masukan password anda" secureTextEntry={true} />
      
      <Button title="Sign In" onPress={() => { /* Handle sign in */ }} />
    </View>
  );
};

export default SignInScreen;
