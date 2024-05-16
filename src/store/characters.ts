import {create} from 'zustand';
import axios from 'axios';

export interface Character {
  name: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string;
  url: string;
}

interface CharacterStore {
  data: Character[];
  page: number;
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchData: () => Promise<void>;
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  data: [],
  page: 1,
  isLoading: false,
  error: null,
  hasMore: true,

  fetchData: async () => {
    set({isLoading: true, error: null});

    try {
      const {page} = get();
      const response = await axios.get(
        `https://swapi.py4e.com/api/people/?page=${page}`,
      );

      set(state => ({
        data: [...state.data, ...response.data.results],
        page: state.page + 1,
        isLoading: false,
        hasMore: Boolean(response.data.next),
      }));
    } catch (error) {
      console.error('Error fetching data', error);
      set({error: 'Something went wrong', isLoading: false});
    }
  },
}));
