import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UsersState, FiltersState } from '../types/types';

const initialUsersState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const initialFiltersState: FiltersState = {
  searchTerm: '',
  sortBy: 'name',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

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

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure, addUser, removeUser } = usersSlice.actions;
export const { setSearchItem, setSortBy } = filtersSlice.actions;

export const usersReducer = usersSlice.reducer;
export const filtersReducer = filtersSlice.reducer;
