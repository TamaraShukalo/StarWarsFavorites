import React from 'react';
import {SearchInput} from './SearchInput';
import {StyleSheet, Text, View} from 'react-native';
import {FullHeart} from '../assets/svg/FullHeart';
import {COLORS} from '../assets/constants/colors';

type Props = {
  onSearch: (value: string) => void | undefined;
};

export const FlatListHeader = ({onSearch}: Props) => {
  return (
    <View style={styles.container}>
      <SearchInput placeholder={'Search'} onSearch={onSearch} />
      <View style={styles.flatListHeader}>
        <FullHeart style={styles.icon} />
        <Text style={styles.text}>Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  flatListHeader: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 40,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
  },
});
