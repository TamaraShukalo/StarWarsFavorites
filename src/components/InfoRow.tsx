import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../assets/constants/colors';

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

const styles = StyleSheet.create({
  infoContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  verticalLine: {
    position: 'absolute',
    left: '40%',
    height: '80%',
    opacity: 0.5,
    borderLeftColor: COLORS.grey,
    borderLeftWidth: 1.5,
  },
  text: {
    flex: 1,
    color: COLORS.black,
    fontSize: 16,
  },
});
