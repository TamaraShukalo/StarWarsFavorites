import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  label: string;
  value: string;
};

export const InfoRow = ({label, value}: Props) => (
  <View style={styles.infoContainer}>
    <Text style={styles.text}>{label}</Text>
    <View style={styles.verticalLine} />
    <Text style={styles.text}>{value}</Text>
  </View>
);
