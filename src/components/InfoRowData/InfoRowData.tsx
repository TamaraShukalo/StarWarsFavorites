import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants/colors';
import useFetchData from '../../hooks/useFetchData';

type Props = {
  label: string;
  value: string;
};

export const InfoRowData = ({label, value}: Props) => {
  const {data, isLoading, error} = useFetchData(value);

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.verticalLine} />
      <View style={styles.dataContainer}>
        {isLoading ? (
          <ActivityIndicator
            color={COLORS.grey}
            style={styles.activityIndicator}
          />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <Text style={styles.text}>{data}</Text>
        )}
      </View>
    </View>
  );
};
