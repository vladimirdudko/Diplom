import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../shared/baseApi";

export interface RootState {
  categories: string;
}

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootStateType = ReturnType<typeof store.getState>;
