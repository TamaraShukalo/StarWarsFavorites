import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../assets/constants/colors';

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

const styles = StyleSheet.create({
  favorites: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  shadowContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 4,

    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
  },
});
