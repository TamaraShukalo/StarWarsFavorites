import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: COLORS.grey,
  },
  icon: {
    marginRight: 40,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
  },
});
