import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {ArrowLeft} from '../assets/svg/ArrowLeft';
import {COLORS} from '../assets/constants/colors';

type Props = {
  onPress: () => void;
};

export const BackButton = ({onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ArrowLeft />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    marginRight: 20,
  },
});
