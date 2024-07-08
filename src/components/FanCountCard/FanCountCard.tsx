import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  count: number;
  label: string;
};

export const FanCountCard = ({count, label}: Props) => (
  <View style={[styles.favorites, styles.shadowContainer]}>
    <Text style={styles.text}>{count}</Text>
    <Text style={styles.text}>{label}</Text>
  </View>
);
