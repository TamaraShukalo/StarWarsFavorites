import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: '100%',
    color: COLORS.black,
    fontSize: 16,
  },
});
