import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFavoriteStore} from '../store/favorites';
import {COLORS} from '../assets/constants/colors';
import {Button} from './Button';

export const Header = () => {
  const {clearFavorites} = useFavoriteStore();

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Fans</Text>
      <Button onPress={clearFavorites} title={'Clear fans'} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: COLORS.black,
    fontSize: 28,
  },
});
