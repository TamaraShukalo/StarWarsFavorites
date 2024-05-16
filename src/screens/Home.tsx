import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../assets/constants/colors';
import {Character, useCharacterStore} from '../store/characters';
import {CharacterItem} from '../components/CharacterItem';
import {useFavoriteStore} from '../store/favorites';
import {Header} from '../components/Header';
import {FansCount} from '../components/FansCount';
import {FlatListHeader} from '../components/FlatListHeader';

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

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FansCount />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.url}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    marginHorizontal: 24,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 4,

    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
  emptyListContainer: {
    borderTopWidth: 0.5,
    borderTopColor: COLORS.grey,
    paddingTop: 30,
  },
  emptyListText: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 16,
  },
  activitiIndicator: {
    margin: 10,
  },
});
