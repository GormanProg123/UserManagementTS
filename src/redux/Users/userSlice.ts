import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UsersState } from '../../types/types';

const initialUsersState: UsersState = {
  users: [],
  loading: false,
  error: null,
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

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure, addUser, removeUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;