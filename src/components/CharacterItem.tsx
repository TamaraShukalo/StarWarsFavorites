import React, {memo, useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FullHeart} from '../assets/svg/FullHeart';
import {Character} from '../store/characters';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainNavigation';
import {Heart} from '../assets/svg/Heart';
import {COLORS} from '../assets/constants/colors';

type Props = {
  character: Character;
  toggleFavorite: (person: Character) => void;
  isFavorite: boolean;
};

export const CharacterItem = memo(
  ({character, isFavorite, toggleFavorite}: Props) => {
    const navigation =
      useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const handleToggleFavorite = useCallback(() => {
      toggleFavorite(character);
    }, [character, toggleFavorite]);

    const handleOnCharacterPress = useCallback(() => {
      navigation.navigate('CharacterScreen', {character});
    }, [navigation, character]);

    return (
      <View style={styles.container}>
        <Pressable onPress={handleToggleFavorite}>
          {!isFavorite ? (
            <Heart style={styles.icon} />
          ) : (
            <FullHeart style={styles.icon} fill={COLORS.red} />
          )}
        </Pressable>

        <Pressable onPress={handleOnCharacterPress}>
          <Text style={styles.text}>{character.name}</Text>
        </Pressable>
      </View>
    );
  },

  (oldProps, newProps) => oldProps.isFavorite === newProps.isFavorite,
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
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
