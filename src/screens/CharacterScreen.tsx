import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MainStackParamList} from '../navigation/MainNavigation';
import {BackButton} from '../components/BackButton';
import {COLORS} from '../assets/constants/colors';
import {InfoRow} from '../components/InfoRow';
import {InfoRowData} from '../components/InfoRowData';

export const CharacterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {params} = useRoute<RouteProp<MainStackParamList, 'CharacterScreen'>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>{params.character.name}</Text>
      </View>

      <View style={styles.shadowContainer}>
        <InfoRow label="Birth Year" value={params.character.birth_year} />
        <InfoRow label="Gender" value={params.character.gender} />
        <InfoRowData label="Homeworld" value={params.character.homeworld} />
        <InfoRowData label="Species" value={params.character.species[0]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
