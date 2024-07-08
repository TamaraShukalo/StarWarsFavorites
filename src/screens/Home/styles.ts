import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    marginHorizontal: 24,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 4,

    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
  emptyListContainer: {
    borderTopWidth: 0.5,
    borderTopColor: COLORS.grey,
    paddingTop: 30,
  },
  emptyListText: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 16,
  },
  activitiIndicator: {
    margin: 10,
  },
});
