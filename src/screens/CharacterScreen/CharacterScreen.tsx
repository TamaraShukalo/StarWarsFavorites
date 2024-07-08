import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {BackButton} from '../../components/BackButton/BackButton';
import {InfoRow} from '../../components/InfoRow/InfoRow';
import {InfoRowData} from '../../components/InfoRowData/InfoRowData';
import {styles} from './styles';

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
