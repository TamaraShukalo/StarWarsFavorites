import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../assets/constants/colors';
import useFetchData from '../hooks/useFetchData';

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

const styles = StyleSheet.create({
  infoContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  verticalLine: {
    position: 'absolute',
    left: '40%',
    height: '80%',
    opacity: 0.5,
    borderLeftColor: COLORS.grey,
    borderLeftWidth: 1.5,
  },
  text: {
    flex: 1,
    color: COLORS.black,
    fontSize: 16,
  },
  errorText: {
    flex: 1,
    color: COLORS.red,
    fontSize: 16,
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  activityIndicator: {
    marginLeft: 12,
  },
});
