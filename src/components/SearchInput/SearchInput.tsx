import React, {useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Search} from '../../assets/svg/Search';
import {COLORS} from '../../constants/colors';
import {debounce} from 'lodash';
import {styles} from './styles';

type Props = {
  onSearch: (val: string) => void | undefined;
  placeholder: string;
};

export const SearchInput = ({onSearch, placeholder}: Props) => {
  const [query, setQuery] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      onSearch?.(searchQuery);
    }, 1000),
    [],
  );

  const handleChange = (text: string) => {
    setQuery(text);
    debouncedSearch(text);
  };

  return (
    <View style={styles.container}>
      <Search />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.grey}
        style={styles.input}
        value={query}
        onChangeText={handleChange}
      />
    </View>
  );
};
