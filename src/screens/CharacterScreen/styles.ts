import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 15,
    marginHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: COLORS.black,
    fontSize: 28,
  },
  shadowContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 4,
    margin: 24,
    padding: 14,

    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
});
