import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useFavoriteStore} from '../store/favorites';
import {FanCountCard} from './FanCountCard';

export const FansCount = () => {
  const {favorites} = useFavoriteStore();

  return (
    <View style={styles.container}>
      <FanCountCard count={favorites.female.length} label="Female Fans" />
      <FanCountCard count={favorites.male.length} label="Male Fans" />
      <FanCountCard count={favorites.other.length} label="Others" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 15,
    flexDirection: 'row',
    gap: 15,
  },
});
