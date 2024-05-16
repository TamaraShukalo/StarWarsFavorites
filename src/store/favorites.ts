import {create} from 'zustand';
import {Character} from './characters';

interface FavoriteStore {
  favorites: Record<string, Character[]>;
  toggleFavorite: (person: Character) => void;
  clearFavorites: () => void;
  isFavorite: (person: Character) => boolean;
}

const initialState = {
  male: [],
  female: [],
  other: [],
};

const getGender = (state: FavoriteStore, person: Character) => {
  return state.favorites[person.gender] ? person.gender : 'other';
};

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: initialState,

  toggleFavorite: (person: Character) =>
    set(state => {
      const gender = getGender(state, person);

      const favorites = state.favorites[gender];
      const isFavorite = favorites.some(
        favorite => favorite.url === person.url,
      );
      const newFavorites = isFavorite
        ? favorites.filter(p => p.url !== person.url)
        : [...favorites, person];

      return {
        favorites: {
          ...state.favorites,
          [gender]: newFavorites,
        },
      };
    }),

  isFavorite: (person: Character) => {
    const state = get();

    const gender = getGender(state, person);

    const favorites = state.favorites[gender];
    return favorites.some(favorite => favorite.url === person.url);
  },

  clearFavorites: () => set({favorites: initialState}),
}));
