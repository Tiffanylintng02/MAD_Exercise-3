import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const TextLabel = ({ text }) => (
  <Text style={styles.labelText}>{text}</Text>
);

export default TextLabel;
