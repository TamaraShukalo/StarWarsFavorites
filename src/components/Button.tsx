import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../assets/constants/colors';

type Props = {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.red,
    opacity: 0.78,
  },
  text: {
    color: COLORS.red,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
