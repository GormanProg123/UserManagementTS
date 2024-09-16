import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from '../../types/types';

const initialFiltersState: FiltersState = {
  searchTerm: '',
  sortBy: 'name',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    setSearchItem(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSortBy(state, action: PayloadAction<'name' | 'username' | 'email' | 'phone'>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchItem, setSortBy } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;