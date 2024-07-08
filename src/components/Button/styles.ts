import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
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
