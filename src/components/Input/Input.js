import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = ({ placeholder, secureTextEntry }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
  />
);

export default Input;
