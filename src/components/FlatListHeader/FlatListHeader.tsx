import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {FullHeart} from '../../assets/svg/FullHeart';
import {SearchInput} from '../SearchInput/SearchInput';

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
