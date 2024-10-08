import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Users/userSlice";
import { filtersReducer } from "./Filters/filtersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
  },
});

export default store;

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;