import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../Button/Button';
import {useFavoriteStore} from '../../store/favorites';
import {styles} from './style';

export const Header = () => {
  const {clearFavorites} = useFavoriteStore();

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Fans</Text>
      <Button onPress={clearFavorites} title={'Clear fans'} />
    </View>
  );
};
