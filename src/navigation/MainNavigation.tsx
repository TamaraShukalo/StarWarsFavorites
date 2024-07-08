import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home/Home';
import {CharacterScreen} from '../screens/CharacterScreen/CharacterScreen';
import {Character} from '../store/characters';

export type MainStackParamList = {
  Home: undefined;
  CharacterScreen: {character: Character};
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'CharacterScreen'} component={CharacterScreen} />
    </Stack.Navigator>
  );
};
