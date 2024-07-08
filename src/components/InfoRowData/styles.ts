import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
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
  errorText: {
    flex: 1,
    color: COLORS.red,
    fontSize: 16,
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  activityIndicator: {
    marginLeft: 12,
  },
});
