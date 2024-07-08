import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Character, useCharacterStore} from '../../store/characters';
import {CharacterItem} from '../../components/CharacterItem/CharacterItem';
import {useFavoriteStore} from '../../store/favorites';
import {FansCount} from '../../components/FansCount/FansCount';
import {Header} from '../../components/Header/Header';
import {FlatListHeader} from '../../components/FlatListHeader/FlatListHeader';
import {styles} from './styles';

export const Home = () => {
  const {data, isLoading, hasMore, fetchData} = useCharacterStore();
  const {toggleFavorite, isFavorite} = useFavoriteStore();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderItem = useCallback(({item}: {item: Character}) => {
    return (
      <CharacterItem
        character={item}
        isFavorite={isFavorite(item)}
        toggleFavorite={toggleFavorite}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      fetchData();
    }
  }, [fetchData, hasMore, isLoading]);

  const renderFooter = useCallback(() => {
    if (!isLoading) {
      return null;
    }
    return <ActivityIndicator style={styles.activitiIndicator} />;
  }, [isLoading]);

  const filteredData = useMemo(() => {
    const preparedQuery = searchQuery.trim().toLowerCase();

    return data.filter(character =>
      character.name.toLowerCase().includes(preparedQuery),
    );
  }, [data, searchQuery]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleEmptyList = useCallback(() => {
    return (
      <View>
        {isLoading ? (
          <ActivityIndicator style={styles.activitiIndicator} />
        ) : (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>No results found</Text>
          </View>
        )}
      </View>
    );
  }, [isLoading]);

  const keyExtractor = useCallback((item: Character) => item.url, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FansCount />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={handleEmptyList}
        ListHeaderComponent={<FlatListHeader onSearch={handleSearch} />}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};
