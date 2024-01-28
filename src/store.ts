import { configureStore } from "@reduxjs/toolkit";
import spendingReducer from "./slices/spendingSlice";

export const store = configureStore({
  reducer: {
    spending: spendingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch